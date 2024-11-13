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
  TextInputProps,
} from "react-native";
import GlobalStyles from "@/constants/GlobalStyles";
import { moderateScale, scale } from "react-native-size-matters";
// import { createUserWithEmailAndPassword } from "firebase/auth";
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
    width: scale(100),
    height: scale(100),
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
