import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Today() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today.</Text>
      <Link href={"/(admin)/adminPanel"} style={styles.button}>
        Go to Admin panel Screen.
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
