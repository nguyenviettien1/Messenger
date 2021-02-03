import * as React from "react";
import { View, Text, Image } from "react-native";
import { AvatarS } from "../Avatar/AvatarS";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { AvatarXL } from "../Avatar/AvatarXL";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
export const FeedMessNga = () => {
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
        <AvatarXL source={require("../../assets/nga.jpg")}></AvatarXL>
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
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Trịnh Nga</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          flex: 1,
          flexDirection: "row",
          marginTop: 10,
        }}
      ></View>
      <View
        style={{
          justifyContent: "center",
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 13, color: "#7d87a9" }}>
            1 bạn chung: Vinh Nguyễn Hữu
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          flex: 1,
          flexDirection: "row",
          marginTop: 5,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 13, color: "#7d87a9" }}>
            Học tại Đại học Mở Hà Nội - Hanoi Open University
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
            M kết bạn với thằng bạn anh ấy, tên facebook của n là: Nguyễn Văn
            Khải
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
            Nó là con hiệu trưởng trường 3 đấy
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
          <Text style={{ fontSize: 13, color: "#7d87a9" }}>12:14 Th2</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}></View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS source={require("../../assets/nga.jpg")}></AvatarS>
          </View>
          <Text style={styles.mess0}>Ơ a Tiến à</Text>
        </View>
      </View>
      <View style={{ marginTop: 14 }}>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <Text style={styles.mess1rBlue}>Ko a thì ai</Text>
          <Text style={styles.mess3rBlue}>Thế nhé</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}></View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS source={require("../../assets/nga.jpg")}></AvatarS>
          </View>
          <Text style={styles.mess0}>@@@@</Text>
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
            <AntDesign name="like1" size={26} color="#0084ff"></AntDesign>
          </View>
        </View>
      </View>

      <View style={styles.centerMess}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 13, color: "#7d87a9" }}>12:57</Text>
        </View>
      </View>
      <View style={{ marginTop: 14 }}>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <Text style={styles.mess1rBlue}>Ơ m kết bạn vs thằng bạn a chưa</Text>
          <Text style={styles.mess3rBlue}>N bảo chưa kb này</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}></View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS source={require("../../assets/nga.jpg")}></AvatarS>
          </View>
          <Text style={styles.mess0}>Em đâu có quen đâu</Text>
        </View>
      </View>
    </ScrollView>
  );
};
