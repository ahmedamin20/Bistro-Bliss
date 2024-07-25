import { DESHES_ENUM } from "@/constants/enums/deshesCategriesEnum";
import image from "@/assets/menu/pexels-nadin-sh-12956424 1.jpeg"
export const menuItems = [
    {
        title: "Fried Eggs",
        price: 9.99,
        image:image,
        desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
        type: DESHES_ENUM.BREAKFAST,
    },
    {
        title: "Hawaiian Pizza",
        image:image,
        price: 15.99,
        desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
        type: DESHES_ENUM.MAIN_DESHES,
    },
    {
        image:image,
        title: "Martinez Cocktail",
        price: 7.25,
        desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
        type: DESHES_ENUM.DRINKS,
    },
    {
        image:image,
        title: "Butterscotch Cake",
        price: 20.99,
        desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
        type: DESHES_ENUM.DESSERTS,
    },
    {
        image:image,
        title: "Mint Lemonade",
        price: 5.89,
        desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
        type: DESHES_ENUM.DRINKS,
    },
    {
        image:image,
        title: "Chocolate Icecream",
        price: 18.05,
        desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
        type: DESHES_ENUM.DESSERTS,
    },
    {
        image:image,
        title: "Cheese Burger",
        price: 12.55,
        desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
        type: DESHES_ENUM.MAIN_DESHES,
    },
    {
        image:image,
        title: "Classic Waffles",
        price: 12.99,
        desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
        type: DESHES_ENUM.BREAKFAST,
    }
];
