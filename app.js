
const api_url = "https://restcountries.com/v3.1/all"
const serch_url = `https://restcountries.com/v3.1/name/`

async  function getFlags()  {
    const res = await fetch(api_url)
    const flagData = await res.json()
    console.log(flagData,'__________')
    for (const flag of flagData) {
        showFlag(flag)
    }
}
getFlags()
const body = document.querySelector(".body")
const input = document.getElementById('input')
const searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click', async () => {
    console.log(input.value)
    const res = await fetch(serch_url + input.value)
    const data = await res.json()
    console.log(data);
    body.innerHTML = ''
    for (const flag of data) {
        showFlag(flag)
    }
})

function showFlag (city) {
    console.log(city)
    const {flags,name,populaqtion, region,capital} = city
    body.innerHTML +=`
    <div class="card" style="...">
      <img src="${flags.png}" class="card-img-top" alt="... ">
    <div class="card-body"></div>
      <h5 class="card-title">${name.official}</h5>
      <p class="card-text">Populaqtion: <span>${populaqtion}</span></p>
      <p class="card-text">Region: ${region}</p>
      <p class="card-text">Capital: ${capital[0]}</p.
     </div>
    </div>
    `
}
