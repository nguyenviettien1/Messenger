import * as React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
export const AvatarM = ({ source, online }: any) => {
  return (
    <View style={styles.containerM}>
      <Image style={styles.userM} source={source}></Image>
      {online && <View style={styles.userOnline}></View>}
    </View>
  );
};
