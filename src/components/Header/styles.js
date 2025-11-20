import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e6e6e6"
  },
  top: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 86, height: 86, borderRadius: 44, backgroundColor: "#ddd" },
  info: { flex: 1, paddingLeft: 12 },
  name: { fontSize: 18, fontWeight: "700" },
  bio: { color: "#666", marginTop: 6, fontSize: 13 },
  stats: { flexDirection: "row", justifyContent: "space-around", marginTop: 12 },
  stat: { alignItems: "center" },
  statNumber: { fontWeight: "700", fontSize: 16 },
  statLabel: { color: "#777", fontSize: 12 }
});
