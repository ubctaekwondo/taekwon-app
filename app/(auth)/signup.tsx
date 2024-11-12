import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign up.</Text>
      <Link href={"/today"} style={styles.button}>
        Go to Today Screen.
      </Link>
      <Link href={"/"} style={styles.button}>
        Go to Sign in Screen.
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "white",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
