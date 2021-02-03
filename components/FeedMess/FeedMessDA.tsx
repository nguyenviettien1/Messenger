import * as React from "react";
import { View, Text, Image } from "react-native";
import { AvatarSS } from "../Avatar/AvatarSS";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { AvatarS } from "../Avatar/AvatarS";
import { FontAwesome } from "@expo/vector-icons";
export const FeedMessDA = () => {
  return (
    <ScrollView style={{ paddingLeft: 10 }}>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.mess1}>Cuối tuần về quê không</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/ducanh.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess3}>Về thì lên chỗ Quyền</Text>
        </View>
      </View>
      <View style={{ marginTop: 14 }}>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <Text style={styles.mess1r}>Chả biết có về quê được ko nữa</Text>
          <Text style={styles.mess2r}>Dịch đang căng</Text>
          <Text style={styles.mess3r}>Có về t cũng không lên đâu</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}></View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/ducanh.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess0}>
            Đang định nhờ ae tư vấn cho quả này phát
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 14 }}>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <Text style={styles.mess0r}>Quả gì</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}></View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/ducanh.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess0}>Tưởng bị trêu tt yếu ai ngờ yếu thật</Text>
        </View>
      </View>
      <View style={{ marginTop: 14 }}>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <Text style={styles.mess0r}>Vler =))))))</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}></View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/ducanh.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess0}>Đme đ tin được luôn</Text>
        </View>
      </View>
      <View style={{ marginTop: 14 }}>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <Text style={styles.mess0r}>Thế bác sĩ bảo sao</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}></View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/ducanh.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <View style={styles.imageL}>
            <Image
              source={require("../../assets/pos2.jpg")}
              style={styles.imageSend}
            ></Image>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 14 }}>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <Text style={styles.mess1r}>Ui, cái này t chịu</Text>
          <Text style={styles.mess3r}>Hỏi AT1 nhé</Text>
        </View>
      </View>
    </ScrollView>
  );
};
