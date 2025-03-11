import ConversionLayout from "@/layouts/conversion-layout";
import { useState } from "react";

const tempratureOption = ["Cel to Re", "Cel to Far", "Re to Cel", "Re to Far"];

export default function Index() {
  const [selectedOption, setSelectedOption] = useState(tempratureOption[0]);
  const [value, setValue] = useState("0");
  const [result, setResult] = useState("0");

  function onPressConvert() {
    switch (selectedOption) {
      case "Cel to Re":
        const numericValue = value.replace(/[^0-9.]/g, "");
        setResult(`${4/5 * parseFloat(numericValue)}°Ré`);
        break;

      case "Cel to Far":
        const numericValue2 = value.replace(/[^0-9.]/g, "");
        setResult(`${(9 / 5) * parseFloat(numericValue2) + 32}°F`);
        break;

      case "Re to Cel":
        const numericValue3 = value.replace(/[^0-9.]/g, "");
        setResult(`${(5 / 4) * parseFloat(numericValue3)}°C`);
        break;

      case "Re to Far":
        const numericValue4 = value.replace(/[^0-9.]/g, "");
        setResult(`${(9 / 4) * parseFloat(numericValue4) + 32}°F`);
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
