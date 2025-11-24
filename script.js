const API = "https://restcountries.com/v3.1/all?fields=name,flags";

let input = document.getElementById("name");
let btn = document.getElementById("btn");
let random = document.getElementById("random");

let allCountriesData = [];

async function fetchAllCountriesData() {
    try {
        const response = await fetch(API);
        allCountriesData = await response.json();
    } catch (error) {   
        console.error("Error fetching data: ", error.message);
    }
}
fetchAllCountriesData()

btn.addEventListener("click", () => {

    function main(inputName){
        let name = document.querySelector(".name");
        let img = document.getElementById("img");
        let found = false;
        let searchValue = inputName.value.toLowerCase();
        for (let i = 0; i < allCountriesData.length; i++) {
            if (allCountriesData[i].name.common.toLowerCase() == searchValue) {
                name.innerHTML = allCountriesData[i].name.common;
                img.src = allCountriesData[i].flags.png;
                found = true;
                break;
            }
        }
        if(!found){
            name.innerHTML = `<h1>Country not found.</h1>`
            img.src = "";
        }
    
    }
    main(input)
});

random.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * allCountriesData.length);
    
    function forRandom(index) {
        
        let name = document.querySelector(".name");
        let img = document.getElementById("img");

        name.innerHTML = allCountriesData[index].name.common;
        img.src = allCountriesData[index].flags.png;
    }

    forRandom(randomNumber);
});
