import imgSpa from "../../src/assets/room03.png";
import imgRoom from "../../src/assets/room01.png";

 export const cardList =[
    {
    id: 1,
    title: "「海と、ひとつになる湯」",
    description: "水平線と湯面が溶け合い、内と外、日常と非日常の境界が消えていく。ここは、癒すための温泉ではなく、心と感覚を静かに整える場所。",
    linkText: "Spa & Sauna",
    imgSrc: imgSpa,
    linkUrl: "/spa",
    isReversed: false, 
    },
    {
    id: 2,
    title: "波音と過ごす、非日常へ",
    description: "海と空に溶け込む、3つの異なる隠れ家。あるのは波音と、圧倒的な静寂だけ.今の心が求める空間で誰にも邪魔されない休息を。",
    linkText: "Room",
    imgSrc: imgRoom,
    linkUrl: "/Room",
    isReversed: true, 
    },
];
