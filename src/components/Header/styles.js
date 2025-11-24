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
  imagePlaceholder: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 180,
    backgroundColor: "#eee"
  },
  videoContainer: { width: "100%", height: 220, backgroundColor: "#000", overflow: "hidden" },
  loadingOverlay: {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  loadingText: { color: "#fff" },
  fallbackOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.55)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  fallbackTitle: { color: "#fff", fontSize: 16, fontWeight: "700" },
  fallbackSubtitle: { color: "#eee", fontSize: 12, marginTop: 4, textAlign: "center" },
  fallbackBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(0,0,0,0.65)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  fallbackBadgeText: { color: "#fff", fontSize: 12, fontWeight: "600" },
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
