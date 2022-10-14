//Iteración 1
fetch("https://api.agify.io?name=michael")
  .then((michael) => michael.json())
  .then((michael) => {
    console.log(michael);
  });

//Iteración 2
const baseUrl = "https://api.nationalize.io/?name=";
const petitionButton = document.querySelector("button");
const petitionInput = document.querySelector("input");
const namePetition = petitionInput.value;

const performPetition = () => {
  const namePetition = petitionInput.value;
  fetch(baseUrl + namePetition)
    .then((response) => response.json())
    .then((response) => displayPetition(response));
};

petitionButton.addEventListener("click", performPetition);

//Iteración 3
const displayPetition = (response) => {
  const petitionOutput = document.createElement("p");
  petitionOutput.textContent = `El nombre ${response.name} `; 
  
  for (let i = 0; i < response.country.length; i++) {
    let land = response.country[i];
        if(response.country.indexOf(land)=== 0){
            petitionOutput.textContent += `tiene un ${(response.country[i].probability*100).toFixed(1)} porciento de ser de ${response.country[i].country_id}` }
        else if(response.country.indexOf(land) !== response.country.length-1){
            petitionOutput.textContent += `, un ${(response.country[i].probability*100).toFixed(1)} porciento de ser de ${response.country[i].country_id}`}
        else{
            petitionOutput.textContent += ` y un ${(response.country[i].probability*100).toFixed(1)} porciento de ser de ${response.country[i].country_id}`}
    };

  document.body.appendChild(petitionOutput);
  console.log(response);

//Iteración 4

const banishingButton = document.createElement('button');
banishingButton.textContent = 'X';
petitionOutput.appendChild(banishingButton);


const banish = (element) =>{
    element.remove();
}
banishingButton.addEventListener('click', () => banish(petitionOutput));


}



