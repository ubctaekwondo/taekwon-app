import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import GlobalStyles from "@/constants/GlobalStyles";

export default function AdminPanel() {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>Admin Panel.</Text>
      <Link href={"/(admin)/manageSchedule"} style={GlobalStyles.link}>
        Go to Schedule management Screen.
      </Link>
      <Link href={"/(admin)/manageSponsor"} style={GlobalStyles.link}>
        Go to Sponsor management Screen.
      </Link>
      <Link href={"/(admin)/manageAnnouncements"} style={GlobalStyles.link}>
        Go to Announcements management Screen.
      </Link>
      <Link href={"/(admin)/manageMembership"} style={GlobalStyles.link}>
        Go to Membership management Screen.
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({});
