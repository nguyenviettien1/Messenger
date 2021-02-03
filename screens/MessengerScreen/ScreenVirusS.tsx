import * as React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { CustomFooter } from "../../components/CustomLayout/CustomFooter";
import { CustomHeader } from "../../components/CustomLayout/CustomHeader";
import { FeedMessVirusS } from "../../components/FeedMess/FeedMessVirusS";
export default function ScreenVirusS({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content"></StatusBar>
      <CustomHeader
        navigation={navigation}
        title="VirusS"
        imageMess={require("../../assets/vr.jpg")}
        isGroup={true}
        isImportant={true}
      ></CustomHeader>
      <FeedMessVirusS></FeedMessVirusS>
      <CustomFooter colorFooter="#0084ff"></CustomFooter>
    </SafeAreaView>
  );
}
