import { Link } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import GlobalStyles from "@/constants/GlobalStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { moderateScale, scale } from "react-native-size-matters";
import colors from "@/constants/TKDColors";
import ClassCard from "@/components/ClassCard";

export default function Today() {
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

  return (
    <View style={GlobalStyles.container}>
      <Text style={[styles.dateText, { marginTop: 100 }]}>{getPSTDate()}</Text>
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

        <ClassCard
          dayOfWeek="Wednesday"
          date="13 NOV"
          title="POOMSAE CLASS"
          location="Great Hall North"
          startTime="5:00 PM"
          endTime="7:00 PM"
          backgroundColor={colors.tkdblue}
        />

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
    </View>
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
});
