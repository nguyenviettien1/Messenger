import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    height: 54,
    
    justifyContent:"space-between"
  },
  row: {
    flexDirection: "row",

  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 7,
  },
  bottomDivider: {
    backgroundColor: "#f0f2f5",
    width: "100%",
    height: 2,
  },
  bottomMenu:{
    width: "100%",
    height: 50,
    flexDirection:"row",
  },
  search:{ 
    flexDirection: "row", 
    width:180,
    height:38,
    borderWidth:1,
    borderColor:"#f2f2f2",
    borderRadius:20,
    alignItems:"center",
    marginLeft:5,
    marginTop: 5,
    backgroundColor:"#f2f2f2",
    padding:8,
    justifyContent:"space-between"
  }
});

  export default styles;