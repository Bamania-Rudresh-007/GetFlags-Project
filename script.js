const API = "https://restcountries.com/v3.1/all?fields=name,flags";

let input = document.getElementById("name");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    async function main(input) {
        const response = await fetch(API);
        const data = await response.json();

        console.log(data)

        let name = document.querySelector(".name");
        let img = document.getElementById("img");
        let found = false;

        for (let i = 0; i < data.length; i++) {
            if (data[i].name.common.toLowerCase() === input.toLowerCase()) {
                name.innerHTML = data[i].name.common;
                img.src = data[i].flags.png;
                found = true;
                break;
            }
        }

        if (!found) {
            // console.log("Invalid Country name:- ", input.value);
            alert("Invalid Country name:- ")
        }
    }
    main(input.value);
});
