import * as React from "react";
import { Text, View } from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import styles from "./styles";
import { AvatarM } from "../Avatar/AvatarM";
import { TextInput } from "react-native-gesture-handler";
export const Search = () => {
  return (
    <View style={styles.search}>
      <AntDesign
        name="search1"
        size={19}
        color="#BDBDBD"
        style={{ marginRight: 10 }}
      ></AntDesign>
      <TextInput
        placeholder="Tìm kiếm"
        placeholderTextColor="#848484"
      ></TextInput>
    </View>
  );
};
