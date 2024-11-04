type Dish = {
  name: string;
  prices: number[]
}

type MenuItem = {
  name: string,
  dishes: Dish[]
}

type Menu = {
  [key: string]: MenuItem[];
};

export const constinental = [
    {
        name: "fried rice and chicken",
        img: "/img/food1.avif"
    },
    {
        name: "fried rice and chicken",
        img: "/img/food2.avif"
    },
    {
        name: "fried rice and chicken",
        img: "/img/food3.avif"
    },
    {
        name: "fried rice and chicken",
        img: "/img/food4.avif"
    },
     {
        name: "fried rice and chicken",
        img: "/img/food5.avif"
    },
    {
        name: "fried rice and chicken",
        img: "/img/food6.avif"
    },
]

export const menuType = ["African Friendly", "Nigerian Friendly", "European Friendly", "Starters", "Weekend Local", "Special Weekend Order", "Spicy Chicken Wings", "Special Order"] 

export const menu: Menu = {
    "African Friendly":[ {
        name:  "beef thai fried rice",
        dishes:[
            {
                name: "With Chicken",
                prices: [45, 65, 85]
            },
            {
                name: "With sweet sour Chicken/beef sauce",
                prices: [65, 85, 120]
            },
            {
                name: "With Tilapia",
                prices: [75, 120]
            },
            {
                name: "With Grilled Cat Fish",
                prices: [120]
            },
            {
                name: "With Shrimps",
                prices: [95, 120]
            }
        ]
    },
    {
        name:"Veg Meat Assorted Jollof Rice",
        dishes:[
            {
                name: "With Chicken",
                prices: [45, 65, 85]
            },
            {
                name: "With Chicken Sauce",
                prices: [65, 85]
            },
            {
                name: "With Tilapia",
                prices: [75, 120]
            },
            {
                name: "With Grilled Cat Fish",
                prices: [120]
            },
            {
                name: "With Shrimps",
                prices: [95, 120]
            }
        ],
        
    },
    {
        name:"Herb Rice",
        dishes:[
           {
                name: "With sweet sour Chicken/beef sauce",
                prices: [55, 75, 95]
            },
            {
                name: "With Shrimp Veg Sauce",
                prices: [95, 120]
            },
            {
                name: "With Grilled Cat Fish",
                prices: [120]
            },
        ],
        
    },
    {
        name:"Loaded Ghanaian Oil Rice",
        dishes:[
           {
                name: "With Chicken",
                prices: [65, 85]
            },
            {
                name: "With Grilled Cat Fish",
                prices: [120, 150]
            },
        ],
        
    },
    {
        name:"Meat Assorted Noodles",
        dishes:[
           {
                name: "Single Meat",
                prices: [45, 65]
            },
            {
                name: "Mix Meat",
                prices: [55, 75]
            },
        ],  
    },
    {
        name:"Special Loaded Banku",
        dishes:[
           {
                name: "With Grilled Chicken",
                prices: [45, 65]
            },
            {
                name: "With Tilapia",
                prices: [65, 85]
            },
            {
                name: "With Grilled CatFish",
                prices: [85, 120]
            },
        ],
        
    }
],
"Starters":[ {
            name:  "",
            dishes:[
                {
                    name: "Special Spring Rolls & mix veg",
                    prices: [45]
                },
                {
                    name: "Special Samosa & mix veg",
                    prices: [45]
                },
                {
                    name: "Scrambled eggs & mix veg",
                    prices: [45]
                },
                {
                    name: "UK Bakes & mixed Veg",
                    prices: [55]
                },
                {
                    name: "Fruit Salad",
                    prices: [45]
                },
               
            ]
        },
       
    ],
    "Nigerian Friendly":[ {
            name:  "Egusi Soup",
            dishes:[
                {
                    name: "With Gari",
                    prices: [65, 85]
                },
                {
                    name: "With Semo",
                    prices: [65, 85]
                },
            ]
        },
        {
            name:"Nigerian Jollof Rice",
            dishes:[
                {
                    name: "With Chicken",
                    prices: [55, 75]
                },
            ]
        },
        {
            name:"Bitter Leaf Soup",
            dishes:[
                {
                    name: "With Gari",
                    prices: [55, 65]
                },
                {
                    name: "With Semo",
                    prices: [65, 85]
                },
            ]
        },
        {
            name:"Oha Soup",
            dishes:[
                {
                    name: "With Gari",
                    prices: [55, 65]
                },
                {
                    name: "With Semo",
                    prices: [65, 85]
                },
            ]
        },
        {
            name:"Vegetable Soup",
            dishes:[
                {
                    name: "With Gari",
                    prices: [55, 65]
                },
                {
                    name: "With Semo",
                    prices: [65, 85]
                },
            ]
        }
    ],
        "European Friendly":[ {
            name:  "",
            dishes:[
                {
                    name: "Mashed Potato With English Beef Gravy",
                    prices: [90, 120]
                },
                {
                    name: "Potato Chips With Chicken",
                    prices: [65, 85]
                },
                {
                    name: "English Breakfast Plata",
                    prices: [280]
                },
                {
                    name: "Canapé Plata",
                    prices: [350]
                },
                {
                    name: "Seafood Plata",
                    prices: [550]
                },
                {
                    name: "Africa Friendly Plata",
                    prices: [450]
                },
            ]
        },
       
    ],
    "Weekend Local":[ {
            name:  "",
            dishes:[
                {
                    name: "Fufu",
                    prices: [10]
                },
                {
                    name: "Rice Ball",
                    prices: [10]
                },
                {
                    name: "Banku",
                    prices: [5]
                },
                {
                    name: "Kokonte",
                    prices: [5]
                },
            ]
        },
        {
            name:  "Protein List",
            dishes:[
                {
                    name: "Goat Meat",
                    prices: [30]
                },
                {
                    name: "Chicken Thigh",
                    prices: [20]
                },
                {
                    name: "Chicken Wings",
                    prices: [20]
                },
                {
                    name: "Tuna",
                    prices: [15]
                },
                {
                    name: "Wele",
                    prices: [5]
                },
                {
                    name: "Boiled Egg",
                    prices: [5]
                },
                {
                    name: "Crab",
                    prices: [10]
                },
                {
                    name: "Kotodwe",
                    prices: [25]
                },
                {
                    name: "Beef",
                    prices: [20]
                },
                {
                    name: "Catfish",
                    prices: [45]
                },
                {
                    name: "Snail",
                    prices: [30]
                },
                {
                    name: "Salmon",
                    prices: [15]
                },
                 {
                    name: "Tilapia",
                    prices: [40]
                },
                {
                    name: "Towel",
                    prices: [15]
                },
            ]
        },
        {
            name:  "Soups",
            dishes:[
                {
                    name: "Goat Soup",
                    prices: []
                },
                {
                    name: "Abunuabunu",
                    prices: []
                },
                {
                    name: "Groundnut Soup",
                    prices: []
                },
                {
                    name: "Okrow soup",
                    prices: []
                },
                {
                    name: "Fante Fante",
                    prices: []
                },
                {
                    name: "Palmnut soup",
                    prices: []
                },
            ]
        }  
    ],
     "Special Weekend Order":[ {
            name:  "",
            dishes:[
                {
                    name: "Boiled Yam & Asanka Stew",
                    prices: [75]
                }
            ]
        },
       
    ],
     "Special Chicken Wings":[ {
            name:  "",
            dishes:[
                {
                    name: "Chicken Pizza",
                    prices: [55]
                },
                {
                    name: "Eat Large",
                    prices: [85]
                },
            ]
        },
       
    ],
    "Special Order":[ {
            name:  "Pizza",
            dishes:[
                {
                    name: "Chicken Pizza",
                    prices: [65, 85, 120]
                },
                {
                    name: "Fruit Pizza",
                    prices: [75, 95, 120]
                },
                {
                    name: "Special Pizza",
                    prices: [85, 100, 130]
                },
                {
                    name: "Eat Large",
                    prices: [65]
                },
            ]
        },
       
    ]
}


export const staff = [
    {
        name: "Richard Oduro",
        position: "CEO & Founder",
        auto:"lorem"
    }, 
    {
        name: "Rexford Kofi Obeng",
        position: "Human Resource And Public Relations Director",
        auto:"lorem"
    },
    {
        name: "Stanley Asukuri Bastimi",
        position: "Operations Manager",
        auto:"lorem"
    },
    {
        name: "Ronald Kwabena Ofori",
        position: "Legal Advisor",
        auto:"lorem"
    },
    {
        name: "Kenneth Nana Ofori - Asae",
        position: "Social Media And Creative Director",
        auto:"lorem"
    }

]

export const services = [
    {},
    {},
    {},
    {}
]
