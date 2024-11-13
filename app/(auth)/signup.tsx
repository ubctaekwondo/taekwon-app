import React, { useState } from "react";
import {
  Image,
	View,
	Text,
	TextInput,
  TextInputProps
	Button,
  ScrollView,
	StyleSheet,
	ActivityIndicator,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addMember } from "@/api/member";
// If using Expo Router or React Navigation, import the navigation hook
import { useNavigation } from "@react-navigation/native"; // Adjust based on your navigation library
import GlobalStyles from "@/constants/GlobalStyles";
import { moderateScale, scale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/FontAwesome";

interface CustomInputProps extends TextInputProps {
	icon: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
	icon,
	placeholder,
	value,
	onChangeText,
	keyboardType,
	secureTextEntry,
}) => {
	return (
		<View style={GlobalStyles.inputContainer}>
			<Icon
				name={icon}
				size={moderateScale(20)}
				color="#838383"
				style={GlobalStyles.icon}
			/>
			<TextInput
				style={GlobalStyles.input}
				placeholder={placeholder}
				placeholderTextColor="#838383"
				value={value}
				onChangeText={onChangeText}
				keyboardType={keyboardType}
				secureTextEntry={secureTextEntry}
			/>
		</View>
	);
};

export default function SignUp() {
  const auth = getAuth();
	const navigation = useNavigation(); // Replace with your navigation method if different

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
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
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<View style={GlobalStyles.container}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "flex-end",
						padding: scale(0),
						width: "100%",
					}}
				>
					<Image
						source={require("@/assets/images/TKDLogo.png")}
						style={styles.logo}
						resizeMode="contain"
					></Image>
				</View>

				<Text style={[GlobalStyles.title, { marginBottom: -10 }]}>
					Welcome!
				</Text>
				<Text style={[GlobalStyles.text, { marginBottom: 40 }]}>
					Enter your details below to create account:
				</Text>

				<Text style={styles.boldtext}>First name</Text>
				<CustomInput
					icon="user"
					placeholder="Enter your first name"
					value={firstName}
					onChangeText={setFirstName}
				/>

				<Text style={styles.boldtext}>Last name</Text>
				<CustomInput
					icon="user"
					placeholder="Enter your last name"
					value={lastName}
					onChangeText={setLastName}
				/>

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

				<Text style={styles.graytext}>Minimum 8 characters</Text>

        {loading ? (
				<ActivityIndicator size="large" color="#0000ff" />
			) : (
				<Button title="Sign Up" onPress={handleSignUp} style={GlobalStyles.signInButton}>
					<Text style={GlobalStyles.signInButtonText}>SIGN UP</Text>
				</Button>
			)}

				<Text style={[GlobalStyles.text, { textAlign: "center" }]}>
					Already have an account?{" "}
					<Link href={"/"} style={GlobalStyles.link}>
						Sign in.
					</Link>
				</Text>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	logo: {
		width: scale(64),
		height: scale(64),
	},
	graytext: {
		textAlign: "right",
		color: "#838383",
		alignSelf: "flex-end",
		fontSize: moderateScale(12),
	},
	boldtext: {
		...GlobalStyles.text,
		fontWeight: "bold",
	},
});
