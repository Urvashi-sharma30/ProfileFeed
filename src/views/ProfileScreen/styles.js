import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("window");

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { minHeight: height * 0.8, backgroundColor: "#fafafa", paddingTop: 8 }
});
