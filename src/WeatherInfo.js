import FormateDate from "./FormatDate";
import Temperatures from "./Temperatures";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormateDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div>
        <div>
          <img src={props.data.iconUrl} alt={props.data.icon} />
          <Temperatures fahrenheit={props.data.temperature} />
        </div>
        <div>
          <ul>
            <li>Humidity: {props.data.humidity}</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
