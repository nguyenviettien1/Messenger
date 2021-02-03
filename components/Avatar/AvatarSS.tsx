import * as React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
export const AvatarSS = ({ source, hidden }: any) => {
  return (
    <View style={styles.containerSS}>
      {hidden && <Image style={styles.userSS} source={source}></Image>}
    </View>
  );
};
