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

 