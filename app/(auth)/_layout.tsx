import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Sign in Screen", headerLeft: () => <></> }}
      />
      <Stack.Screen name="signup" options={{ headerTitle: "Sign Up Screen" }} />
    </Stack>
  );
}
