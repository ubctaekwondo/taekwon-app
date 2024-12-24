import colors from "@/constants/TKDColors";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { scale, moderateScale } from "react-native-size-matters";
import GlobalStyles from "@/constants/GlobalStyles";

interface TextBubbleProps {
  text: string;
  backgroundColor?: string;
}

const TextBubble: React.FC<TextBubbleProps> = ({
  text,
  backgroundColor = colors.tkdgray,
}) => {
  return (
    <View style={[GlobalStyles.bubbleContainer, { backgroundColor }]}>
      <Text style={GlobalStyles.bubbleText}>{text}</Text>
    </View>
  );
};

export default TextBubble;
