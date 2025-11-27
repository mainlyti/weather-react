export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>Saturday 4:44 PM</li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <p>Img goes here</p>
          <span className="temperature">{props.data.temperature}</span>
          <span className="unit">°F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
