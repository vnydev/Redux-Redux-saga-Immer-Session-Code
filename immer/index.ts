import {produce} from 'immer';

const productData = [
    {
        name: "Apple Iphone",
        price: 50000
    },
    {
        name: "Samsung Galaxy 10",
        price: 60000
    },
    {
        name: "Oneplus 6",
        price: 40000
    }
]

const nextProductData = produce(productData, draft => {
    draft.push({name:"Nokia", price: 4000})
    // return draft;
})

console.log(productData.length)
console.log(nextProductData === productData)
