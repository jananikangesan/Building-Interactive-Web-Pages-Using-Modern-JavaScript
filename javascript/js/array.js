 //array
 let carMakers=["Nishan","Ford","Tata"];
 console.log(carMakers);

 let number=new Array(1,2,3,4) ;

 console.log(number);

 number.push(5);
 console.log("after pushing element into the array");
 console.log(number);

 number.unshift(6);
 console.log("after adding element to the begining of array");
 console.log(number);

 number.pop();
 console.log("after remove element from the array");
 console.log(number);

 number.shift();
 console.log("after removing element from the begining of array");
 console.log(number);

 let cars=[];
 let make='Eagle';
 let model='Talon TST';
 let color="Blue";

 let car=[];
 car.push(make);
 car.push(model);
 car.push(color);

 cars.push(car);
 console.log(cars);

//
const products=[
    ["one",300],
    ["one",300],
    ["two",50],
    ["two",50],
    ["three",10]
];

//create and access array element

// const calculateDiscountedPrice = discount=>{
//     for(let i=0;i<products.length;i++){
//         products[i][1]=products[i][1]-products[i][1]*discount/100;
//     }
// }

const calculateDiscountedPrice= discount => products.map(
    product=>[product[0],product[1]-product[1]*discount/100]
)
let DiscountedPrice=calculateDiscountedPrice(10);
console.log(products);
console.log(DiscountedPrice);

const premiumProducts=products.filter(product =>product[1]>200);
console.log(premiumProducts);

const filteredProducts=products.filter(product=>product[1]<=200);
const nonpremiumProducts=filteredProducts.map(product=>[product[0],product[1]-product[1]*15/100]);

console.log(nonpremiumProducts);

let productStock=products.reduce((stocks,product)=>{
    let stockItem=stocks.find(stock=>stock[0]==product[0]);
    if(!stockItem){
        stocks.push([product[0],1]);
    }else{
        ++stockItem[1];
    }
    return stocks;

},[]);

console.log(productStock);

///chaining array function
const nonPremiumProducts=products.filter(product=>product[1]<=200)
    .map(prod=>[prod[0].toUpperCase(),prod[1]])
    .reduce((stock,curreentProduct)=>{
        let stockItems=stock.find(item=>item[0]==curreentProduct[0]);
        if(!stockItems){
            stock.push([curreentProduct[0],1])
        }else{
            ++stockItems[1];
        }return stock;

    },[]);

 console.log(nonPremiumProducts);   

 //create object Using Initializer

function Engine(cylinders,size){
    this.cylinders=cylinders;
    this.size=size;
}

function Car(make,model,color,cylinders,size){
    this.make=make;
    this.model=model;
    this.color=color;

    this.engine=new Engine(cylinders,size);   
}

let jackCar=new Car("Eagle","Talon Tsi","silver",4,2.2);
let jillCar=new Car("Nissan","300ZX","black",4,2.3);

console.log(jackCar);
console.log(jillCar);

jackCar.year=2015;

console.log(jackCar);
console.log(jillCar);

let myCar={
    make:'Honda',
    model:"ZXi",
    color:'red',
    engine:{
        cylinders:4,
        size:2.5
    }
}
console.log(myCar);
console.log(myCar.make);
console.log(myCar['make']);

// Operations on Complex Data Structures

const productItem = [
    {
        productName:"one",
        price:400
    }, 
    {
        productName:"one",
        price:450
    }, 
    {
        productName:"one",
        price:300
    },
     {
        productName:"one",
        price:400
    }, 
    {
        productName:"two",
        price:500
    }, 
    {
        productName:"two",
        price:60
    }, 
    {
        productName:"three",
        price:250
    },

];

let premiumProduct= productItem.filter(product=>product.price >300)
.map(product =>{
    return{
        productName:product.productName.toUpperCase(),
        price:product.price
    }
})
.reduce((stocks,currentProduct)=>{
    let stockItem=stocks.find(product=>product.productName == currentProduct.productName);
    if(stockItem){
        ++stockItem.stock;
    }else{
        stocks.push({
            productName:currentProduct.productName,
            stock:1
        })   
    }
    return stocks;
},[]);

console.log(premiumProduct);
