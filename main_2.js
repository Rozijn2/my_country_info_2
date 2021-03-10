

async function getCountryList() {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    const {data} = response;
    data.sort((a,b) => {
        return a.population - b.population;
    });

    data.map((country) => {
        const {flag, name, region, population} = country;
        console.log(name);
    });
}

getCountryList();

//Sorry, ik kon niet verder dan dit. Het duurde langer dan ik had verwacht.
//Ik heb iets meer tijd nodig om het uit te puzzelen.