export const levels = [
  {
    id: 1,

    title: "飯糰排排站",

    instruction: "把飯糰移到便當中間",

    starterCode: "display: flex;",

    correctCSS: "justify-content: center;",

    hints: [
      "和水平排列有關",
      "試試看 `justify-content: center;`",
    ],

    containerStyle: {
      display: "flex",
    },

    food: "onigiri",
    foodCount: 5,
  },

  {
    id: 2,

    title: "鮭魚放中間",

    instruction: "讓鮭魚垂直置中",

    starterCode: "display: flex;",

    correctCSS: "align-items: center;",

    hints: [
      "和垂直方向有關",
      "試試看 `align-items: center;`",
    ],

    containerStyle: {
      display: "flex",
    },

    food: "salmon",
    foodCount: 3,
  },

  {
    id: 3,

    title: "毛豆直直排",

    instruction: "把毛豆改成直排",

    starterCode: "display: flex;",

    correctCSS: "flex-direction: column;",

    hints: [
      "和排列方向有關",
      "試試看 `flex-direction: column;`",
    ],

    containerStyle: {
      display: "flex",
    },

    food: "edamame",
    foodCount: 3,
  },

  {
    id: 4,

    title: "玉子燒不要擠",

    instruction: "幫玉子燒增加間距",

    starterCode: "display: flex;",

    correctCSS: "gap: 20px;",

    hints: [
      "和間距有關",
      "試試看 `gap: 20px;`",
    ],

    containerStyle: {
      display: "flex",
       gap: "1px",
    },

    food: "tamago",
    foodCount: 5,
  },

 {
  id: 5,

  title: "飲料放不下啦",

  instruction: "讓飲料自動換行",

  starterCode: "display: flex;",

  correctCSS: "flex-wrap: wrap;",

  hints: [
    "位置太擠，請試著把飲料放到下一行",
    "試試看 `flex-wrap: wrap;`",
  ],

  containerStyle: {
    display: "flex",
    gap: "16px",
    width: "320px",
  },

  food: "drink",
  foodCount: 5,
},
  
];
