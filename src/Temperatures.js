import { useState } from "react";

export default function Temperatures(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <span className="Temperatures">
        <span className="temperature">{props.fahrenheit}</span>
        <span className="unit">
          °F |
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    let celcius = Math.round((props.fahrenheit - 32) * (5 / 9));
    return (
      <span className="Temperatures">
        <span className="temperature">{celcius}</span>
        <span className="unit">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
          | °C
        </span>
      </span>
    );
  }
}
