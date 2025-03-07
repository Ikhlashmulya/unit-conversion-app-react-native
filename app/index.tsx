import OptionMenu from "@/components/option-menu";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.viewScreen}
    >
      <Image
        style={styles.iconImage}
        source={require("@/assets/images/unit-converter-calculator.png")}
      />
      <Text style={styles.textTitle}>Project unit konversi</Text>

      <OptionMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontWeight: "bold",
    fontSize: 25,
  },
  iconImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  viewScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
