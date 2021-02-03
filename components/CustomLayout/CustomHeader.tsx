import {
  AntDesign,
  Entypo,
  Ionicons,
  Foundation,
  MaterialIcons,
} from "@expo/vector-icons";
import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AvatarM } from "../Avatar/AvatarM";
import styles from "./styles";
export const CustomHeader = ({
  navigation,
  title,
  isGroup,
  imageMess,
  isImportant,
  isOnline,
}: any) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              width: 43,
              height: 34,
              marginTop: 10,
              marginLeft: 10,
            }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={30} color="#3a86e9"></AntDesign>
          </TouchableOpacity>
          <View style={{ marginTop: 6, flexDirection: "row" }}>
            <AvatarM source={imageMess} online={isOnline}></AvatarM>
            {isGroup ? (
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    marginLeft: 10,
                    fontWeight: "bold",
                    fontSize: 16,
                    marginTop: 10,
                  }}
                >
                  {title}
                </Text>
                {isImportant ? (
                  <MaterialIcons
                    name="check-circle"
                    size={14}
                    color="#1877f2"
                    style={{ marginTop: 14, marginLeft: 3 }}
                  ></MaterialIcons>
                ) : null}
              </View>
            ) : (
              <View>
                <Text
                  style={{
                    marginLeft: 10,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  {title}
                </Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 12,
                    fontWeight: "600",
                    color: "#A4A5A7",
                  }}
                >
                  Đang hoạt động
                </Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.row}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginRight: 7,
            }}
          >
            <Ionicons name="call" size={25} color="#3a86e9"></Ionicons>
          </View>
          <View style={styles.button}>
            <Ionicons name="videocam" size={30} color="#3a86e9"></Ionicons>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginLeft: -12,
            }}
          >
            <Entypo name="dot-single" size={40} color="#4bcb1f"></Entypo>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginRight: 7,
            }}
          >
            <Foundation name="info" size={29} color="#3a86e9"></Foundation>
          </View>
        </View>
      </View>
      <View style={styles.bottomDivider}></View>
    </View>
  );
};
