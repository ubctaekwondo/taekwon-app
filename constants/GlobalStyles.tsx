import { StyleSheet } from "react-native";
import { scale, moderateScale } from "react-native-size-matters";
import colors from "./TKDColors";

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(50),
    paddingVertical: scale(50),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.tkdbeige,
  },
  text: {
    fontSize: moderateScale(14),
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
    fontSize: moderateScale(14),
    textDecorationLine: "underline",
    color: "#373737",
  },
  input: {
    borderWidth: scale(1),
    borderColor: "#373737",
    borderRadius: scale(25),
    paddingVertical: scale(8),
    paddingHorizontal: scale(15),
    fontSize: moderateScale(14),
    backgroundColor: "#f0eee6",
    color: "#373737",
    marginVertical: scale(8),
    width: "100%",
  },
  signInButton: {
    backgroundColor: "#D9534F", // Button color (red in this case)
    paddingVertical: scale(15), // Vertical padding for height
    paddingHorizontal: scale(30), // Horizontal padding for width
    borderRadius: scale(10), // Rounded corners
    alignItems: "center", // Center text inside the button
    marginVertical: scale(30), // Space above and below the button
  },
  signInButtonText: {
    color: "#fff", // White text color
    fontSize: moderateScale(16), // Font size
  },
});

export default GlobalStyles;
