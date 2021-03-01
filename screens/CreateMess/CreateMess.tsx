import * as React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { CustomFooter } from "../../components/CustomLayout/CustomFooter";
import { CreateHeader } from "../../components/CustomLayout/CreateHeader";
import { FeedCreate } from "../../components/FeedCreate/FeedCreate";
export default function CreateMess({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content"></StatusBar>
      <CreateHeader navigation={navigation}></CreateHeader>
      <FeedCreate></FeedCreate>
    </SafeAreaView>
  );
}
