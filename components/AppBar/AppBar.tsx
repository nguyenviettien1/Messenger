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
export const AppBar = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AvatarM source={require("../../assets/me.jpg")}></AvatarM>
          <Text style={styles.textChat}>Chat</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.button}>
            <FontAwesome name="camera" size={18} color="black"></FontAwesome>
          </View>
          <View style={styles.button}>
            <MaterialCommunityIcons
              name="pencil"
              size={19}
              color="black"
            ></MaterialCommunityIcons>
          </View>
        </View>
      </View>
    </View>
  );
};
