import ConversionLayout from "@/layouts/conversion-layout";
import { useState } from "react";

const tempratureOption = ["Cel to Re", "Cel to Far", "Re to Cel", "Re to Far"];

export default function Index() {
  const [selectedOption, setSelectedOption] = useState(tempratureOption[0]);
  const [value, setValue] = useState("0");
  const [result, setResult] = useState("0");

  function onPressConvert() {
    const numericValue = value.replace(/[^0-9.]/g, "");
    switch (selectedOption) {
      case "Cel to Re":
        setResult(`${4/5 * parseFloat(numericValue)}°Ré`);
        break;

      case "Cel to Far":
        setResult(`${(9 / 5) * parseFloat(numericValue) + 32}°F`);
        break;

      case "Re to Cel":
        setResult(`${(5 / 4) * parseFloat(numericValue)}°C`);
        break;

      case "Re to Far":
        setResult(`${(9 / 4) * parseFloat(numericValue) + 32}°F`);
        break;

      default:
        break;
    }
  }

  return (
    <ConversionLayout
      title="Konversi Suhu"
      imageSource={require("@/assets/images/temprature.png")}
      onPressConvert={onPressConvert}
      options={tempratureOption}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      value={value}
      setValue={setValue}
      result={result}
    />
  );
}
