import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	ActivityIndicator,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addMember } from "@/api/member";
// If using Expo Router or React Navigation, import the navigation hook
import { useNavigation } from "@react-navigation/native"; // Adjust based on your navigation library

export default function SignUpScreen() {
	const auth = getAuth();
	const navigation = useNavigation(); // Replace with your navigation method if different

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");

	const handleSignUp = async () => {
		// Basic validation
		if (!email || !password || !confirmPassword) {
			setError("All fields are required.");
			return;
		}

		if (password !== confirmPassword) {
			setError("Passwords do not match.");
			return;
		}

		setLoading(true);
		setError("");

		try {
			// Create user with email and password
			console.log("sent!");
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;
			console.log(user);

			// Add user details to Firestore
			addMember({
				uid: user.uid,
				createdAt: new Date(),
				firstname: "",
				lastname: "",
				membership: false,
				roles: [],
				streak: 0,
			});

			// TODO: Navigate to the landing page or another screen
			// navigation.navigate("Landing"); // Adjust the route name as per your navigation setup
			console.log("user added!");
		} catch (err: any) {
			// Handle Firebase sign-up errors
			let errorMessage = "An error occurred during sign up.";
			if (err.code === "auth/email-already-in-use") {
				errorMessage = "This email is already in use.";
			} else if (err.code === "auth/invalid-email") {
				errorMessage = "Invalid email address.";
			} else if (err.code === "auth/weak-password") {
				errorMessage = "Password should be at least 6 characters.";
			}
			setError(errorMessage);
		} finally {
			setLoading(false);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Sign Up</Text>

			{error ? <Text style={styles.errorText}>{error}</Text> : null}

			<TextInput
				style={styles.input}
				placeholder="Email"
				value={email}
				onChangeText={setEmail}
				keyboardType="email-address"
				autoCapitalize="none"
			/>

			<TextInput
				style={styles.input}
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
				autoCapitalize="none"
			/>

			<TextInput
				style={styles.input}
				placeholder="Confirm Password"
				value={confirmPassword}
				onChangeText={setConfirmPassword}
				secureTextEntry
				autoCapitalize="none"
			/>

			{loading ? (
				<ActivityIndicator size="large" color="#0000ff" />
			) : (
				<Button title="Sign Up" onPress={handleSignUp} />
			)}

			<View style={styles.loginLink}>
				<Text>Already have an account?</Text>
				<Text
					style={styles.linkText}
					onPress={() => navigation.navigate("index" as never)} // Adjust the route name
				>
					Sign In
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: "center",
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 32,
		marginBottom: 20,
		textAlign: "center",
		fontWeight: "bold",
	},
	input: {
		height: 50,
		borderColor: "#ccc",
		borderWidth: 1,
		borderRadius: 8,
		paddingHorizontal: 15,
		marginBottom: 15,
		fontSize: 16,
	},
	errorText: {
		color: "red",
		marginBottom: 15,
		textAlign: "center",
	},
	loginLink: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 20,
	},
	linkText: {
		color: "#1E90FF",
		marginLeft: 5,
		fontWeight: "bold",
	},
});
