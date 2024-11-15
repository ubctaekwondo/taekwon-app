import { useState } from "react";
import { Link } from "expo-router";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TextInputProps,
} from "react-native";
import GlobalStyles from "@/constants/GlobalStyles";
import { moderateScale, scale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomInput from "@/components/CustomInput";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
