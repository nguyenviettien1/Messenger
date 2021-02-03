import * as React from "react";
import { View, Text, Image } from "react-native";
import { AvatarS } from "../Avatar/AvatarS";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { AvatarXL } from "../Avatar/AvatarXL";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
export const FeedMessVirusS = () => {
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
        <AvatarXL source={require("../../assets/vr.jpg")}></AvatarXL>
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
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>VirusS</Text>
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
            4,2 triệu người thích Trang này, bao gồm Nguyễn Văn Điền và 25 người
            bạn
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
          <Text style={{ fontSize: 13, color: "#7d87a9" }}>Nghệ sỹ</Text>
        </View>
      </View>

      <View style={{ marginTop: 14 }}>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <Text style={styles.mess1rBlue}>
            Bao giờ Bình Gold ra rap dizz a có reaction ko a
          </Text>
          <Text style={styles.mess3rBlue}>
            A sẽ có hành động gì phản pháo lại bài rap dizz này?
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
          <Text style={{ fontSize: 13, color: "#7d87a9" }}>11:15</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}></View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS source={require("../../assets/vr.jpg")}></AvatarS>
          </View>
          <Text style={styles.mess0}>Tay nhặt lá chân đá ống bơ ấy mà</Text>
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
