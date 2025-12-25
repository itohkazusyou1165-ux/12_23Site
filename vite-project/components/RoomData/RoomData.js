import RoomData1 from "../../src/assets/room01.png";
import RoomData2 from "../../src/assets/room02.png";
import RoomData3 from "../../src/assets/room03.png";
// レストランデータ
import FoodData1 from "../../src/assets/food.png";
import FoodData2 from "../../src/assets/food07.png";
import FoodData3 from "../../src/assets/food03.png";
// サウナデータ
import SaunaData1 from "../../src/assets/sauna02.png";
import SaunaData2 from "../../src/assets/sauna03.png";
import SaunaData3 from "../../src/assets/spa03.png";


export const RoomData = [
  //ホテルの部屋
  {
    id: "SORA-SUITE",
    title: "view-more",
    price: "40,0000",
    text: "check-in",
    image: RoomData1,
    description:["心地よい部屋"],
  },
  {
    id: "YOI / AKATSUKI Suite",
    title: "view-moreテキストテキスト",
    price: "25,0000",
    text: "check-in",
    image: RoomData2,
    description:["心地よい部屋"],
  },
  {
    id: "NAGI Suite",
    title: "view-more",
    price: "15,0000",
    text: "check-in",
    image: RoomData3,
    description:["心地よい部屋"],
  },
]
export const FoodData =[
//レストラン
{
    id: "コース",
    title: "view-more",
    price: "40万円コース",
    text: "check-in",
    image: FoodData1,
  },
  {
    id: "コース",
    title: "view-more",
    price: "25万円コース",
    text: "check-in",
    image: FoodData2,
  },
  {
    id: "コース",
    title: "view-more",
    price: "15万円コース",
    text: "check-in",
    image: FoodData3,
  },
  {
    id: "朝食",
    title: "view-more",
    price: "15万円コース",
    text: "check-in",
    image: FoodData3,
  },
  {
    id: "BAR",
    title: "view-more",
    price: "15万円コース",
    text: "check-in",
    image: FoodData3,
  },
]
export const SaunaData =[
//   サウナ
{
    id: "Sauna",
    title: "view-more",
    text: "サウナの説明",
    image: SaunaData1,
  },
  {
    id: "YOI / AKATSUKI Suite",
    title: "view-more",
    price: "25,0000コースの方",
    text: "check-in",
    image: SaunaData2,
  },
  {
    id: "NAGI Suite",
    title: "view-more",
    price: "15,0000",
    text: "check-in",
    image: SaunaData3,
  },
];
