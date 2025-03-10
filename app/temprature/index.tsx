import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Text, View, Image, TextInput, Button } from "react-native";

const tempratureOption = ["Cel to Re", "Cel to Far", "Re to Cel", "Re to Far"];

export default function Index() {
  const [selectedOption, setSelectedOption] = useState(tempratureOption[0]);
  const [value, setValue] = useState<string>("0");
  const [result, setResult] = useState(0);

  function onPressConvert() {
    switch (selectedOption) {
      case "Cel to Re":
        const numericValue = value.replace(/[^0-9]/g, "");
        setResult((4 / 5) * parseInt(numericValue));
        break;

      case "Cel to Far":
        const numericValue2 = value.replace(/[^0-9]/g, "");
        setResult((9 / 5) * parseInt(numericValue2) + 32);
        break;

      case "Re to Cel":
        const numericValue3 = value.replace(/[^0-9]/g, "");
        setResult((5 / 4) * parseInt(numericValue3));
        break;

      case "Re to Far":
        const numericValue4 = value.replace(/[^0-9]/g, "");
        setResult((9 / 4) * parseInt(numericValue4) + 32);
        break;

      default:
        break;
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          width: 150,
          height: 150,
          resizeMode: "contain",
        }}
        source={require("@/assets/images/temprature.png")}
      />

      <Text
        style={{
          fontWeight: "bold",
          fontSize: 25,
          marginTop: 20,
        }}
      >
        Konversi Suhu
      </Text>

      <View
        style={{
          width: "80%",
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Pilih konversi :</Text>
        <Picker
          style={{
            width: 150,
          }}
          selectedValue={selectedOption}
          onValueChange={(itemValue) => setSelectedOption(itemValue)}
        >
          {tempratureOption.map((item, index) => (
            <Picker.Item label={item} value={item} key={index} />
          ))}
        </Picker>
      </View>

      <View
        style={{
          width: "80%",
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Masukan angka :</Text>
        <TextInput
          value={value}
          onChangeText={(value) => {
            setValue(value);
          }}
          keyboardType="numeric"
          style={{
            width: 150,
            borderBottomWidth: 1,
          }}
        />
      </View>

      <View
        style={{
          marginTop: 20,
          width: "80%",
          alignItems: "flex-end",
        }}
      >
        <Button onPress={onPressConvert} title="Konversi" />
      </View>

      <View
        style={{
          width: "80%",
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Hasil :</Text>
        <Text
          style={{
            marginTop: 5,
            color: "gray",
            marginEnd: 20,
            fontSize: 20,
          }}
        >
          {result}
        </Text>
      </View>
    </View>
  );
}
