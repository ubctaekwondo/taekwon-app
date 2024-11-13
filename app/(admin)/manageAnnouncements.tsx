import { Text, View, StyleSheet } from "react-native";
import GlobalStyles from "@/constants/GlobalStyles";

export default function Announcements() {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>Announcements.</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
