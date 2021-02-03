import * as React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { CustomFooter } from "../../components/CustomLayout/CustomFooter";
import { CustomHeader } from "../../components/CustomLayout/CustomHeader";
import { FeedMessMTP } from "../../components/FeedMess/FeedMessMTP";
export default function ScreenMTP({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content"></StatusBar>
      <CustomHeader
        navigation={navigation}
        title="M-TP"
        imageMess={require("../../assets/mtp.jpg")}
        isGroup={true}
        isImportant={true}
      ></CustomHeader>
      <FeedMessMTP></FeedMessMTP>
      <CustomFooter colorFooter="#0084ff"></CustomFooter>
    </SafeAreaView>
  );
}
