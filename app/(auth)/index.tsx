import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import GlobalStyles from "@/constants/GlobalStyles";

export default function Index() {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>Sign in.</Text>
      <Link href={"/(tabs)/today"} style={GlobalStyles.link}>
        Go to Today Screen.
      </Link>
      <Link href={"/signup"} style={GlobalStyles.link}>
        Go to Sign up Screen.
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({});
