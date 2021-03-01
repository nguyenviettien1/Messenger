import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ScreenAT1 from "./screens/MessengerScreen/ScreenAT1";
import ScreenDA from "./screens/MessengerScreen/ScreenDA";
import ScreenMTP from "./screens/MessengerScreen/ScreenMTP";
import ScreenNga from "./screens/MessengerScreen/ScreenNga";
import ScreenNam from "./screens/MessengerScreen/ScreenNam";
import ScreenVirusS from "./screens/MessengerScreen/ScreenVirusS";
import CreateMess from "./screens/CreateMess/CreateMess";
const Stack = createStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="ScreenAT1"
          component={ScreenAT1}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="ScreenDA"
          component={ScreenDA}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="ScreenMTP"
          component={ScreenMTP}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="ScreenNam"
          component={ScreenNam}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="ScreenNga"
          component={ScreenNga}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="ScreenVirusS"
          component={ScreenVirusS}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="CreateMess"
          component={CreateMess}
          options={navOptionHandler}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
