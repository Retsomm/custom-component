import { StyleSheet, View } from "react-native";
import DrawingGrogu from "./components/DrawingGrogu";

export default function App() {
  return (
    <View style={styles.container}>
      <DrawingGrogu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#000",
    // color: "#fff"
  },
});
