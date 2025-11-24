import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 24,
  },
  heading: {
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },
  subtitle: {
    color: "#777",
    marginTop: 4,
  },
  grid: {
    paddingBottom: 8,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 6,
  },
  item: {
    flex: 1,
    aspectRatio: 1,
    marginHorizontal: 2,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#f1f1f1",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

