import { router } from "expo-router";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";

export default function OptionMenu() {
  return (
    <View id="options" style={styles.options}>
      <View id="option1" style={styles.optionItem}>
        <Pressable
          style={styles.cardOption}
          onPress={() => router.push(`/temprature`)}
        >
          <Image
            style={styles.imageOption}
            source={require("@/assets/images/temprature.png")}
          />
          <Text>Suhu</Text>
        </Pressable>
        <Pressable style={styles.cardOption}>
          <Image
            style={styles.imageOption}
            source={require("@/assets/images/massa.png")}
          />
          <Text>Masa</Text>
        </Pressable>
      </View>

      <View id="option2" style={styles.optionItem}>
        <Pressable style={styles.cardOption}>
          <Image
            style={styles.imageOption}
            source={require("@/assets/images/luas.png")}
          />
          <Text>Luas</Text>
        </Pressable>
        <Pressable style={styles.cardOption}>
          <Image
            style={styles.imageOption}
            source={require("@/assets/images/jarak.png")}
          />
          <Text>Jarak</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardOption: {
    width: 120,
    height: 100,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageOption: {
    width: 65,
    height: 65,
    marginBottom: 5,
  },
  optionItem: {
    flex: 0,
    flexDirection: "row",
    gap: 20,
  },
  options: {
    flex: 0,
    flexDirection: "column",
    gap: 20,
    marginTop: 30,
  },
});
