import { Text, View, StyleSheet } from "react-native";
import GlobalStyles from "@/constants/GlobalStyles";

export default function News() {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>News.</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
