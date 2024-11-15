import { Stack } from "expo-router";
import { LogBox } from "react-native";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
	const auth = getAuth();
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currUser: any) => {
			console.log("auth state changed");
			setUser(currUser);
			if (initializing) setInitializing(false);
		});

		return unsubscribe; // unsubscribe on unmount
	}, []);

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
			{user ? (
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name="(tabs)" />
					<Stack.Screen name="(admin)" />
					<Stack.Screen name="+not-found" />
				</Stack>
			) : (
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name="(auth)" />
					<Stack.Screen name="+not-found" />
				</Stack>
			)}
		</Stack>
	);
}
