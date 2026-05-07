import { useEffect, useMemo, useState } from "react";
import {
	ActivityIndicator,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import GlobalStyles from "@/constants/GlobalStyles";
import colors from "@/constants/TKDColors";
import { moderateScale, scale } from "react-native-size-matters";
import ClassCard from "@/components/ClassCard";
import { getClassesForMonth } from "@/api/classes";
import { ClassEvent } from "@/types/classEvent";

export default function Calendar() {
	const [viewDate, setViewDate] = useState(new Date());
	const [classes, setClasses] = useState<ClassEvent[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const monthLabel = useMemo(
		() =>
			new Intl.DateTimeFormat("en-US", {
				month: "long",
				year: "numeric",
			}).format(viewDate),
		[viewDate]
	);

	const loadClasses = async (date: Date) => {
		setLoading(true);
		setError(null);
		try {
			const monthClasses = await getClassesForMonth(
				date.getFullYear(),
				date.getMonth() + 1
			);
			setClasses(monthClasses);
		} catch {
			setError("Could not load classes. Please try again.");
			setClasses([]);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		loadClasses(viewDate);
	}, [viewDate]);

	const goToPreviousMonth = () => {
		setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
	};

	const goToNextMonth = () => {
		setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
	};

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
		<ScrollView contentContainerStyle={[GlobalStyles.container, styles.container]}>
			<View style={styles.monthHeader}>
				<Pressable onPress={goToPreviousMonth} style={styles.monthButton}>
					<Text style={styles.monthButtonText}>{"<"}</Text>
				</Pressable>
				<Text style={styles.monthTitle}>{monthLabel}</Text>
				<Pressable onPress={goToNextMonth} style={styles.monthButton}>
					<Text style={styles.monthButtonText}>{">"}</Text>
				</Pressable>
			</View>

			{loading ? (
				<View style={styles.stateContainer}>
					<ActivityIndicator size="large" color={colors.tkdnavy} />
				</View>
			) : error ? (
				<View style={styles.stateContainer}>
					<Text style={GlobalStyles.text}>{error}</Text>
				</View>
			) : classes.length === 0 ? (
				<View style={styles.stateContainer}>
					<Text style={GlobalStyles.text}>No classes this month.</Text>
				</View>
			) : (
				<View style={styles.listContainer}>
					{classes.map((classEvent) => (
						<ClassCard
							key={classEvent.id}
							dayOfWeek={formatDayLabel(classEvent.startAt)}
							date={formatDateLabel(classEvent.startAt)}
							title={classEvent.title}
							location={classEvent.location}
							startTime={formatTimeLabel(classEvent.startAt)}
							endTime={formatTimeLabel(classEvent.endAt)}
							backgroundColor={colors.tkdwhite}
						/>
					))}
				</View>
			)}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: scale(48),
		paddingBottom: scale(96),
	},
	monthHeader: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: scale(16),
	},
	monthTitle: {
		fontSize: moderateScale(28),
		fontWeight: "bold",
		color: colors.tkdgray,
	},
	monthButton: {
		borderRadius: scale(16),
		borderWidth: 1,
		borderColor: colors.tkdgray,
		paddingHorizontal: scale(16),
		paddingVertical: scale(8),
	},
	monthButtonText: {
		color: colors.tkdgray,
		fontSize: moderateScale(18),
		fontWeight: "bold",
	},
	stateContainer: {
		width: "100%",
		paddingVertical: scale(24),
		alignItems: "center",
	},
	listContainer: {
		width: "100%",
	},
});
