import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, View, TouchableOpacity, Switch } from "react-native";
import styles from "./styles";
export const CreateHeader = ({ navigation }: any) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              width: 43,
              height: 34,
              marginTop: 10,
              marginLeft: 10,
            }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign
              name="arrowleft"
              size={22}
              style={{ marginTop: 6 }}
            ></AntDesign>
          </TouchableOpacity>
          <View style={{ marginTop: 6, flexDirection: "row" }}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: "bold",
                  fontSize: 16,
                  marginTop: 10,
                }}
              >
                Tin nhắn mới
              </Text>
            </View>
          </View>
        </View>
        <Switch
          trackColor={{ false: "#ccc", true: "#ccc" }}
          thumbColor={isEnabled ? "green" : "blue"}
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ marginTop: 16, marginRight: 14 }}
        />
      </View>
      <View style={styles.bottomDivider}></View>
    </View>
  );
};
