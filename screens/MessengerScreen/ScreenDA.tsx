import * as React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { CustomFooter } from "../../components/CustomLayout/CustomFooter";
import { CustomHeader } from "../../components/CustomLayout/CustomHeader";
import { FeedMessDA } from "../../components/FeedMess/FeedMessDA";
export default function ScreenDA({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content"></StatusBar>
      <CustomHeader
        navigation={navigation}
        title="Duc Anh le Ba"
        imageMess={require("../../assets/ducanh.jpg")}
        isOnline={true}
      ></CustomHeader>
      <FeedMessDA></FeedMessDA>
      <CustomFooter colorFooter="#0084ff"></CustomFooter>
    </SafeAreaView>
  );
}
