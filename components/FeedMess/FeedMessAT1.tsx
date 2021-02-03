import * as React from "react";
import { View, Text, Image } from "react-native";
import { AvatarSS } from "../Avatar/AvatarSS";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { AvatarS } from "../Avatar/AvatarS";
import { FontAwesome } from "@expo/vector-icons";
export const FeedMessAT1 = () => {
  return (
    <ScrollView style={{ paddingLeft: 10 }}>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Đạt Akuali</Text>
          <Text style={styles.mess1}>Tình hình sao rồi có gì mới không</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/dat.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess3}>Thêm bao nhiêu ca nữa rồi?</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Khải đẹp trai siêu cấp zũ trụ</Text>
          <Text style={styles.mess1}>Đạt đánh Cho'Gath ngu vl</Text>
          <Text style={styles.mess2}>Thế này thì sao gánh được anh em</Text>
          <Text style={styles.mess2}>
            Thấy bảo là ở HN có thêm 1 ca ở Times. Mình ở tận Hoàng Quốc Việt lo
            đ gì hê hê
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/khai.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess3}>
            Mỗi tội là hơi gần Nguyễn Khánh Toàn tí thôi
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 14 }}>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <Text style={styles.mess1r}>Chả biết có về quê được ko nữa</Text>
          <Text style={styles.mess2r}>
            Tết đến nơi rồi ôi dồi ôi các anh chị ơi
          </Text>
          <Text style={styles.mess3r}>
            Toang đến nơi rồi ôi rồi ôi các em mình ơi =)))
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Duc Anh</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/ducanh.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess0}>
            Có thằng đi karaoke tay vịn bị cả nước biết :v
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Nguyễn Hữu</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/vinh.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess0}>
            Tin vịt thằng Đức Anh chả biết mẹ gì :v, về quê chưa? tối ốc không?
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Duc Anh</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/ducanh.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess0}>Ko, mình yêu nước nhé</Text>
        </View>
      </View>
      <View style={{ marginTop: 14 }}>
        <View style={{ width: "77%", alignSelf: "flex-end", marginRight: 10 }}>
          <Text style={styles.mess1r}>Anh em biết ai đây không?</Text>
          <View style={styles.imageR}>
            <Image
              source={require("../../assets/poss.jpg")}
              style={styles.imageSend}
            ></Image>
          </View>
          <Text style={styles.mess3r}>Dễ mà =))</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Lươn Đức Dự</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/du.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <View style={{ width: 30, height: 30, marginLeft: 35 }}>
            <FontAwesome name="heart" size={30} color="red"></FontAwesome>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>DucAnh</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/ducanh.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <View style={{ width: 30, height: 30, marginLeft: 35 }}>
            <FontAwesome name="heart" size={30} color="red"></FontAwesome>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Khải đẹp trai siêu cấp zũ trụ</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/khai.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess0}>
            Ai đây? nhân tố N của nhiều năm về trước à? đéo xinh như bây giờ
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Duc Anh</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/ducanh.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess0}>
            Mình FA nên mình k có quyền lên tiếng :v
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 14 }}>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <Text style={styles.mess1r}>-_-!!</Text>

          <Text style={styles.mess3r}>T bảo chúng m nhận xét ảnh cơ mà</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Đạt Akuali</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/dat.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess0}>Không bằng ny t :v :v</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Khải đẹp trai siêu cấp zũ trụ</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/khai.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess0}>
            Người con gái đẹp nhất là người con gái khi không thuộc về ai
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Duc Anh</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/ducanh.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <View style={{ width: 30, height: 30, marginLeft: 35 }}>
            <FontAwesome name="heart" size={30} color="red"></FontAwesome>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Khải đẹp trai siêu cấp zũ trụ</Text>
          <Text style={styles.mess1}>
            Xét về ngũ quan thì bthg. Không xinh cũng không xấu
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/khai.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess3}>Và đ phải gu của t</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Lươn Đức Dự</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/du.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <View style={{ width: 30, height: 30, marginLeft: 35 }}>
            <FontAwesome name="heart" size={30} color="red"></FontAwesome>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Duc Anh</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/ducanh.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess0}>Vẫn xinh hơn Lụa</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Nguyễn Hữu</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/vinh.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess0}>
            Lụa trông cứ men nì thế nào ấy :v cảm nhận cá nhân thôi !
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Lươn Đức Dự</Text>
        </View>
        <View style={{ width: 30, height: 30, marginLeft: 35 }}>
          <FontAwesome name="heart" size={30} color="red"></FontAwesome>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/du.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess0}>cao bao nhiêu? nặng bao nhiêu? BWH?</Text>
        </View>
      </View>
      <View style={{ marginTop: 14 }}>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <Text style={styles.mess1r}>1m58, 51kg</Text>

          <Text style={styles.mess3r}>BWH làm gì, t bảo nhận xét ảnh kìa</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Lươn Đức Dự</Text>
          <Text style={styles.mess1}>ổn. Mặt mũi với anh không quan trọng</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/du.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess3}>vk a cỡ này thôi cũng được</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Điền</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/dien.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess0}>Đ bằng Quyên của t ok?</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Lươn Đức Dự</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/du.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <View style={{ width: 30, height: 30, marginLeft: 35 }}>
            <FontAwesome name="heart" size={30} color="red"></FontAwesome>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Khải đẹp trai siêu cấp zũ trụ</Text>
          <Text style={styles.mess1}>Với ảnh trên thì ok đ bằng Quyên</Text>
          <Text style={styles.mess2}>Nhưng mà hiện tại thì Quyên tuổi gì</Text>
          <Text style={styles.mess2}>Được cái cao hơn thôi</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/khai.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess3}>Chứ nhân tố N của Tiến xinh hơn</Text>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>DucAnh</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/ducanh.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <View style={{ width: 30, height: 30, marginLeft: 35 }}>
            <FontAwesome name="heart" size={30} color="red"></FontAwesome>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 5, width: "77%" }}>
        <View style={{ width: "75%", marginLeft: 35 }}>
          <Text style={styles.name}>Lươn Đức Dự</Text>
          <Text style={styles.mess1}>Quyên ngày xưa xấu như chó còn gì</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarLeft}>
            <AvatarS
              source={require("../../assets/du.jpg")}
              online={true}
            ></AvatarS>
          </View>
          <Text style={styles.mess3}>
            bây giờ thì Quyên cũng đéo bằng oke :v
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 14 }}>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <Text style={styles.mess0r}>Ok ae</Text>
        </View>
      </View>
      <View>
        <View style={{ width: "75%", alignSelf: "flex-end", marginRight: 10 }}>
          <View style={{ width: 20, height: 20, alignSelf: "flex-end" }}>
            <AvatarSS
              source={require("../../assets/dat.jpg")}
              hidden={true}
            ></AvatarSS>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
