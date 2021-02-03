import * as React from "react";
import { View, Text, Image } from "react-native";
import { AvatarS } from "../Avatar/AvatarS";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { AvatarXL } from "../Avatar/AvatarXL";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
export const FeedMessMTP = () => {
  return (
    <ScrollView style={{ paddingLeft: 10 }}>
      <View
        style={{
          justifyContent: "center",
          flex: 1,
          flexDirection: "row",
          marginTop: 30,
        }}
      >
        <AvatarXL source={require("../../assets/mtp.jpg")}></AvatarXL>
      </View>
      <View
        style={{
          justifyContent: "center",
          flex: 1,
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>M-TP</Text>
          <MaterialIcons
            name="check-circle"
            size={16}
            color="#1877f2"
            style={{ marginLeft: 3, marginTop: 4 }}
          ></MaterialIcons>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          flex: 1,
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 20,
            paddingRight: 20,
            width: "100%",
          }}
        >
          <Text
            style={{ fontSize: 15, textAlign: "center", fontWeight: "600" }}
          >
            11 triệu người thích Trang này, bao gồm Khải Phan và 80 người bạn
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          flex: 1,
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 13, color: "#7d87a9" }}>
            Nhạc sỹ/Ban nhạc
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 14 }}>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <Text
            style={{
              borderWidth: 1,
              borderRadius: 30,
              borderBottomRightRadius: 4,
              borderColor: "#0084ff",
              backgroundColor: "#0084ff",
              color: "#faf5ff",
              padding: 7,
              paddingLeft: 15,
              marginBottom: 2,
              alignSelf: "flex-end",
              fontSize: 15,
              marginRight: 10,
            }}
          >
            Vụ Drama có thật không anh? a vs chị TBT chia tay rồi ạ?
          </Text>
          <Text
            style={{
              borderWidth: 1,
              borderRadius: 30,
              borderTopRightRadius: 4,
              fontSize: 15,
              borderColor: "#0084ff",
              backgroundColor: "#0084ff",
              color: "#faf5ff",
              padding: 7,
              paddingLeft: 15,
              marginBottom: 2,
              alignSelf: "flex-end",
              marginRight: 10,
            }}
          >
            Nếu được thì anh có thể chia sẻ 1 chút về câu chuyện trà xanh được
            không
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          flex: 1,
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 13, color: "#7d87a9" }}>21:15</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}></View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS source={require("../../assets/mtp.jpg")}></AvatarS>
          </View>
          <Text style={styles.mess0}>Tập trung tin covid đi. pls!!!</Text>
        </View>
      </View>
      <View style={{ marginTop: 14 }}>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 17 }}>
          <View
            style={{
              width: 30,
              height: 30,
              alignSelf: "flex-end",
            }}
          >
            <FontAwesome name="heart" size={30} color="red"></FontAwesome>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
