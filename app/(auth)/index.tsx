import React, { useState } from "react";
import {
	Image,
	View,
	Text,
	TextInput,
	Pressable,
	StyleSheet,
	ScrollView,
	TextInputProps,
	ActivityIndicator,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { Link, router } from "expo-router";
import GlobalStyles from "@/constants/GlobalStyles";
import { moderateScale, scale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomInput from "@/components/CustomInput";

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
			router.push({
				pathname: "/(tabs)/today",
			});
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
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<View style={GlobalStyles.container}>
				{error ? <Text>{error}</Text> : null}

				<Image
					source={require("@/assets/images/TKDLogo.png")}
					style={styles.logo}
					resizeMode="contain"
				></Image>
				<Text style={styles.boldtext}>Email</Text>
				<CustomInput
					icon="envelope"
					placeholder="Enter your email"
					value={email}
					onChangeText={setEmail}
					keyboardType="email-address"
				/>

				<Text style={styles.boldtext}>Password</Text>
				<CustomInput
					icon="lock"
					placeholder="Enter your password"
					value={password}
					onChangeText={setPassword}
					secureTextEntry
				/>

				{loading ? (
					<ActivityIndicator size="large" color="#0000ff" />
				) : (
					<Pressable onPress={handleSignIn} style={GlobalStyles.signInButton}>
						<Text style={GlobalStyles.signInButtonText}>SIGN IN</Text>
					</Pressable>
				)}

				<Text style={[GlobalStyles.text, { textAlign: "center" }]}>
					Don't have an account?{" "}
					<Link href={"/signup"} style={GlobalStyles.link}>
						Sign up.
					</Link>
				</Text>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	logo: {
		width: scale(290),
		height: scale(290),
		marginBottom: scale(20),
	},
	boldtext: {
		...GlobalStyles.text,
		fontWeight: "bold",
	},
});
