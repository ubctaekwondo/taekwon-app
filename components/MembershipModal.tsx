import React from "react";
import { Image, StyleSheet } from "react-native";
import SimpleModal from "./SimpleModal";
import { scale } from "react-native-size-matters";

// Define the props for the MembershipModal component
interface MembershipModalProps {
  visible: boolean; // Determines if the modal is visible
  onClose: () => void; // Callback to close the modal
}

const MembershipModal: React.FC<MembershipModalProps> = ({
  visible,
  onClose,
}) => {
  return (
    // Use the SimpleModal component to render the modal
    <SimpleModal visible={visible} onClose={onClose} title="Membership Card">
      {/* Display the membership card image */}
      <Image
        source={require("@/assets/images/TKDCard.png")}
        style={styles.image}
      />
    </SimpleModal>
  );
};

const styles = StyleSheet.create({
  image: {
    width: scale(316),
    height: scale(530),
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default MembershipModal;
