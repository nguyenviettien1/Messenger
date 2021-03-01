import * as React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { CustomFooter } from "../../components/CustomLayout/CustomFooter";
import { CustomHeader } from "../../components/CustomLayout/CustomHeader";
import { FeedMessNam } from "../../components/FeedMess/FeedMessNam";
export default function ScreenNam({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content"></StatusBar>
      <CustomHeader
        navigation={navigation}
        title="Đỗ Trọng"
        imageMess={require("../../assets/nam.jpg")}
        isOnline={true}
      ></CustomHeader>
      <FeedMessNam></FeedMessNam>
      <CustomFooter colorFooter="#0084ff"></CustomFooter>
    </SafeAreaView>
  );
}
