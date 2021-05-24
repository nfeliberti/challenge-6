// fetch information for search bar
class Fetch {
    async getCurrent(input) {
        const myKey ="4e3ec522df8a576a3490fb24fa632229" ;

        //make request to url
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast/daily?q=${input}&cnt=10&appid=${mykey}`
        );

        const data = await response.json();
        
        console.log(data);

        return data;
    }
}