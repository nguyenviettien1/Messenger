import * as React from "react";
import { View, Text, Image } from "react-native";
import { AvatarL } from "../Avatar/AvatarL";
import { AvatarSS } from "../Avatar/AvatarSS";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
export const Feed = (props: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.messItem}
        onPress={() => {
          props.navigation.navigate("ScreenAT1");
        }}
      >
        <AvatarL
          source={require("../../assets/at11.jpg")}
          online={true}
        ></AvatarL>
        <View style={styles.viewMess}>
          <Text style={{ paddingBottom: 2, fontSize: 15 }}>AT1</Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text numberOfLines={1} style={{ fontSize: 13, color: "#848484" }}>
              Bạn: Mưa
            </Text>
            <Entypo
              name="dot-single"
              size={12}
              color="#747476"
              style={{ marginTop: 2 }}
            ></Entypo>
            <Text style={{ fontSize: 13, color: "#848484" }}>5:25 CH</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.messItem} onPress={() => {}}>
        <AvatarL
          source={require("../../assets/dat.jpg")}
          online={true}
        ></AvatarL>
        <View style={styles.viewMess}>
          <Text style={{ paddingBottom: 2, fontSize: 15 }}>Văn Đạt</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 13, color: "#848484" }}>
              Bạn đã gửi 1 ảnh
            </Text>
            <Entypo
              name="dot-single"
              size={12}
              color="#747476"
              style={{ marginTop: 2 }}
            ></Entypo>
            <Text style={{ fontSize: 13, color: "#848484" }}>10:22 SA</Text>
          </View>
        </View>
        <View style={{ marginTop: 28, marginRight: 4 }}>
          <AvatarSS
            source={require("../../assets/dat.jpg")}
            hidden={true}
          ></AvatarSS>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.messItem}
        onPress={() => {
          props.navigation.navigate("ScreenDA");
        }}
      >
        <AvatarL
          source={require("../../assets/ducanh.jpg")}
          online={true}
        ></AvatarL>
        <View style={styles.viewMess}>
          <Text style={{ paddingBottom: 2, fontSize: 15 }}>Duc Anh le Ba</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 13, color: "#848484" }}>oke nhé</Text>
            <Entypo
              name="dot-single"
              size={12}
              color="#747476"
              style={{ marginTop: 2 }}
            ></Entypo>
            <Text style={{ fontSize: 13, color: "#848484" }}>08:50 SA</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.messItem}>
        <AvatarL
          source={require("../../assets/viet.jpg")}
          online={true}
        ></AvatarL>
        <View style={styles.viewMess}>
          <Text style={{ paddingBottom: 2, fontSize: 15 }}>
            Nguyễn Đức Việt
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 13, color: "#848484" }}>
              Bạn: :))))))))
            </Text>
            <Entypo
              name="dot-single"
              size={12}
              color="#747476"
              style={{ marginTop: 2 }}
            ></Entypo>
            <Text style={{ fontSize: 13, color: "#848484" }}>8:44 SA</Text>
          </View>
        </View>
      </View>
      <View style={styles.messItem}>
        <AvatarL source={require("../../assets/uniqlo.png")}></AvatarL>
        <View style={styles.viewMess}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ paddingBottom: 2, fontSize: 15 }}>
              Uniqlo Vietnam
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: "#F2F2F2",
                borderColor: "#ccc",
                backgroundColor: "#ccc",
                borderWidth: 1,
                borderRadius: 10,
                marginLeft: 5,
                padding: 3,
              }}
            >
              Quảng cáo
            </Text>
          </View>

          <Text style={{ fontSize: 13, color: "#848484" }} numberOfLines={1}>
            TẾT XẢ HẾT - 50% toàn bộ hàng hóa trong ngày hôm nay
          </Text>
          <Text style={{ color: "#1877F2", fontWeight: "600" }}>Xem thêm</Text>
        </View>
        <Image
          source={require("../../assets/aoo.png")}
          style={{ width: 45, height: 54, borderRadius: 8, marginRight: 7 }}
        ></Image>
      </View>
      <View style={styles.messItem}>
        <AvatarL
          source={require("../../assets/tuananh.jpg")}
          online={false}
        ></AvatarL>
        <View style={styles.viewMess}>
          <Text style={{ paddingBottom: 2, fontSize: 15 }}>
            Nguyễn Tuấn Anh
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 13, color: "#848484" }}>
              OK. Chiều t trả nha
            </Text>
            <Entypo
              name="dot-single"
              size={12}
              color="#747476"
              style={{ marginTop: 2 }}
            ></Entypo>
            <Text style={{ fontSize: 13, color: "#848484" }}>8:40 SA</Text>
          </View>
        </View>
      </View>
      <View style={styles.messItem}>
        <AvatarL
          source={require("../../assets/dungdung.jpg")}
          online={false}
        ></AvatarL>
        <View style={styles.viewMess}>
          <Text style={{ paddingBottom: 2, fontSize: 15 }}>Dung Dung</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 13, color: "#848484" }}>OK</Text>
            <Entypo
              name="dot-single"
              size={12}
              color="#747476"
              style={{ marginTop: 2 }}
            ></Entypo>
            <Text style={{ fontSize: 13, color: "#848484" }}>8:20 SA</Text>
          </View>
        </View>
      </View>
      <View style={styles.messItem}>
        <AvatarL
          source={require("../../assets/vinh.jpg")}
          online={true}
        ></AvatarL>
        <View style={styles.viewMess}>
          <Text style={{ paddingBottom: 2, fontSize: 15 }}>
            Vinh Nguyễn Hữu
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 13, color: "#848484" }}>10r ms đi đx</Text>
            <Entypo
              name="dot-single"
              size={12}
              color="#747476"
              style={{ marginTop: 2 }}
            ></Entypo>
            <Text style={{ fontSize: 13, color: "#848484" }}>10:22 CH</Text>
          </View>
        </View>
      </View>
      <View style={styles.messItem}>
        <AvatarL
          source={require("../../assets/nam.jpg")}
          online={true}
        ></AvatarL>
        <View style={styles.viewMess}>
          <Text style={{ paddingBottom: 2, fontSize: 15 }}>
            Đỗ Trọng Hoàng Nam
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 13, color: "#848484" }}>Bạn: 3r</Text>
            <Entypo
              name="dot-single"
              size={12}
              color="#747476"
              style={{ marginTop: 2 }}
            ></Entypo>
            <Text style={{ fontSize: 13, color: "#848484" }}>1 ngày</Text>
          </View>
        </View>
        <View style={{ marginTop: 28, marginRight: 4 }}>
          <AvatarSS
            source={require("../../assets/nam.jpg")}
            hidden={true}
          ></AvatarSS>
        </View>
      </View>
      <View style={styles.messItem}>
        <AvatarL
          source={require("../../assets/bac.jpg")}
          online={true}
        ></AvatarL>
        <View style={styles.viewMess}>
          <Text style={{ paddingBottom: 2, fontSize: 15 }}>Bắc Nguyễn</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 13, color: "#848484" }}>Bạn: oke</Text>
            <Entypo
              name="dot-single"
              size={12}
              color="#747476"
              style={{ marginTop: 2 }}
            ></Entypo>
            <Text style={{ fontSize: 13, color: "#848484" }}>Th 2</Text>
          </View>
        </View>
      </View>
      <View style={styles.messItem}>
        <AvatarL
          source={require("../../assets/changoccho.jpg")}
          online={true}
        ></AvatarL>
        <View style={styles.viewMess}>
          <Text style={{ paddingBottom: 2, fontSize: 15 }}>Chang sừng</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 13, color: "#848484" }}>
              Bạn: biết thế đã
            </Text>
            <Entypo
              name="dot-single"
              size={12}
              color="#747476"
              style={{ marginTop: 2 }}
            ></Entypo>
            <Text style={{ fontSize: 13, color: "#848484" }}>Th 7</Text>
          </View>
        </View>
      </View>
      <View style={styles.messItem}>
        <AvatarL
          source={require("../../assets/quyen.png")}
          online={true}
        ></AvatarL>
        <View style={styles.viewMess}>
          <Text style={{ paddingBottom: 2, fontSize: 15 }}>
            người bạn tốt too
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              numberOfLines={1}
              style={{ fontSize: 13, color: "#848484", width: "80%" }}
            >
              Cũng không đắt lắm nhưng được cái là bán được giá bạn chịu thì
              chịu không chịu thì thôi
            </Text>
            <Entypo
              name="dot-single"
              size={12}
              color="#747476"
              style={{ marginTop: 2 }}
            ></Entypo>
            <Text style={{ fontSize: 13, color: "#848484", width: "17%" }}>
              Th 4
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.messItem}>
        <AvatarL
          source={require("../../assets/du.jpg")}
          online={true}
        ></AvatarL>
        <View style={styles.viewMess}>
          <Text style={{ paddingBottom: 2, fontSize: 15 }}>Trịnh Đức Dự</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 13, color: "#848484" }}>
              Ok, thích thì chơi
            </Text>
            <Entypo
              name="dot-single"
              size={12}
              color="#747476"
              style={{ marginTop: 2 }}
            ></Entypo>
            <Text style={{ fontSize: 13, color: "#848484" }}>Th 4</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.messItem}
        onPress={() => {
          props.navigation.navigate("ScreenMTP");
        }}
      >
        <AvatarL source={require("../../assets/mtp.jpg")}></AvatarL>
        <View style={styles.viewMess}>
          <Text style={{ paddingBottom: 2, fontSize: 15 }}>M-TP</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 13, color: "#848484" }}>
              Bạn đã gửi 1 nhãn dán
            </Text>
            <Entypo
              name="dot-single"
              size={12}
              color="#747476"
              style={{ marginTop: 2 }}
            ></Entypo>
            <Text style={{ fontSize: 13, color: "#848484" }}>Th 2</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.messItem}
        onPress={() => {
          props.navigation.navigate("ScreenVirusS");
        }}
      >
        <AvatarL source={require("../../assets/vr.jpg")}></AvatarL>
        <View style={styles.viewMess}>
          <Text style={{ paddingBottom: 2, fontSize: 15 }}>VirusS</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 13, color: "#848484" }}>
              Bạn đã gửi 1 nhãn dán
            </Text>
            <Entypo
              name="dot-single"
              size={12}
              color="#747476"
              style={{ marginTop: 2 }}
            ></Entypo>
            <Text style={{ fontSize: 13, color: "#848484" }}>Th 2</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.messItem}
        onPress={() => {
          props.navigation.navigate("ScreenNga");
        }}
      >
        <AvatarL
          source={require("../../assets/nga.jpg")}
          online={true}
        ></AvatarL>
        <View style={styles.viewMess}>
          <Text style={{ paddingBottom: 2, fontSize: 15 }}>Trịnh Nga</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 13, color: "#848484" }}>
              Bạn đã gửi 1 nhãn dán
            </Text>
            <Entypo
              name="dot-single"
              size={12}
              color="#747476"
              style={{ marginTop: 2 }}
            ></Entypo>
            <Text style={{ fontSize: 13, color: "#848484" }}>CN</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
