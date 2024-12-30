import React, { useState } from "react";
import { Link } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import GlobalStyles from "@/constants/GlobalStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { moderateScale, scale } from "react-native-size-matters";
import colors from "@/constants/TKDColors";
import ClassCard from "@/components/ClassCard";
import MembershipModal from "@/components/MembershipModal";
import SponsorModal from "@/components/SponsorModal";

export default function Today() {
  // State for modals
  const [isMembershipModalVisible, setMembershipModalVisible] = useState(false);
  const [isSponsorModalVisible, setSponsorModalVisible] = useState(false);

  // List of sponsors with details
  const sponsors = [
    {
      name: "Flight Club",
      description: "Discounts on group classes.",
      image: require("@/assets/images/flight-club.png"),
    },
    {
      name: "Pearl Fever",
      description: "Premium bubble tea discounts.",
      image: require("@/assets/images/hinbor-test.png"),
    },
    {
      name: "Pearl Fever",
      description: "Premium bubble tea discounts.",
      image: require("@/assets/images/hinbor-test.png"),
    },
    {
      name: "Pearl Fever",
      description: "Premium bubble tea discounts.",
      image: require("@/assets/images/hinbor-test.png"),
    },
    {
      name: "Pearl Fever",
      description: "Premium bubble tea discounts.",
      image: require("@/assets/images/hinbor-test.png"),
    },
    {
      name: "Pearl Fever",
      description: "Premium bubble tea discounts.",
      image: require("@/assets/images/hinbor-test.png"),
    },
    {
      name: "Pearl Fever",
      description: "Premium bubble tea discounts.",
      image: require("@/assets/images/hinbor-test.png"),
    },
    {
      name: "Pearl Fever",
      description: "Premium bubble tea discounts.",
      image: require("@/assets/images/hinbor-test.png"),
    },
    {
      name: "Pearl Fever",
      description: "Premium bubble tea discounts.",
      image: require("@/assets/images/hinbor-test.png"),
    },
    // Add more sponsors here...
  ];

  // Open external Linktree URL
  const handlePress = () => {
    Linking.openURL(
      "https://linktr.ee/ubctaekwondo?fbclid=PAZXh0bgNhZW0CMTEAAaYC2nAWj5pQQvvXyvciwNcB6oC-5mA78UGkXD8SBOSucHjXxfpQ8MpxVZs_aem_nzbv5cSTneCPzFpYcE3Edw"
    );
  };

  // Get current date in PST timezone
  const getPSTDate = () => {
    const pstFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles",
      weekday: "long",
      month: "short",
      day: "numeric",
    });

    return pstFormatter.format(new Date());
  };

  return (
    // Scrollable container for the entire page
    <ScrollView contentContainerStyle={GlobalStyles.container}>
      {/* Display current date */}
      <Text style={[styles.dateText, { marginTop: scale(60) }]}>
        {getPSTDate()}
      </Text>

      {/* Display user name */}
      <Text style={styles.nameText}>Jake A.</Text>

      {/* Admin Panel Link */}
      <View style={{ width: "100%", justifyContent: "flex-start" }}>
        <Link
          href={"/(admin)/adminPanel"}
          style={[GlobalStyles.bubbleContainer, { alignSelf: "flex-start" }]}
        >
          <View style={GlobalStyles.textWithIcon}>
            <Text
              style={[
                GlobalStyles.bubbleText,
                { marginRight: scale(12), lineHeight: moderateScale(15) }, //lineheight used to align text vertically
              ]}
            >
              exec
            </Text>
            <Icon name="cog" size={moderateScale(16)} color="#fff" />
          </View>
        </Link>
      </View>

      {/* Main Content Section */}
      <View
        style={[
          GlobalStyles.roundEdgeContainer,
          { paddingBottom: 100, backgroundColor: colors.tkdwhite },
        ]}
      >
        {/* Section Header */}
        <View style={GlobalStyles.roundEdgeHeaderContainer}>
          <Text style={GlobalStyles.roundEdgeSmallSubtitle}>What's Up?</Text>
          {/* Open Membership Modal */}
          <TouchableOpacity onPress={() => setMembershipModalVisible(true)}>
            <Icon
              name="credit-card"
              size={moderateScale(24)}
              color={colors.tkdgray}
            />
          </TouchableOpacity>
        </View>

        {/* Example Class Card */}
        <ClassCard
          dayOfWeek="Wednesday"
          date="13 NOV"
          title="POOMSAE CLASS"
          location="Great Hall North"
          startTime="5:00 PM"
          endTime="7:00 PM"
          backgroundColor={colors.tkdblue}
        />

        {/* Open Sponsor Modal */}
        <TouchableOpacity
          onPress={() => setSponsorModalVisible(true)} // Trigger modal on tap
          style={GlobalStyles.roundEdgeContainer} // Reuse existing container styles
        >
          <Text style={GlobalStyles.roundEdgeTitle}>SPONSOR PERKS</Text>
        </TouchableOpacity>

        {/* External Link to Linktree */}
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

      {/* Membership Modal */}
      <MembershipModal
        visible={isMembershipModalVisible}
        onClose={() => setMembershipModalVisible(false)}
      />

      {/* Sponsor Modal */}
      <SponsorModal
        visible={isSponsorModalVisible}
        onClose={() => setSponsorModalVisible(false)}
        sponsors={sponsors}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Date text styling
  dateText: {
    fontSize: moderateScale(20),
    color: colors.tkdgray,
    textAlign: "left",
    marginBottom: scale(4), // Add spacing between the date and name
    width: "100%",
  },
  // Name text styling
  nameText: {
    fontSize: moderateScale(64),
    color: colors.tkdgray,
    textAlign: "left",
    width: "100%",
  },
});
