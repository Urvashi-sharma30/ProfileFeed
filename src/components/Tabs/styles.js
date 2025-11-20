import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 56,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e6e6e6"
  },
  tab: { alignItems: "center", justifyContent: "center", paddingHorizontal: 10 },
  text: { fontSize: 15, color: "#666" },
  textActive: { color: "#000", fontWeight: "700" },
  underline: {
    position: "absolute",
    bottom: 6,
    height: 2,
    width: "60%",
    backgroundColor: "#000",
    borderRadius: 1
  }
});
