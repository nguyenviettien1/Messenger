import * as React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";
import { AvatarL } from "../Avatar/AvatarL";
export const Users = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 8 }}
      >
        <View style={styles.userItem}>
          <View style={styles.button}>
            <Entypo name="video-camera" size={25} color="black"></Entypo>
          </View>
          <Text style={styles.textItem}>Tạo phòng họp mặt</Text>
        </View>
        <View style={styles.userItem}>
          <AvatarL
            source={require("../../assets/rutanbi.jpg")}
            online={true}
          ></AvatarL>
          <Text style={styles.textItem}>Nguyễn Hồng Ngọc</Text>
        </View>
        <View style={styles.userItem}>
          <AvatarL
            source={require("../../assets/nam.jpg")}
            online={true}
          ></AvatarL>
          <Text style={styles.textItem}>Đỗ Trọng Hoàng Nam</Text>
        </View>
        <View style={styles.userItem}>
          <AvatarL
            source={require("../../assets/ducanh.jpg")}
            online={true}
          ></AvatarL>
          <Text style={styles.textItem}>Duc Anh le Ba</Text>
        </View>
        <View style={styles.userItem}>
          <AvatarL
            source={require("../../assets/quyen.png")}
            online={true}
          ></AvatarL>
          <Text style={styles.textItem}>Nguyễn Thị Quyên</Text>
        </View>
        <View style={styles.userItem}>
          <AvatarL
            source={require("../../assets/dat.jpg")}
            online={true}
          ></AvatarL>
          <Text style={styles.textItem}>Văn Đạt</Text>
        </View>
        <View style={styles.userItem}>
          <AvatarL
            source={require("../../assets/changoccho.jpg")}
            online={true}
          ></AvatarL>
          <Text style={styles.textItem}>Chang Nguyễn</Text>
        </View>
      </ScrollView>
    </View>
  );
};
