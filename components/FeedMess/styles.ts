import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
name:{
  fontSize:11,
  color:"#A4A4A4",
  marginLeft:8,
   marginBottom:3,
},
avatarLeft:{
  width: 35,
  height: 30,
  position: "absolute",
  bottom:0
},

mess1:{
  borderWidth: 1,
  borderRadius: 30,
  borderBottomLeftRadius:4,
  borderColor:"#e4e6eb",
  backgroundColor: "#e4e6eb",
  padding: 7,
  paddingLeft:10,
  alignSelf: 'flex-start' ,
  marginBottom:2,
  fontSize:15,
},
mess1r:{
  borderWidth: 1,
  borderRadius: 30,
  borderBottomRightRadius:4,
  borderColor:"#8c04ff",
  backgroundColor: "#8c04ff",
  color:"#faf5ff",
  padding: 7,
  paddingLeft:15,
  marginBottom:2,
  alignSelf: 'flex-end', fontSize:15,
  marginRight:10
},
mess1rBlue:{
  borderWidth: 1,
  borderRadius: 30,
  borderBottomRightRadius: 4,
  borderColor: "#0084ff",
  backgroundColor: "#0084ff",
  color: "#faf5ff",
  padding: 7,
  paddingLeft: 15,
  marginBottom: 2,
  alignSelf: "flex-end",
  fontSize: 15,
  marginRight: 10,
},

mess2:{
  borderWidth: 1,
  borderRadius: 30,
  borderBottomLeftRadius:4,
  borderTopLeftRadius:4,
  borderColor:"#e4e6eb",fontSize:15,
  backgroundColor: "#e4e6eb",paddingLeft:10,
  padding: 7,
  marginBottom:2,
  alignSelf: 'flex-start' ,
},

mess2r:{
  borderWidth: 1,
  borderRadius: 30,
  borderTopRightRadius:4,
  borderBottomRightRadius:4,fontSize:15,
  borderColor:"#8c04ff",
  backgroundColor: "#8c04ff",
  color:"#faf5ff",
  padding: 7,
  paddingLeft:15,
  marginBottom:2,
  alignSelf: 'flex-end', 
  marginRight:10
},
mess2rBlue:{
  borderWidth: 1,
  borderRadius: 30,
  borderTopRightRadius:4,
  borderBottomRightRadius:4,fontSize:15,
  borderColor:"#0084ff",
  backgroundColor: "#0084ff",
  color:"#faf5ff",
  padding: 7,
  paddingLeft:15,
  marginBottom:2,
  alignSelf: 'flex-end', 
  marginRight:10
},
mess3:{
  borderWidth: 1,
  borderRadius: 30,
  borderTopLeftRadius:4,
  borderColor:"#e4e6eb",paddingLeft:10,
  backgroundColor: "#e4e6eb",
  padding: 7,fontSize:15,
  marginBottom:2,
  alignSelf: 'flex-start' ,
  maxWidth:"82%",
  marginLeft:35
},
mess3r:{
  borderWidth: 1,
  borderRadius: 30,
  borderTopRightRadius:4,fontSize:15,
  borderColor:"#8c04ff",
  backgroundColor: "#8c04ff",
  color:"#faf5ff",
  padding: 7,
  paddingLeft:15,
  marginBottom:2,
  alignSelf: 'flex-end', 
  marginRight:10
},     
mess3rBlue:{
  borderWidth: 1,
  borderRadius: 30,
  borderTopRightRadius: 4,
  fontSize: 15,
  borderColor: "#0084ff",
  backgroundColor: "#0084ff",
  color: "#faf5ff",
  padding: 7,
  paddingLeft: 15,
  marginBottom: 2,
  alignSelf: "flex-end",
  marginRight: 10,
},
mess0:{
  borderWidth: 1,
  borderRadius: 30,
  borderColor:"#e4e6eb",
  backgroundColor: "#e4e6eb",paddingLeft:10,
  padding: 7,
  marginBottom:2,
  alignSelf: 'flex-start' ,fontSize:15,
  maxWidth:"82%",
  marginLeft:35
},
mess0r:{
  borderWidth: 1,
  borderRadius: 30,
  borderColor:"#8c04ff",
  backgroundColor: "#8c04ff",
  color:"#faf5ff",
  padding: 7,fontSize:15,
  marginBottom:2,
  alignSelf: 'flex-end', 
  marginRight:10
},     
imageL:{
  borderWidth: 1,
  borderRadius: 5,
  borderColor:"white",
  marginBottom:2,
  marginLeft:35,
  width:200,
  height:250,
},
imageR:{
  borderWidth: 1,
  borderRadius: 5,
  borderColor:"white",
  marginBottom:2,
  alignSelf: 'flex-end', 
  marginRight:10,
  width:200,
  height:250,
},
imageSend:{
  borderWidth: 1,
  borderColor:"white",
  borderRadius: 5,
  width:200,
  height:250,
},
centerMess:{
  justifyContent: "center",
  flex: 1,
  flexDirection: "row",
  marginTop: 10,
}
});
  export default styles;