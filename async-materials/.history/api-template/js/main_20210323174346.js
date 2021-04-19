//Make an api request using async await
async function getACuteDogPhoto(){
    const res = await fetch('https://pixabay.com/api/?key=20243699-8dd32fb2842c55ef0668a4b0c&q=yellow+flowers&image_type=photohttps://pixabay.com/api/?key=20243699-8dd32fb2842c55ef0668a4b0c&q=yellow+flowers&image_type=photo')
    const data = await res.json()
    console.log(data)
}
getACuteDogPhoto()