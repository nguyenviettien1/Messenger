import * as React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { CustomFooter } from "../../components/CustomLayout/CustomFooter";
import { CustomHeader } from "../../components/CustomLayout/CustomHeader";
import { FeedMessNga } from "../../components/FeedMess/FeedMessNga";
export default function ScreenNga({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content"></StatusBar>
      <CustomHeader
        navigation={navigation}
        title="Trịnh Nga"
        imageMess={require("../../assets/nga.jpg")}
        isOnline={true}
      ></CustomHeader>
      <FeedMessNga></FeedMessNga>
      <CustomFooter colorFooter="#0084ff"></CustomFooter>
    </SafeAreaView>
  );
}
