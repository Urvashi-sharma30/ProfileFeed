import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginHorizontal: 12,
    marginVertical: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  company: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },
  description: {
    marginTop: 8,
    color: "#555",
    lineHeight: 20,
  },
  meta: {
    marginTop: 14,
  },
  metaLabel: {
    color: "#777",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  metaValue: {
    marginTop: 4,
    color: "#222",
    fontSize: 15,
    fontWeight: "600",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#111",
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  buttonSecondary: {
    marginTop: 12,
    paddingVertical: 12,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#111",
    alignItems: "center",
  },
  buttonSecondaryText: {
    color: "#111",
    fontWeight: "600",
  },
});

