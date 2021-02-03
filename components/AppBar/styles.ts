import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: 58,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 11,
      paddingRight: 11,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    text: {
      color: "#3a86e9",
      fontSize: 25,
      fontWeight: "bold",
      letterSpacing: -0.3,
    },
    textChat:{
      fontSize:27,
      fontWeight:"bold",
      marginLeft:15
    },
    row: {
      flexDirection: "row",
    },
    button: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: "#F2F2F2",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 16,
    },
    
  });
  export default styles;