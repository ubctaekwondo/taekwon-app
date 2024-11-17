import GlobalStyles from "@/constants/GlobalStyles";
import colors from "@/constants/TKDColors";
import { Tabs, useRouter, usePathname } from "expo-router";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";

interface TabButtonProps {
  label: string;
  route: string;
}

export default function TabsLayout() {
  const router = useRouter(); // Use the router for navigation
  const pathname = usePathname(); // Get the current route

  const TabButton: React.FC<TabButtonProps> = ({ label, route }) => {
    const isActive = pathname === route; // Check if this tab is active

    return (
      <TouchableOpacity
        onPress={() => router.push(route as never)} // Force TypeScript to allow this
        style={[styles.tabButton, isActive && styles.activeTab]}
      >
        <Text
          style={[
            [GlobalStyles.text, { fontSize: moderateScale(16) }],
            isActive && styles.activeTabText,
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Custom Tab Navigation Bar */}
      <View style={styles.tabsContainer}>
        <TabButton label="Today" route="/today" />
        <TabButton label="Calendar" route="/calendar" />
        <TabButton label="News" route="/news" />
      </View>

      {/* Define Screens for Tabs */}
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: "none" }, // Hide the bottom tab bar completely
        }}
      >
        <Tabs.Screen name="today" options={{ tabBarButton: () => null }} />
        <Tabs.Screen name="calendar" options={{ tabBarButton: () => null }} />
        <Tabs.Screen name="news" options={{ tabBarButton: () => null }} />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tkdbeige, // Background color of the screen
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "colors.tkdbeige", // Same as the screen background
    paddingHorizontal: scale(10),
    paddingVertical: scale(20),
  },
  tabButton: {
    borderRadius: scale(20),
    borderWidth: scale(2),
    borderColor: colors.tkdgray,
    paddingHorizontal: scale(24),
    paddingVertical: scale(12),
  },
  activeTab: {
    backgroundColor: colors.tkdgray, // Solid color for the active tab
  },
  activeTabText: {
    color: colors.tkdbeige, // Text color for the active tab
  },
});
