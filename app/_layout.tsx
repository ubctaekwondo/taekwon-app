import GlobalStyles from "@/constants/GlobalStyles";
import { Stack } from "expo-router";
import { LogBox } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(admin)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
