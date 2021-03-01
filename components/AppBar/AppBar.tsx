import * as React from "react";
import { Text, View } from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import styles from "./styles";
import { AvatarM } from "../Avatar/AvatarM";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
export const AppBar = (props: any) => {
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.navigate("CreateMess");
            }}
          >
            <MaterialCommunityIcons
              name="pencil"
              size={19}
              color="black"
            ></MaterialCommunityIcons>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
