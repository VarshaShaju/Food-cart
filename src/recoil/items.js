
import { atom, selector } from "recoil"
import { item } from "../data/foodItems"
import { categories} from "../data/categories"

const foodItems = atom({
    key: "allFoodItems",
    default: item
})

const categoryList = atom({
    key: 'foodcategories',
    default: categories
})

const categoryType = atom({
    key: 'categorytype',
    default: 'Signature'
})

const searchtext = atom({
    key : "search",
    default : ''
})


const listedItems = selector({
    key: 'filteredfoods',
    get: ({ get }) => {
        const category = get(categoryType);
        const foods = get(foodItems)
        const searchquery = get(searchtext);

        return foods.filter(item => {
            const name = item.name.toLowerCase()
            const search = searchquery.toLowerCase()
            return (item.type === category && name.includes(search))
        })

    }

})

export {foodItems, searchtext, listedItems, categoryList, categoryType};