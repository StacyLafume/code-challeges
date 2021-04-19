//Make an api request using async await

const image = document.getElementById("dog")
const button = document.getElementById("button")
async function getACuteDogPhoto(){
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    console.log(data)
    image.src = data.message
}

getACuteDogPhoto()