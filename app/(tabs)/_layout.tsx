import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="today" options={{ headerTitle: "Today Screen" }} />
      <Tabs.Screen
        name="calendar"
        options={{ headerTitle: "Calendar Screen" }}
      />
      <Tabs.Screen name="news" options={{ headerTitle: "News Screen" }} />
    </Tabs>
  );
}
