import { Stack } from "expo-router";
import { LogBox } from "react-native";
import { useEffect, useState } from "react";
import { FIREBASE_AUTH } from "@/config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user: any) => {
			console.log("onAuthStateChanged", user);
			setUser(user);
			if (initializing) setInitializing(false);
		});

		return unsubscribe; // unsubscribe on unmount
	}, [initializing]);

	if (initializing) return null;

	if (!user) {
		return (
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="(auth)" />
				<Stack.Screen name="+not-found" />
			</Stack>
		);
	}
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="(tabs)" />
			<Stack.Screen name="(admin)" />
			<Stack.Screen name="+not-found" />
		</Stack>
	);
}
