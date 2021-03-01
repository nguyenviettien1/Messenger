import * as React from "react";
import { View, Text, Image } from "react-native";
import { AvatarSS } from "../Avatar/AvatarSS";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { AvatarS } from "../Avatar/AvatarS";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
export const FeedMessNam = () => {
  return (
    <ScrollView style={{ paddingLeft: 10 }}>
      <View style={styles.centerMess}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 13, color: "#7d87a9" }}>
            TH 5 LÚC 4:53 CH
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 14 }}>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <Text style={styles.mess1r}>Chả biết có về quê ko</Text>
          <Text style={styles.mess3r}>Hỏi làm gì</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}></View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/nam.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess0}>Mấy em gái kia lên chưa kaka</Text>
        </View>
      </View>
      <View style={{ marginTop: 14 }}>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <Text style={styles.mess0r}>Chưa</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}></View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/nam.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess0}>Ok</Text>
        </View>
      </View>
      <View style={styles.centerMess}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 13, color: "#7d87a9" }}>6:34 CH</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}></View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/nam.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess0}>Mai về chiều hay sáng</Text>
        </View>
      </View>
      <View style={{ marginTop: 14 }}>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <Text style={styles.mess1r}>Chiều</Text>
          <Text style={styles.mess3r}>Sáng mai t đi làm còn gì</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}></View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/nam.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess0}>Oki nha</Text>
        </View>
      </View>
      <View style={{ marginTop: 14 }}>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <Text style={styles.mess1r}>Long bảo mang lap hộ về hả</Text>
          <Text style={styles.mess3r}>Tưởng chủ nhật m ra</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}></View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/nam.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess0}>Mang về cho chị t mà haha</Text>
        </View>
      </View>
      <View style={{ marginTop: 14 }}>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <Text style={styles.mess1r}>Chị m cũng mua à</Text>
          <Text style={styles.mess3r}>Ok mai t mang về cho</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.mess1}>Thank kiu</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/nam.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess3}>Xong t ra lấy cũng được kaka</Text>
        </View>
      </View>
      <View style={{ marginTop: 14 }}>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <Text style={styles.mess1r}>Kaka cái đmm</Text>
          <Text style={styles.mess3r}>Thằng nào hack nick m à</Text>
        </View>
      </View>
      <View>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <View style={{ width: 20, height: 20, alignSelf: "flex-end" }}>
            <AvatarSS
              source={require("../../assets/nam.jpg")}
              hidden={true}
            ></AvatarSS>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
