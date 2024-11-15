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

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={GlobalStyles.container}>
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

        <Link href={"/today"} style={GlobalStyles.signInButton}>
          <Text style={GlobalStyles.signInButtonText}>SIGN IN</Text>
        </Link>

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
