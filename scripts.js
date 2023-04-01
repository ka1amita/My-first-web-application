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

let currentPhoto = 2 

$("#photo").attr("src", imagesData[currentPhoto].photo);
