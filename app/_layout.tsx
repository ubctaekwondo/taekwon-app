import { Stack } from "expo-router";
import { LogBox } from "react-native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useEffect, useState } from "react";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

	const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
		console.log("onAuthStateChanged", user);
		setUser(user);
		if (initializing) {
			setInitializing(false);
		}
	};

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber; // unsubscribe on unmount
	}, []);

	if (initializing) return null;

	if (!user) {
		return (
			<Stack>
				<Stack.Screen name="(auth)" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" options={{ headerShown: false }} />
			</Stack>
		);
	}

	return (
		<Stack>
			<Stack.Screen name="(admin)" options={{ headerShown: false }} />
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen name="+not-found" options={{ headerShown: false }} />
		</Stack>
	);
}
