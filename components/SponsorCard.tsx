import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import { scale } from "react-native-size-matters";
import colors from "@/constants/TKDColors";
import GlobalStyles from "@/constants/GlobalStyles";

// Define the props for the SponsorCard component
interface SponsorCardProps {
  name: string; // Sponsor name
  description: string; // Sponsor description
  image: ImageSourcePropType; // Source for the sponsor image
}

const SponsorCard: React.FC<SponsorCardProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <View style={styles.card}>
      {/* Display the sponsor's image */}
      <Image source={image} style={styles.image} />

      {/* Display sponsor name and description */}
      <View style={{ padding: scale(16) }}>
        <Text
          style={[
            GlobalStyles.roundEdgeSmallSubtitle,
            { color: colors.tkdwhite }, // White text for better contrast
          ]}
        >
          {name}
        </Text>
        <Text style={[GlobalStyles.text, { color: colors.tkdwhite }]}>
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.tkdnavy,
    borderRadius: scale(10),
    marginBottom: scale(10),
    width: "100%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: scale(100),
    resizeMode: "contain",
  },
});

export default SponsorCard;
