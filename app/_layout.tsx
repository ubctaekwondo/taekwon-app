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
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="(auth)"/>
				<Stack.Screen name="+not-found"/>
			</Stack>
		);
	}

	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="(admin)" />
			<Stack.Screen name="(tabs)" />
			<Stack.Screen name="+not-found" />
		</Stack>
	);
}
