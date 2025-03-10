import { Picker } from "@react-native-picker/picker";
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  ImageSourcePropType,
} from "react-native";

type ConversionLayoutProps = {
  title: string;
  imageSource: ImageSourcePropType;
  value: string;
  setValue: (value: string) => void;
  options: string[];
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  result: number;
  onPressConvert: () => void;
};

export default function ConversionLayout({
  title,
  imageSource,
  value,
  setValue,
  options,
  selectedOption,
  setSelectedOption,
  result,
  onPressConvert,
}: ConversionLayoutProps) {
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
        source={imageSource}
      />

      <Text
        style={{
          fontWeight: "bold",
          fontSize: 25,
          marginTop: 20,
        }}
      >
        {title}
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
          {options.map((item, index) => (
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
