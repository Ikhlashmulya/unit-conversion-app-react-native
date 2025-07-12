import ConversionLayout from "@/layouts/conversion-layout";
import { useState } from "react";

const areaOptions = [
  "km² ke m²",
  "km² ke dm²",
  "km² ke cm²",
  "km² ke mm²",
  "m² ke km²",
  "m² ke dm²",
  "m² ke cm²",
  "m² ke mm²",
  "dm² ke km²",
  "dm² ke m²",
  "dm² ke cm²",
  "dm² ke mm²",
  "cm² ke km²",
  "cm² ke m²",
  "cm² ke dm²",
  "cm² ke mm²",
  "mm² ke km²",
  "mm² ke m²",
  "mm² ke dm²",
  "mm² ke cm²",
];

export default function Index() {
  const [selectedOption, setSelectedOption] = useState(areaOptions[0]);
  const [value, setValue] = useState("0");
  const [result, setResult] = useState("0");

  function onPressConvert() {
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));

    switch (selectedOption) {
      case "km² ke m²":
        setResult(`${numericValue * 1_000_000} m²`);
        break;

      case "km² ke dm²":
        setResult(`${numericValue * 100_000_000} dm²`);
        break;

      case "km² ke cm²":
        setResult(`${numericValue * 10_000_000_000} cm²`);
        break;

      case "km² ke mm²":
        setResult(`${(numericValue * 1_000_000_000_000).toExponential()} mm²`);
        break;

      case "m² ke km²":
        setResult(`${(numericValue / 1_000_000).toExponential()} km²`);
        break;

      case "m² ke dm²":
        setResult(`${numericValue * 100} dm²`);
        break;

      case "m² ke cm²":
        setResult(`${numericValue * 10_000} cm²`);
        break;

      case "m² ke mm²":
        setResult(`${numericValue * 1_000_000} mm²`);
        break;

      case "dm² ke km²":
        setResult(`${(numericValue / 100_000_000).toExponential()} km²`);
        break;

      case "dm² ke m²":
        setResult(`${numericValue / 100} m²`);
        break;

      case "dm² ke cm²":
        setResult(`${numericValue * 100} cm²`);
        break;

      case "dm² ke mm²":
        setResult(`${numericValue * 10_000} mm²`);
        break;

      case "cm² ke km²":
        setResult(`${(numericValue / 10_000_000_000).toExponential()} km²`);
        break;

      case "cm² ke m²":
        setResult(`${numericValue / 10_000} m²`);
        break;

      case "cm² ke dm²":
        setResult(`${numericValue / 100} dm²`);
        break;

      case "cm² ke mm²":
        setResult(`${numericValue * 100} mm²`);
        break;

      case "mm² ke km²":
        setResult(`${(numericValue / 1_000_000_000_000).toExponential()} km²`);
        break;

      case "mm² ke m²":
        setResult(`${numericValue / 1_000_000} m²`);
        break;

      case "mm² ke dm²":
        setResult(`${numericValue / 10_000} dm²`);
        break;

      case "mm² ke cm²":
        setResult(`${numericValue / 100} cm²`);
        break;

      default:
        break;
    }
  }

  return (
    <ConversionLayout
      title="Konversi Luas"
      onPressConvert={onPressConvert}
      options={areaOptions}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      value={value}
      setValue={setValue}
      result={result}
      imageSource={require("@/assets/images/luas.png")}
    />
  );
}
