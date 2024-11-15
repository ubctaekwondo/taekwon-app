import GlobalStyles from "@/constants/GlobalStyles";
import { TextInput, TextInputProps, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/FontAwesome";

interface CustomInputProps extends TextInputProps {
  icon: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  icon,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <View style={GlobalStyles.inputContainer}>
      <Icon
        name={icon}
        size={moderateScale(20)}
        color="#838383"
        style={GlobalStyles.icon}
      />
      <TextInput
        style={GlobalStyles.input}
        placeholder={placeholder}
        placeholderTextColor="#838383"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;
