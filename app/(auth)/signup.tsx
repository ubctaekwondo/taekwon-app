import { useState } from "react";
import { Link } from "expo-router";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import GlobalStyles from "@/constants/GlobalStyles";
import { moderateScale, scale } from "react-native-size-matters";
// import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSignUp = async () => {
  //   if (firstName && lastName && email && password.length >= 8) {
  //     try {
  //       await createUserWithEmailAndPassword(auth, email, password);
  //       Alert.alert("Success", "Account created successfully!");
  //     } catch (error) {
  //       Alert.alert("Error", error.message);
  //     }
  //   } else {
  //     Alert.alert("Error", "Please fill out all fields and ensure the password is at least 8 characters.");
  //   }
  // };

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
          ></Image>
        </View>

        <Text style={[GlobalStyles.title, { marginBottom: -10 }]}>
          Welcome!
        </Text>
        <Text style={[GlobalStyles.text, { marginBottom: 40 }]}>
          Enter your details below to create account:
        </Text>

        <Text style={styles.boldtext}>First name</Text>
        <TextInput
          style={GlobalStyles.input}
          placeholder="Enter your first name"
          onChangeText={setFirstName}
          value={firstName}
        />

        <Text style={styles.boldtext}>Last name</Text>
        <TextInput
          style={GlobalStyles.input}
          placeholder="Enter your last name"
          onChangeText={setLastName}
          value={lastName}
        />

        <Text style={styles.boldtext}>Email</Text>
        <TextInput
          style={GlobalStyles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <Text style={styles.boldtext}>Password</Text>
        <TextInput
          style={[GlobalStyles.input, { marginBottom: 0 }]}
          placeholder="Enter your password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />

        <Text style={styles.graytext}>Minimum 8 characters</Text>

        {/* <TouchableOpacity onPress={handleSignUp} style={GlobalStyles.button}>
        <Text style={GlobalStyles.buttonText}>SIGN UP</Text>
      </TouchableOpacity> */}

        <Link href={"/today"} style={GlobalStyles.signInButton}>
          <Text style={GlobalStyles.signInButtonText}>SIGN UP</Text>
        </Link>

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
    // position: "absolute",
    // top: scale(50),
    // right: scale(50),
    width: scale(100),
    height: scale(100),
    resizeMode: "contain",
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
