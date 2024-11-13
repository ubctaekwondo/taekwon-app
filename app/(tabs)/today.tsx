import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import GlobalStyles from "@/constants/GlobalStyles";

export default function Today() {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>Today.</Text>
      <Link href={"/(admin)/adminPanel"} style={GlobalStyles.link}>
        Go to Admin panel Screen.
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({});
