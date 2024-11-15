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
    fontSize: moderateScale(12),
    color: "#373737",
    textAlign: "left",
    width: "100%",
  },
  title: {
    fontSize: moderateScale(48),
    fontWeight: "bold",
    color: "#373737",
    alignSelf: "flex-start",
    textAlign: "left",
  },
  link: {
    fontSize: moderateScale(12),
    textDecorationLine: "underline",
    color: "#373737",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: scale(1),
    borderColor: "#373737",
    borderRadius: scale(24),
    backgroundColor: "#f0eee6",
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
    color: "#373737",
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
    fontSize: moderateScale(12), // Font size
  },
});

export default GlobalStyles;
