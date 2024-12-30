import { StyleSheet } from "react-native";
import { scale, moderateScale } from "react-native-size-matters";
import colors from "./TKDColors";

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(28),
    paddingVertical: scale(48),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.tkdbeige,
  },
  text: {
    fontSize: moderateScale(14),
    color: colors.tkdgray,
    textAlign: "left",
    width: "100%",
  },
  title: {
    fontSize: moderateScale(48),
    fontWeight: "bold",
    color: colors.tkdgray,
    alignSelf: "flex-start",
    textAlign: "left",
  },
  link: {
    fontSize: moderateScale(14),
    textDecorationLine: "underline",
    color: colors.tkdgray,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: scale(1),
    borderColor: colors.tkdgray,
    borderRadius: scale(24),
    backgroundColor: colors.tkdwhite,
    paddingHorizontal: scale(12),
    marginTop: scale(4),
    marginBottom: scale(8),
    width: "100%",
  },
  icon: {
    marginRight: scale(8),
  },
  input: {
    flex: 1,
    fontSize: moderateScale(12),
    color: colors.tkdgray,
    paddingVertical: scale(8),
    backgroundColor: "transparent",
  },
  signInButton: {
    backgroundColor: "#D9534F", // Button color
    paddingVertical: scale(16), // Vertical padding for height
    paddingHorizontal: scale(32), // Horizontal padding for width
    borderRadius: scale(12), // Rounded corners
    alignItems: "center", // Center text inside the button
    marginVertical: scale(28), // Space above and below the button
  },
  signInButtonText: {
    color: "#fff", // White text color
    fontSize: moderateScale(14), // Font size
  },
  roundEdgeContainer: {
    backgroundColor: colors.tkdbeige, // Light beige background
    borderRadius: scale(28), // Rounded edges
    paddingVertical: scale(16), // Space inside the container
    paddingHorizontal: scale(28), // Padding for content
    marginTop: scale(8), // Space between sections
    width: "112%", // Full width matching the design
    alignSelf: "center", // Center the container
    alignItems: "center", // Center text inside the container
  },
  roundEdgeSubtitle: {
    fontSize: moderateScale(24),
    color: colors.tkdnavy,
    fontWeight: "bold",
    textAlign: "right",
  },
  roundEdgeTitle: {
    fontSize: moderateScale(40),
    color: colors.tkdnavy,
    fontWeight: "bold",
    width: "100%",
    textAlign: "left",
  },
  roundEdgeSmallSubtitle: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
    color: colors.tkdgray, // Title color
  },
  bubbleContainer: {
    backgroundColor: colors.tkdgray, // Dark gray bubble background
    borderRadius: scale(16), // Rounded edges
    paddingHorizontal: scale(16), // Horizontal padding inside the bubble
    paddingVertical: scale(4), // Vertical padding inside the bubble
    marginTop: scale(4), // Add spacing to the top of the bubble
    marginBottom: scale(4), // Add spacing to the bottom of the bubble
    alignItems: "center",
  },
  bubbleText: {
    color: colors.tkdwhite, // White text color
    fontSize: moderateScale(14), // Text size
  },
  textWithIcon: {
    flexDirection: "row", // Arrange text and icon in a row
    alignItems: "center", // Align icon and text vertically
  },
  roundEdgeHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "flex-start",
  },
});

export default GlobalStyles;
