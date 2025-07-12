import ConversionLayout from "@/layouts/conversion-layout";
import { useState } from "react";

const massOptions = ["kg ke g", "kg ke hg", "kg ke dag", "kg ke ton"];

export default function Index() {
  const [selectedOption, setSelectedOption] = useState(massOptions[0]);
  const [value, setValue] = useState("0");
  const [result, setResult] = useState("0");

  function onPressConvert() {
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));

    switch (selectedOption) {
      case "kg ke g":
        setResult(`${numericValue * 1000} g`);
        break;

      case "kg ke dag":
        setResult(`${numericValue * 100} dag`);
        break;

      case "kg ke hg":
        setResult(`${numericValue * 10} hg`);
        break;

      case "kg ke ton":
        setResult(`${numericValue * 0.001} ton`);
        break;

      default:
        break;
    }
  }

  return (
    <ConversionLayout
      title="Konversi Massa"
      imageSource={require("@/assets/images/massa.png")}
      onPressConvert={onPressConvert}
      options={massOptions}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      value={value}
      setValue={setValue}
      result={result}
    />
  );
}
