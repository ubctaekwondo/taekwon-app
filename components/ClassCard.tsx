import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GlobalStyles from "@/constants/GlobalStyles";
import colors from "@/constants/TKDColors";
import { scale, moderateScale } from "react-native-size-matters";
import TextBubble from "./TextBubble";

interface ClassCardProps {
	dayOfWeek: string;
	date: string;
	title: string;
	location: string;
	startTime: string;
	endTime: string;
	backgroundColor?: string;
}

const ClassCard: React.FC<ClassCardProps> = ({
	dayOfWeek,
	date,
	title,
	location,
	startTime,
	endTime,
	backgroundColor = colors.tkdbeige,
}) => {
	return (
		<View
			style={[
				GlobalStyles.roundEdgeContainer,
				{ backgroundColor, flexDirection: "row" },
			]}
		>
			<View style={styles.leftContainer}>
				<Text
					style={[
						GlobalStyles.roundEdgeSmallSubtitle,
						{ color: colors.tkdnavy },
					]}
				>
					{dayOfWeek}
				</Text>
				<Text style={GlobalStyles.roundEdgeTitle}>{date}</Text>
			</View>
			<View style={styles.rightContainer}>
				<Text style={GlobalStyles.roundEdgeSubtitle}>{title}</Text>
				<TextBubble text={location} />
				<View style={styles.timeContainer}>
					<Text style={styles.time}>{startTime}</Text>
					<View style={styles.dashContainer}>
						<View style={styles.dash} />
					</View>
					<Text style={styles.time}>{endTime}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	leftContainer: {
		width: "40%",
		justifyContent: "center",
		alignItems: "flex-start",
	},
	rightContainer: {
		width: "60%",
		justifyContent: "center",
		alignItems: "flex-end",
	},
	locationContainer: {
		backgroundColor: colors.tkdgray,
		borderRadius: moderateScale(8),
		paddingHorizontal: scale(8),
		paddingVertical: scale(2),
		marginBottom: scale(8),
	},
	location: {
		color: colors.tkdwhite,
		fontSize: moderateScale(14),
		fontWeight: "bold",
	},
	timeContainer: {
		flexDirection: "row", // Arrange time and dash in a row
		alignItems: "center",
	},
	time: {
		fontSize: moderateScale(14),
		color: colors.tkdnavy,
	},
	dashContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	dash: {
		height: scale(1), // Line thickness
		width: scale(40), // Length of the line
		backgroundColor: colors.tkdnavy, // Color of the line
		marginHorizontal: scale(5),
	},
});

export default ClassCard;
