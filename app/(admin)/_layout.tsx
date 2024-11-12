import { Stack } from "expo-router";

export default function AdminLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="adminPanel"
        options={{ headerTitle: "Admin Panel Screen" }}
      />
      <Stack.Screen
        name="manageSchedule"
        options={{ headerTitle: "Manage Schedule Screen" }}
      />
      <Stack.Screen
        name="manageSponsor"
        options={{ headerTitle: "Manage Sponsor Screen" }}
      />
      <Stack.Screen
        name="manageAnnouncements"
        options={{ headerTitle: "Manage Announcements Screen" }}
      />
      <Stack.Screen
        name="manageMembership"
        options={{ headerTitle: "Manage Membership Screen" }}
      />
    </Stack>
  );
}
