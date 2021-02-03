import * as React from "react";
import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AppBar } from "../../components/AppBar/AppBar";
import { Feed } from "../../components/Feed/Feed";
import { Search } from "../../components/Search/Search";
import { Users } from "../../components/Users/Users";
export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content"></StatusBar>
      <AppBar></AppBar>
      <View style={styles.container}>
        <ScrollView>
          <Search></Search>
          <Users></Users>
          <Feed navigation={navigation}></Feed>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
