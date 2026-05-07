import { useCallback, useState } from "react";
import { Link } from "expo-router";
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Linking,
	ScrollView,
	ActivityIndicator,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import GlobalStyles from "@/constants/GlobalStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { moderateScale, scale } from "react-native-size-matters";
import colors from "@/constants/TKDColors";
import ClassCard from "@/components/ClassCard";
import { getNextClass } from "@/api/classes";
import { ClassEvent } from "@/types/classEvent";

export default function Today() {
	const [nextClass, setNextClass] = useState<ClassEvent | null>(null);
	const [loadingClass, setLoadingClass] = useState(true);
	const [classError, setClassError] = useState<string | null>(null);

	const loadNextClass = async () => {
		setLoadingClass(true);
		setClassError(null);
		try {
			const upcomingClass = await getNextClass();
			setNextClass(upcomingClass);
		} catch {
			setClassError("Could not load class info.");
			setNextClass(null);
		} finally {
			setLoadingClass(false);
		}
	};

	const handlePress = () => {
		Linking.openURL(
			"https://linktr.ee/ubctaekwondo?fbclid=PAZXh0bgNhZW0CMTEAAaYC2nAWj5pQQvvXyvciwNcB6oC-5mA78UGkXD8SBOSucHjXxfpQ8MpxVZs_aem_nzbv5cSTneCPzFpYcE3Edw"
		);
	};

	const getPSTDate = () => {
		const pstFormatter = new Intl.DateTimeFormat("en-US", {
			timeZone: "America/Los_Angeles", // PST timezone
			weekday: "long", // Full day name
			month: "short", // Abbreviated month
			day: "numeric", // Day of the month
		});

		return pstFormatter.format(new Date()); // Format the current date
	};

	useFocusEffect(
		useCallback(() => {
		loadNextClass();
		}, [])
	);

	const formatDayLabel = (date: Date) =>
		new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);

	const formatDateLabel = (date: Date) =>
		new Intl.DateTimeFormat("en-US", {
			day: "numeric",
			month: "short",
		})
			.format(date)
			.toUpperCase();

	const formatTimeLabel = (date: Date) =>
		new Intl.DateTimeFormat("en-US", {
			hour: "numeric",
			minute: "2-digit",
		}).format(date);

	return (
		<ScrollView contentContainerStyle={GlobalStyles.container}>
			<Text style={[styles.dateText, { marginTop: scale(60) }]}>
				{getPSTDate()}
			</Text>
			<Text style={styles.nameText}>Jake A.</Text>

			<View style={{ width: "100%", justifyContent: "flex-start" }}>
				<Link
					href={"/(admin)/adminPanel"}
					style={[
						GlobalStyles.bubbleContainer,
						{ maxWidth: "80%", alignSelf: "flex-start" },
					]}
				>
					<View style={GlobalStyles.textWithIcon}>
						<Text
							style={[
								GlobalStyles.bubbleText,
								{ marginRight: scale(12), lineHeight: moderateScale(14) }, //lineheight used to align text vertically
							]}
						>
							exec
						</Text>
						<Icon name="cog" size={moderateScale(16)} color="#fff" />
					</View>
				</Link>
			</View>
			<View
				style={[
					GlobalStyles.roundEdgeContainer,
					{ paddingBottom: 100, backgroundColor: colors.tkdwhite },
				]}
			>
				<View style={styles.headerContainer}>
					<Text style={GlobalStyles.roundEdgeSmallSubtitle}>What's Up?</Text>
					<TouchableOpacity onPress={() => console.log("Menu pressed")}>
						<Icon
							name="credit-card"
							size={moderateScale(24)}
							color={colors.tkdgray}
						/>
					</TouchableOpacity>
				</View>

				{loadingClass ? (
					<View style={styles.classStateContainer}>
						<ActivityIndicator size="small" color={colors.tkdnavy} />
					</View>
				) : classError ? (
					<View style={styles.classStateContainer}>
						<Text style={GlobalStyles.text}>{classError}</Text>
					</View>
				) : nextClass ? (
					<ClassCard
						dayOfWeek={formatDayLabel(nextClass.startAt)}
						date={formatDateLabel(nextClass.startAt)}
						title={nextClass.title}
						location={nextClass.location}
						startTime={formatTimeLabel(nextClass.startAt)}
						endTime={formatTimeLabel(nextClass.endAt)}
						backgroundColor={colors.tkdblue}
					/>
				) : (
					<View style={styles.classStateContainer}>
						<Text style={GlobalStyles.text}>No upcoming classes found.</Text>
					</View>
				)}

				<View style={GlobalStyles.roundEdgeContainer}>
					<Text style={GlobalStyles.roundEdgeTitle}>SPONSOR PERKS</Text>
				</View>
				<TouchableOpacity
					onPress={handlePress}
					style={GlobalStyles.roundEdgeContainer} // Apply the styles directly to the TouchableOpacity
				>
					<View style={GlobalStyles.textWithIcon}>
						<Text
							style={[
								GlobalStyles.roundEdgeSubtitle,
								{ marginRight: scale(5), textAlign: "center" },
							]}
						>
							Linktree
						</Text>
						<Icon name="tree" size={moderateScale(24)} color={colors.tkdnavy} />
					</View>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	dateText: {
		fontSize: moderateScale(20),
		color: colors.tkdgray,
		textAlign: "left",
		marginBottom: scale(4), // Add spacing between the date and name
		width: "100%",
	},
	nameText: {
		fontSize: moderateScale(64),
		color: colors.tkdgray,
		textAlign: "left",
		width: "100%",
	},
	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		alignItems: "center",
	},
	classStateContainer: {
		width: "100%",
		paddingVertical: scale(24),
		alignItems: "center",
	},
});
