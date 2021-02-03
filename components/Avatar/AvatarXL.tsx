import * as React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
export const AvatarXL = ({ source, online }: any) => {
  return (
    <View style={styles.containerXL}>
      <Image style={styles.userXL} source={source}></Image>
      {online && <View style={styles.userOnline}></View>}
    </View>
  );
};
