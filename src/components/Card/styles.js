import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6
  },
  image: { width: "100%", height: 180, backgroundColor: "#eee" },
  videoContainer: { width: "100%", height: 220, backgroundColor: "#000" },
  loadingOverlay: {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  loadingText: { color: "#fff" },
  body: { padding: 12 },
  title: { fontSize: 16, fontWeight: "700", marginBottom: 6 },
  desc: { color: "#666", fontSize: 14, lineHeight: 20 },
  action: {
    marginTop: 10,
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  actionText: { color: "#333", fontWeight: "600" }
});
