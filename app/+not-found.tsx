import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import GlobalStyles from "@/constants/GlobalStyles";

export default function NotFoundScreen() {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>Oops, not found.</Text>
      <Link href={"/"} style={GlobalStyles.link}>
        Go to Home Screen.
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({});
