import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	ActivityIndicator,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import GlobalStyles from "@/constants/GlobalStyles";

export default function Index() {
	const auth = getAuth();
	const navigation = useNavigation(); // Adjust based on your navigation setup

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");

	const handleSignIn = async () => {
		if (!email || !password) {
			setError("Please enter both email and password.");
			return;
		}

		setLoading(true);
		setError("");

		try {
			// Firebase sign-in with email and password
			const temp = await signInWithEmailAndPassword(auth, email, password);
			console.log(temp);
			// TODO: Navigate to the landing screen or main app screen
			// navigation.navigate("(tabs)/today" as never); // Adjust the route name as per your setup
		} catch (err: any) {
			let errorMessage = "An error occurred during sign-in.";
			if (err.code === "auth/user-not-found") {
				errorMessage = "No user found with this email.";
			} else if (err.code === "auth/wrong-password") {
				errorMessage = "Incorrect password.";
			} else if (err.code === "auth/invalid-email") {
				errorMessage = "Invalid email address.";
			}
			setError(errorMessage);
		} finally {
			setLoading(false);
		}
	};

	return (
		<View style={GlobalStyles.container}>
			<Text style={GlobalStyles.text}>Sign in.</Text>
			<Link href={"/(tabs)/today"} style={GlobalStyles.link}>
				Go to Today Screen.
			</Link>

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

			{loading ? (
				<ActivityIndicator size="large" color="#0000ff" />
			) : (
				<Button title="Sign In" onPress={handleSignIn} />
			)}

			<View style={styles.signUpLink}>
				<Text>Don't have an account?</Text>
				<Text
					style={styles.linkText}
					onPress={() => navigation.navigate("signup" as never)} // Adjust the route name
				>
					Sign Up
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
	signUpLink: {
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
