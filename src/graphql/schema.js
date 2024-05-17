const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type Coord {
    lon: Float
    lat: Float
  }

  type Weather {
    id: Int
    main: String
    description: String
    icon: String
  }

  type Main {
    temp: Float
    feels_like: Float
    temp_min: Float
    temp_max: Float
    pressure: Int
    humidity: Int
  }

  type Wind {
    speed: Float
    deg: Int
  }

  type Clouds {
    all: Int
  }

  type Sys {
    type: Int
    id: Int
    country: String
    sunrise: Int
    sunset: Int
  }

  type City {
    id: Int
    name: String
    coord: Coord
    country: String
    population: Int
    timezone: Int
    sunrise: Int
    sunset: Int
  }

  type CurrentWeather {
    coord: Coord
    weather: [Weather]
    base: String
    main: Main
    visibility: Int
    wind: Wind
    clouds: Clouds
    dt: Int
    sys: Sys
    timezone: Int
    id: Int
    name: String
    cod: Int,
    temperature: Float
    description: String
    icon: String
    date: String
  }

  type ForecastList {
    dt: Int
    main: Main
    weather: [Weather]
    clouds: Clouds
    wind: Wind
    visibility: Int
    pop: Float
    sys: Sys
    dt_txt: String
    temperature: Float
    description: String
    icon: String
    date: String
  }

  type ForecastResponse {
    cod: String
    message: Int
    cnt: Int
    list: [ForecastList]
    city: City
    dt: Int
    main: Main
    weather: [Weather]
    clouds: Clouds
    wind: Wind
    visibility: Int
    pop: Float
    sys: Sys
    dt_txt: String
  }

  type Query {
    getWeather(location: String!): CurrentWeather
    getForecast(location: String!): ForecastResponse
  }
`;

module.exports = typeDefs;
