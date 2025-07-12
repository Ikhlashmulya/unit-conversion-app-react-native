import ConversionLayout from "@/layouts/conversion-layout";
import { useState } from "react";

const lengthOptions = [
  "km ke m",
  "km ke dm",
  "km ke cm",
  "km ke mm",
  "m ke km",
  "m ke dm",
  "m ke cm",
  "m ke mm",
  "dm ke km",
  "dm ke m",
  "dm ke cm",
  "dm ke mm",
  "cm ke km",
  "cm ke m",
  "cm ke dm",
  "cm ke mm",
  "mm ke km",
  "mm ke m",
  "mm ke dm",
  "mm ke cm",
];

export default function Index() {
  const [selectedOption, setSelectedOption] = useState(lengthOptions[0]);
  const [value, setValue] = useState("0");
  const [result, setResult] = useState("0");

  function onPressConvert() {
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));

    switch (selectedOption) {
      case "km ke m":
        setResult(`${numericValue * 1000} m`);
        break;

      case "km ke dm":
        setResult(`${numericValue * 10000} dm`);
        break;

      case "km ke cm":
        setResult(`${numericValue * 100000} cm`);
        break;

      case "km ke mm":
        setResult(`${numericValue * 1000000} mm`);
        break;

      case "m ke km":
        setResult(`${numericValue / 1000} km`);
        break;

      case "m ke dm":
        setResult(`${numericValue * 10} dm`);
        break;

      case "m ke cm":
        setResult(`${numericValue * 100} cm`);
        break;

      case "m ke mm":
        setResult(`${numericValue * 1000} mm`);
        break;

      case "dm ke km":
        setResult(`${numericValue / 10000} km`);
        break;

      case "dm ke m":
        setResult(`${numericValue / 10} m`);
        break;

      case "dm ke cm":
        setResult(`${numericValue * 10} cm`);
        break;

      case "dm ke mm":
        setResult(`${numericValue * 100} mm`);
        break;

      case "cm ke km":
        setResult(`${numericValue / 100000} km`);
        break;

      case "cm ke m":
        setResult(`${numericValue / 100} m`);
        break;

      case "cm ke dm":
        setResult(`${numericValue / 10} dm`);
        break;

      case "cm ke mm":
        setResult(`${numericValue * 10} mm`);
        break;

      case "mm ke km":
        setResult(`${numericValue / 1000000} km`);
        break;

      case "mm ke m":
        setResult(`${numericValue / 1000} m`);
        break;

      case "mm ke dm":
        setResult(`${numericValue / 100} dm`);
        break;

      case "mm ke cm":
        setResult(`${numericValue / 10} cm`);
        break;

      default:
        break;
    }
  }


  return (
    <ConversionLayout
      title="Konversi Panjang"
      imageSource={require("@/assets/images/jarak.png")}
      onPressConvert={onPressConvert}
      options={lengthOptions}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      value={value}
      setValue={setValue}
      result={result}
    />
  )
}
