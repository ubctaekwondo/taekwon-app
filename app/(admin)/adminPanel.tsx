import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function AdminPanel() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Admin Panel.</Text>
      <Link href={"/(admin)/manageSchedule"} style={styles.button}>
        Go to Schedule management Screen.
      </Link>
      <Link href={"/(admin)/manageSponsor"} style={styles.button}>
        Go to Sponsor management Screen.
      </Link>
      <Link href={"/(admin)/manageAnnouncements"} style={styles.button}>
        Go to Announcements management Screen.
      </Link>
      <Link href={"/(admin)/manageMembership"} style={styles.button}>
        Go to Membership management Screen.
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
