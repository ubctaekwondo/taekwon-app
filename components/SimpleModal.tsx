import React, { useRef, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
} from "react-native";
import GlobalStyles from "@/constants/GlobalStyles";
import colors from "@/constants/TKDColors";
import { scale, moderateScale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/FontAwesome";

// Define the props for the SimpleModal component
interface SimpleModalProps {
  visible: boolean; // Determines if the modal is visible
  onClose: () => void; // Callback to close the modal
  title: string; // Title to display in the modal header
  children: React.ReactNode; // Content to display inside the modal
}

const SimpleModal: React.FC<SimpleModalProps> = ({
  visible,
  onClose,
  title,
  children,
}) => {
  // Animation reference for sliding effect
  const slideAnim = useRef(new Animated.Value(scale(300))).current;

  // Effect to handle modal visibility changes with animation
  useEffect(() => {
    if (visible) {
      // Slide the modal into view
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      // Slide the modal out of view
      Animated.timing(slideAnim, {
        toValue: scale(300),
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideAnim]);

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      {/* Overlay for dimming the background */}
      <View
        style={[
          GlobalStyles.container,
          { backgroundColor: "rgba(0, 0, 0, 0.5)" }, // Semi-transparent black background
        ]}
      >
        <Animated.View
          style={[
            GlobalStyles.roundEdgeContainer,
            styles.modalContent,
            {
              transform: [{ translateY: slideAnim }], // Apply slide animation
              backgroundColor: colors.tkdbeige, // Modal background color
            },
          ]}
        >
          {/* Header Section */}
          <View style={GlobalStyles.roundEdgeHeaderContainer}>
            <Text
              style={[
                GlobalStyles.roundEdgeTitle,
                { flex: 0.99, flexWrap: "wrap" }, // Allow title to wrap if needed
              ]}
            >
              {title}
            </Text>
            {/* Close Button */}
            <TouchableOpacity
              onPress={onClose} // Call onClose when pressed
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // Increase tappable area
            >
              <Icon
                name="close"
                size={moderateScale(36)}
                color={colors.tkdgray}
              />
            </TouchableOpacity>
          </View>

          {/* Content Section */}
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    position: "absolute",
    bottom: -30,
    height: "110%",
  },
  scrollViewContent: {
    paddingVertical: scale(16),
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
});

export default SimpleModal;
