import {
  MaterialIcons,
  Entypo,
  FontAwesome,
  Fontisto,
  AntDesign,
} from "@expo/vector-icons";
import * as React from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./styles";
export const CustomFooter = ({ colorFooter }: { colorFooter: any }) => {
  return (
    <View style={styles.bottomMenu}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          width: 45,
        }}
      >
        <Entypo name="dots-two-vertical" size={30} color={colorFooter}></Entypo>
        <Entypo
          name="dots-two-vertical"
          size={30}
          color={colorFooter}
          style={{ marginLeft: -18 }}
        ></Entypo>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 35,
        }}
      >
        <Fontisto name="camera" size={20} color={colorFooter}></Fontisto>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 45,
        }}
      >
        <FontAwesome name="image" size={22} color={colorFooter}></FontAwesome>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 32,
        }}
      >
        <MaterialIcons
          name="keyboard-voice"
          size={24}
          color={colorFooter}
        ></MaterialIcons>
      </View>
      <View style={styles.search}>
        <TextInput placeholder="Aa" placeholderTextColor="#848484"></TextInput>
        <MaterialIcons
          name="tag-faces"
          size={24}
          color={colorFooter}
          style={{ position: "absolute", right: 5 }}
        ></MaterialIcons>
      </View>
      {colorFooter == "red" ? (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            marginRight: 8,
          }}
        >
          <FontAwesome name="heart" size={24} color="red"></FontAwesome>
        </View>
      ) : (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            marginRight: 8,
          }}
        >
          <AntDesign name="like1" size={26} color="#0084ff"></AntDesign>
        </View>
      )}
    </View>
  );
};
