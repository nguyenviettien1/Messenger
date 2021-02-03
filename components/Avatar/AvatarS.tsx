import * as React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
export const AvatarS = ({ source, online }: any) => {
  return (
    <View style={styles.containerS}>
      <Image style={styles.userS} source={source}></Image>
      {online && <View style={styles.userOnlineS}></View>}
    </View>
  );
};
