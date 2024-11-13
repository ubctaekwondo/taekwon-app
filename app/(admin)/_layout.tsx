import { Stack } from "expo-router";

export default function AdminLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="adminPanel" />
      <Stack.Screen name="manageSchedule" />
      <Stack.Screen name="manageSponsor" />
      <Stack.Screen name="manageAnnouncements" />
      <Stack.Screen name="manageMembership" />
    </Stack>
  );
}
