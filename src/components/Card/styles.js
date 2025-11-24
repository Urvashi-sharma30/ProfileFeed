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
  username: { color: "#777", marginTop: 2 },
  bio: { color: "#666", marginTop: 6, fontSize: 13 },
  location: { marginTop: 8, color: "#444", fontWeight: "600" },
  stats: { flexDirection: "row", justifyContent: "space-around", marginTop: 12 },
  stat: { alignItems: "center" },
  statNumber: { fontWeight: "700", fontSize: 16 },
  statLabel: { color: "#777", fontSize: 12 },
  actions: {
    flexDirection: "row",
    marginTop: 16
  },
  primaryAction: {
    flex: 1,
    backgroundColor: "#111",
    paddingVertical: 10,
    borderRadius: 24,
    alignItems: "center",
    marginRight: 8
  },
  primaryActionText: { color: "#fff", fontWeight: "600" },
  secondaryAction: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#111",
    alignItems: "center"
  },
  secondaryActionText: { color: "#111", fontWeight: "600" }
});
