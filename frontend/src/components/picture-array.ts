import hallonBody from "../../public/images/641b674fb9401876a9992cff.jpg"
import fikaBody from "../../public/images/641b676db9401876a9992d01.jpeg"
import grisBody from "../../public/images/641b6785b9401876a9992d03.jpeg"
import dregglis from "../../public/images/1b67fcb9401876a9992d05.jpeg"
import fodradOverall from "../../public/images/641b6849b9401876a9992d09.jpg"
import ofodradOverall from "../../public/images/641b6878b9401876a9992d0b.jpeg"
import vavdKlanning from "../../public/images/641b68b1b9401876a9992d0d.jpg"
import fidgetKlanning from "../../public/images/641b68e0b9401876a9992d0f.jpeg"
import rosettMossa from "../../public/images/641b6cb2b9401876a9992d11.jpg"
import collegeTroja from "../../public/images/641b6cd8b9401876a9992d13.jpeg"
import gymnastikDrakt1 from "../../public/images/641b6fa8b9401876a9992d15.jpg"
import gymnastikDrakt2 from "../../public/images/641b6fc8b9401876a9992d17.jpeg"

interface Picture {
    img: string; 
    alt: string;
}
const pictures: Picture[] = [
    {
        img: hallonBody,
        alt: "Body med hallonmönster"
    },
    {
        img: fikaBody,
        alt: "Body med bakverk på"
    },
    {
        img: grisBody,
        alt: "Body med grisar på"
    },  
    {
        img: dregglis,
        alt: "Dregglis med lejonkungen-tryck"
    }, 
    {
        img: fodradOverall,
        alt: "Grå overall fodrad med grönt tyg"
    }, 
    {
        img: ofodradOverall,
        alt: "Overall med rosenmönster"
    }, 
    {
        img: vavdKlanning,
        alt: "Klänning med blommönster"
    }, 
    {
        img: fidgetKlanning,
        alt: "Klänning med fidget pop-mönster"
    }, 
    {
        img: rosettMossa,
        alt: "Mössa med rosett och blommönster"
    }, 
    {
        img: collegeTroja,
        alt: "Tjocktröja med hästtryck"
    }, 
    {
        img: gymnastikDrakt1,
        alt: "Gymnastikdräkt med bokstavstryck"
    }, 
    {
        img: gymnastikDrakt2,
        alt: "Gymnastikdräkt med tryck av gymnastsilhuetter"
    }, 
 ];

 export default pictures;


