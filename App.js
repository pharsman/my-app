import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const handleText = () => console.log("text clicked");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handleText}>
        Hello React Natissve lorem context.isPointInPath(x, y) React
        NatissveReact NatissveReact NatissveReact NatissveReact Natissve
      </Text>
      <Image source={require("./assets/favicon.png")} />
      <TouchableNativeFeedback onPress={() => console.log("Image tapped")}>
        <View
          style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}
        ></View>
        {/* <Image
          blurRadius={2}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 200,
            uri: "https://picsum.photos/200/300",
          }}
        /> */}
      </TouchableNativeFeedback>
      <Button
        color={"orange"}
        title="Press me"
        onPress={() =>
          Alert.alert("My title", "My message", [
            { text: "Yes", onPress: () => console.log("yes") },
            { text: "No", onPress: () => console.log("no") },
          ])
        }
      />

      {/* 
      only in IOS
      <Button
        color={"orange"}
        title="Press me2"
        onPress={() =>
          Alert.prompt("My Title", "My message", (text) => console.log(text))
        }
      /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
