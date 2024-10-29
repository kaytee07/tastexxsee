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
                name: "With sweet sour Chicken/ beef sauce",
                prices: [45, 65, 85]
            },
            {
                name: "With Tilapia",
                prices: [45, 65, 85]
            },
             {
                name: "With SHRIMPS",
                prices: [45, 65, 85]
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
                name: "With Chicken sauce",
                prices: [45, 65, 85]
            },
            {
                name: "With Tilapia",
                prices: [45, 65, 85]
            },
             {
                name: "With Grilled Cat Fish",
                prices: [45, 65, 85]
            }
        ]
    }
],
    "Nigerian Friendly":[ {
            name:  "beef thai fried rice",
            dishes:[
                {
                    name: "With Chicken",
                    prices: [45, 65, 85]
                },
                {
                    name: "With sweet sour Chicken/ beef sauce",
                    prices: [45, 65, 85]
                },
                {
                    name: "With Tilapia",
                    prices: [45, 65, 85]
                },
                {
                    name: "With SHRIMPS",
                    prices: [45, 65, 85]
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
                    name: "With Chicken sauce",
                    prices: [45, 65, 85]
                },
                {
                    name: "With Tilapia",
                    prices: [45, 65, 85]
                },
                {
                    name: "With Grilled Cat Fish",
                    prices: [45, 65, 85]
                }
            ]
        }]
}

export const dishes = [
    {},
    {},
    {},
    {}
]

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
