let name = ""

const resolvers = {
    Query: {
        getWeather: async (_, { location }) => {

            if (location.length > 0) {
                const [lat, lon] = location.split(" ");
                return await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${"3086716d67fc79e345fd672b3e999c8c"}&units=metric`
                ).then(async (response) => {
                    response = await response.json()
                    const weatherData = response;
                    // console.log(response)
                    name = `${weatherData.name} ${weatherData.sys.country}`
                    
                    return { ...weatherData };
                })

            } else {
                return null
            }
        },
        getForecast: async (_, { location }) => {
            const [lat, lon] = location.split(" ");
            if (location.length > 0) {
                return await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${"3086716d67fc79e345fd672b3e999c8c"}&units=metric`
                ).then(async (response) => {
                    response = await response.json()
                    const forecastData = await response;
                    console.log(response)
                    return {...forecastData };
                })

            } else {
                return null
            }
        },

    },
};

module.exports = resolvers;