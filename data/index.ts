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
        name:  "Beef/Chicken thai fried rice",
        dishes:[
            {
                name: "With Beef/Chicken Assorted",
                prices: [45, 65, 85]
            },
            {
                name: "Shredded beef sauce",
                prices: [85, 120, 180]
            },
            {
                name: "With Grilled Chicken",
                prices: [65, 85, 120]
            },
            {
                name: "With Grilled Cat Fish",
                prices: [180, 250]
            },
            {
                name: "With Spicy Shrimps",
                prices: [95, 145, 185]
            }
        ]
    },
    {
        name:"Spicy Ghanaian Jollof Rice",
        dishes:[
            {
                name: "With Beef and Veg Assorted",
                prices: [45, 65, 85]
            },
            {
                name: "Shredded beef sauce",
                prices: [85, 120, 180]
            },
            {
                name: "With Grilled Chicken",
                prices: [65, 85, 120]
            },
            {
                name: "With Grilled Cat Fish",
                prices: [180, 250]
            },
            {
                name: "With Spicy Shrimps",
                prices: [95, 145, 185]
            }
        ],
        
    },
    {
        name:"Herb Rice or White Rice",
        dishes:[
            {
                name: "Pork Pineapple Barbecue Sauce",
                prices: [75, 95, 125]
            },
            {
                name: "Shredded beef sauce",
                prices: [85, 120, 180]
            },
            {
                name: "Sweet Chilli Fish Sauce",
                prices: [95, 120, 160]
            },
            {
                name: "With Grilled Cat Fish",
                prices: [180, 250]
            },
        ],
        
    },
    {
        name:"",
        dishes:[
            {
                name: "Bolognese",
                prices: [75, 95, 130]
            },
            {
                name: "Chicken Alfredo",
                prices: [75, 95, 130]
            },
            {
                name: "Chicken Burger",
                prices: [75, 95, 130]
            },
            {
                name: "Chilli Beef Mac & Cheese",
                prices: [120, 180, 244]
            },
            {
                name: "Ramen Noodles",
                prices: [45, 65, 85]
            },
        ],
        
    }
],
"Starters":[ {
            name:  "",
            dishes:[
                {
                    name: "Sausage and egg",
                    prices: [45]
                },
                {
                    name: "Pancake and sandwich",
                    prices: [45]
                },
                {
                    name: "Samosa rolls and kaslow",
                    prices: [45]
                },
                {
                    name: "Chicken popcorn",
                    prices: [65]
                },
                {
                    name: "Potato Salad",
                    prices: [65]
                },
                {
                    name: "Sausage and Bacon Rolls",
                    prices: [65]
                },
                {
                    name: "Spicey Chicken Wings",
                    prices: [55, 85, 120]
                },
               
            ]
        },
       
    ],
    "Family Platters":[ {
            name:  "",
            dishes:[
                {
                    name: "English Breakfast Platter",
                    prices: [280]
                },
                {
                    name: "Fruit Platter",
                    prices: [180]
                },
                {
                    name: "Seafood Platter",
                    prices: [390]
                },
                {
                    name: "Canape Platter",
                    prices: [350]
                },
                {
                    name: "English Supper Platter(Mashed Potatoes)",
                    prices: [390]
                },
                {
                    name: "African Friendly Platter",
                    prices: [65]
                },
                {
                    name: "Spicey Chicken Wings",
                    prices: [350]
                },
               
            ]
        },
       
    ],
    "Nigerian Friendly":[ {
            name:  "Egusi Soup",
            dishes:[
                {
                    name: "With Gari",
                    prices: [55]
                },
                {
                    name: "With Semo",
                    prices: [75]
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
                    prices: [55]
                },
                {
                    name: "With Semo",
                    prices: [75]
                },
            ]
        },
        {
            name:"Oha Soup",
            dishes:[
                {
                    name: "With Gari",
                    prices: [55]
                },
                {
                    name: "With Semo",
                    prices: [75]
                },
            ]
        },
        {
            name:"Vegetable Soup",
            dishes:[
                {
                    name: "With Gari",
                    prices: [55]
                },
                {
                    name: "With Semo",
                    prices: [75]
                },
            ]
        },
        {
            name:"Okra Soup",
            dishes:[
                {
                    name: "With Gari",
                    prices: [55]
                },
                {
                    name: "With Semo",
                    prices: [75]
                },
            ]
        }
    ],
    "Ghanaian Locals":[ {
            name:  "",
            dishes:[
                {
                    name: "Fufu",
                    prices: [10]
                },
                {
                    name: "Rice Ball",
                    prices: [5]
                },
                {
                    name: "Banku",
                    prices: [5]
                },
                {
                    name: "Kokonte",
                    prices: [5]
                },
                {
                    name: "Plain Rice",
                    prices: [15]
                },
                {
                    name: "Jollof Rice",
                    prices: [20]
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
                    name: "Cow Meat",
                    prices: [30]
                },
                {
                    name: "Bush Meat",
                    prices: [45]
                },
                {
                    name: "Chicken",
                    prices: [25]
                },
                {
                    name: "Salted Beef",
                    prices: [5]
                },
                {
                    name: "Chicken Wings",
                    prices: [10]
                },
                {
                    name: "Tuna",
                    prices: [15]
                },
                {
                    name: "Koobi",
                    prices: [15]
                },
                {
                    name: "Wele",
                    prices: [7]
                },
                {
                    name: "Boiled Egg",
                    prices: [5]
                },
                {
                    name: "Intestine",
                    prices: [15]
                },
                {
                    name: "Fresh Tilapia",
                    prices: [40]
                },
                {
                    name: "Salmon",
                    prices: [15]
                },
                {
                    name: "Catfish",
                    prices: [15]
                },
                {
                    name: "Snail",
                    prices: [40]
                },
                {
                    name: "Dry Catfish(Adwene)",
                    prices: [50]
                },
          
            ]
        },
        {
            name:  "Soup and Stews",
            dishes:[
                {
                    name: "Goat Light Soup",
                    prices: []
                },
                {
                    name: "Green Soup",
                    prices: []
                },
                {
                    name: "Groundnut or Peanut butter Soup",
                    prices: []
                },
                {
                    name: "Okro stew",
                    prices: []
                },
                {
                    name: "Kontomire stew",
                    prices: []
                },
                {
                    name: "Pepper Soup",
                    prices: []
                },
                {
                    name: "Chicken Soup",
                    prices: []
                },
                {
                    name: "Palmnut soup",
                    prices: []
                },
            ]
        }  
    ],

    "Special Order":[ {
            name:  "Special Loaded Banku",
            dishes:[
                {
                    name: "Grilled Chicken",
                    prices: [55, 85, 135]
                },
                {
                    name: "Grilled Catfish",
                    prices: [180, 250]
                },
            ]
        },
        {
            name:  "Loaded Ghanaian Oil Rice",
            dishes:[
                {
                    name: "Grilled Chicken",
                    prices: [55, 85, 135]
                },
                {
                    name: "Grilled Catfish",
                    prices: [180, 250]
                },
            ]
        },
        {
            name:  "Special Etor",
            dishes:[
                {
                    name: "Plantain",
                    prices: [50]
                },
                {
                    name: "Yam",
                    prices: [75]
                },
            ]
        },
        {
            name:  "Special Loaded Banku",
            dishes:[
                {
                    name: "Boiled Yam With Asanka Groundnut Sauce",
                    prices: [75]
                },
               
            ]
        },
       
    ]
}


export const staff = [
    {
        name: "Richard Oduro",
        position: "CEO & Founder",
        auto:"He holds a bachelor of Art degree in Economics and Mathematics from the University of Ghana ,Legon.",
        src:""
    },
     {
        name: "Joshua Azu Benson",
        position: "Manager",
        auto:"A Sports Science graduate, physiotherapist, and certified digital marketer. I combine my passion for music and digital marketing to connect with communities and create meaningful experiences.",
        src:"/img/benson.jpg"
    }, 
    {
        name: "Rexford Kofi Obeng",
        position: "Human Resource And Public Relations Director",
        auto:"",
        src:""
    },
    {
        name: "Stanley Asukuri Bastimi",
        position: "Operations Manager",
        auto:"",
        src:""
    },
    {
        name: "Ronald Kwabena Ofori",
        position: "Legal Advisor",
        auto:"",
        src:""
    },
    {
        name: "Kenneth Nana Ofori - Asae",
        position: "Social Media And Creative Director",
        auto:"",
        src:""
    },
    {
        name: "Raymond Kojo Freeman",
        position: "Financial Director",
        auto:"B.A. in Economics- Universityof Ghana, Legon, is a computerized accounting expert. He holds a Level One qualification in computerized accounts from The City & Guilds of London Institute.",
        src:"/img/freeman.jpg"
    }

]

export const services = [
    {},
    {},
    {},
    {}
]
