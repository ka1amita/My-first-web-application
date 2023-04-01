// let data = {
//     photo: "./photos/photo1.jpeg",
//     title: "My title",
//     description: "What happened here, why is this a very nice image"
// };

let imagesData = [{
    photo: "./photos/photo1.jpeg",
    title: "My title",
    description: "What happened here, why is this a very nice image"
},
{
    photo: "./photos/photo2.jpeg",
    title: "My title",
    description: "What happened here, why is this a very nice image"
},
{
    photo: "./photos/photo3.jpeg",
    title: "My title",
    description: "What happened here, why is this a very nice image"
},
{
    photo: "./photos/photo4.jpeg",
    title: "My title",
    description: "What happened here, why is this a very nice image"
},
{
    photo: "./photos/photo5.jpeg",
    title: "My title",
    description: "What happened here, why is this a very nice image"
}
]

console.log(imagesData.length)


let currentPhoto = 0 

let loadPhoto = (photoNumber) => {
    $("#photo").attr("src", imagesData[photoNumber].photo);
}

loadPhoto(currentPhoto)

$("#right-arrow").click(() => {
    currentPhoto++
    if (currentPhoto >= imagesData.length) {currentPhoto = 0}
    loadPhoto(currentPhoto)
})

$("#left-arrow").click(() => {
    currentPhoto--
    if (currentPhoto < 0) {currentPhoto = imagesData.length-1}
    loadPhoto(currentPhoto)
})