import * as React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
export const AvatarL = ({ source, online }: any) => {
  return (
    <View style={styles.containerL}>
      <Image style={styles.userL} source={source}></Image>
      {online && <View style={styles.userOnline}></View>}
    </View>
  );
};
