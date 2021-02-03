import * as React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { CustomFooter } from "../../components/CustomLayout/CustomFooter";
import { CustomHeader } from "../../components/CustomLayout/CustomHeader";
import { FeedMessAT1 } from "../../components/FeedMess/FeedMessAT1";
export default function ScreenAT1({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content"></StatusBar>
      <CustomHeader
        navigation={navigation}
        title="AT1"
        imageMess={require("../../assets/at11.jpg")}
        isGroup={true}
      ></CustomHeader>
      <FeedMessAT1></FeedMessAT1>
      <CustomFooter colorFooter="#e4e6eb"></CustomFooter>
    </SafeAreaView>
  );
}
