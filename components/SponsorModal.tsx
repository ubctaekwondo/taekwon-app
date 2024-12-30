import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import SimpleModal from "./SimpleModal";
import SponsorCard from "./SponsorCard";
import { scale, moderateScale } from "react-native-size-matters";

// Define the Sponsor interface for the sponsor details
interface Sponsor {
  name: string; // Sponsor name
  description: string; // Sponsor description
  image: any; // Sponsor image source
}

// Define the props for the SponsorModal component
interface SponsorModalProps {
  visible: boolean; // Determines if the modal is visible
  onClose: () => void; // Callback to close the modal
  sponsors: Sponsor[]; // List of sponsors to display
}

const SponsorModal: React.FC<SponsorModalProps> = ({
  visible,
  onClose,
  sponsors,
}) => {
  return (
    <SimpleModal visible={visible} onClose={onClose} title="Sponsor Perks">
      {/* Scrollable container for the sponsor list */}
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
      >
        {/* Informational text about sponsors */}
        <Text
          style={{
            fontSize: moderateScale(14),
            paddingBottom: scale(10),
            width: scale(270),
          }}
        >
          Our amazing sponsors make great things happen! Tap a sponsor card to
          learn more about them and their perks.
        </Text>
        {/* Render a card for each sponsor in the list */}
        {sponsors.map((sponsor, index) => (
          <SponsorCard
            key={index} // Unique key for each card
            name={sponsor.name} // Sponsor name
            description={sponsor.description} // Sponsor description
            image={sponsor.image} // Sponsor image source
          />
        ))}
      </ScrollView>
    </SimpleModal>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingVertical: scale(16),
    alignItems: "center",
  },
});

export default SponsorModal;
