const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=2d60a762cdd353bcb3c28d471f76a4cb&query=" +
    latitude +
    "," +
    longitude;
  //+"&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location.Try another search", undefined);
    } else {
      callback(
        undefined,
        ` ${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degree out. It feels like ${body.current.feelslike} degree out.`
      );
    }
  });
};

module.exports = forecast;
