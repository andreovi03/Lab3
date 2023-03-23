interface DataShape {
    name: string;
    image: string;
}

const characters: DataShape[] = [
    {
        name: "Super Mario™",
        image: "https://i.pinimg.com/564x/ce/1f/59/ce1f59cba92b59bceded161d0ffb1f68.jpg"
    },

    {
        name: "The Legend of Zelda™",
        image: "https://i.pinimg.com/564x/de/dc/02/dedc02ca244dc6696ea3f0c697676df4.jpg"
    },

    {
        name: "Splatoon™",
        image: "https://i.pinimg.com/564x/38/02/5b/38025b7fca8c8f44336c6cd56dc69c57.jpg"
    },

    {
        name: "Kirby™",
        image: "https://i.pinimg.com/564x/51/18/05/511805d978bf840b21c007d16ba65bff.jpg"
    }
];

export default characters;