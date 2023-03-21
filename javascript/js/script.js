//object
employees = {
    1047:{
        firstname:'John',
        lastname:'Christ',
        salary:450,
        designation:'Software Developer',
        hasMedicalInsurance:false
    },
    1050:{
        firstname:'Franklin',
        lastname:'Michael',
        salary:250,
        designation:'Graphics Designer',
        hasMedicalInsurance:true
    }
}
console.log('Employee List',employees);


//for loop
let text='a quick brown fox';
let highlightedText='';

for(const character of text){
    if(character =='a' || character=='e' || character=='i'||
    character=='o'|| character=='u'){
        highlightedText += character.toUpperCase();

    }
    else{
         highlightedText += character;
    }
}
console.log(highlightedText);

//Javascript function
let product={
    productId:"10-665740",
    costPrice:2750,
    profitPercentage:15,
    sellingPrice:0
}

// function calculateSellingPrice(Product){
//     let sellingPrice =  product.costPrice + (product.profitPercentage/100 * product.costPrice) ;
//     product.sellingPrice=sellingPrice;
// }

const calculateSellingPrice =(product)=>{
    let sellingPrice =  product.costPrice + (product.profitPercentage/100 * product.costPrice) ;
    product.sellingPrice=sellingPrice;
}


calculateSellingPrice(product);
console.log(product);