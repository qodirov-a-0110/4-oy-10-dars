// 1-misol
// Berilgan massivning barcha elementlarini kvadratga oshiring va yangi massiv hosil qiling.
// let arr = [1,2,3,4,5,60];
// let arr1 = arr.map(function (value) {
//     return value ** 2;
// })
// console.log(arr1);


// 2-masala
// Berilgan massivdan manfiy qiymatlarni olib tashlang va faqat musbat qiymatlarni saqlaydigan yangi massiv hosil qiling.
// let arr = [-1,-2,-5,-7,1,2,3,4,5,6];
// let arr1 = arr.forEach(function (value) {
//     if (value>0) {
//         console.log(value);
//     }   
// });


// 3-misol
// Berilgan massivning har bir elementini 2 ga ko'paytiring va natijani konsolga chiqaring.
// let arr = [1,2,3,4,5,6];
// let arr1 = arr.map(function (value) {
//     return value *2;
// });
// console.log(arr1);

// 4-misol
// Berilgan massivning barcha elementlarini yig'indisini hisoblang va natijani qaytaring.
// let arr = [1,2,3,4,5,6,78,-89];
// let sum = 0;
// let arr1 = arr.map(function (value) {
//     sum+=value;
//     return value;
// }) 
// console.log(sum);

// 5-misol
// Berilgan massivdan faqat musbat qiymatlarni ajratib, yangi massiv hosil qiling.
// let arr = [1,2,3,4,5,6,7,8,-78,-56,-5,-9,0,45];
// let arr1 = arr.filter(function (value) {
//     return value >0;
// })
// console.log(arr1);


// 6-misol
// Berilgan massivdan faqat juft sonlarni ajratib, yangi massiv hosil qiling.
// let arr = [2,3,4,5,6,7,8];
// let arr1 = arr.filter(function (value) {
//     return value %2 ==0;    
// });
// console.log(arr1);

// 7-misol
// Berilgan massivdan uzunligi 5 ta belgidan kam bo'lgan stringlarni ajratib, yangi massiv hosil qiling.
// let arr = ['sardor','vali',"g'ani",'ali','alisher','xamroqulov'];
// let arr1 = arr.filter(function (value) {
//     return value.length<5;    
// })
// console.log(arr1);

// 8-misol
// Berilgan massivdan faqat 18 yoshdan katta bo'lgan odamlarning yoshini ajratib, yangi massiv hosil qiling.
// const users = [
//     {name:'Axrorbek',age: 18},
//     {name:'Axmadjon',age: 17},
//     {name:'ozodbe',age: 21},
//     {name:'abduraxmon',age: 24},
//     {name:'elyor',age: 15},
// ];
// let arr1 = users[0];
// let res = users.filter(function (value) {
//     if (value.age>18) {
//         return value;
//     }
// })
// console.log(res);

// 9-misol
// Berilgan massivning barcha elementlarini kvadratga oshiring va yangi massiv hosil qiling.
// let arr = [1,2,3,4,5,6,7,8,9];
// let arr1 = arr.map(function (value) {
//     return value ** 2;   
// })
// console.log(arr1);


// 10-masala
// Berilgan massivning har bir elementiga 5 qo'shib, yangi massiv hosil qiling.
// let arr = [1,2,3,4,5,6,7,8,9];
// let arr1 = arr.map(function (value) {
//     return value + 5;
// });
// console.log(arr1);


// 11-masala
// Berilgan massivdagi barcha stringlarni katta harflar bilan yozilgan yangi massiv hosil qiling.
// let arr = ['salom','xayr','kettik'];
// let arr1 = arr.map(function (value) {
//     return value.toUpperCase();
// })
// console.log(arr1);

// 12-masala
// Berilgan massivdagi har bir elementning kvadrat ildizini hisoblab, yangi massiv hosil qiling.
// let arr = [1,2,3,4,5,6,27];
// let arr1 = arr.map(function (value) {
//     return Math.cbrt(value)
// })
// console.log(arr1);


// 13-masala
// Berilgan massivda hech bo'lmaganda bitta manfiy son bor-yo'qligini tekshiring.
// let arr = [1, -5, 6, 7, 8];
// let res = arr.some(function (value) {
//     return value > 0
// })
// console.log(res);


// 14-masala
// Berilgan massivda hech bo'lmaganda bitta string uzunligi 10 ta belgidan katta bo'lgan string bor-yo'qligini tekshiring.
// let arr = ['salom','shox','xurasndman'];
// let arr1 = arr.some(function (value) {
//     return value.length >10;
// })
// console.log(arr1);


// 15-masala
// Berilgan massivdagi barcha sonlar musbat ekanligini tekshiring.
// let arr = [1,2,3,4,5,6,7,8.-9];
// let res = arr.every(function (value) {
//     return value>0 ;
// });
// console.log(res);

// 16-masala
// Berilgan massivdagi barcha stringlar katta harflar bilan yozilgan ekanligini tekshiring.
// ????????

// 17-misol
// Berilgan massivda ma'lum bir element mavjudligini tekshiring va natijani qaytaring.
// let arr = [1,2,3,4,'salom','shox'];
// let arr1 = arr.includes(77)
// console.log(arr1);


// 18-masala
// Berilgan massivda ma'lum bir elementning birinchi uchragan indeksini toping va qaytaring.
// let arr = [1,2,3,4,'salom','shox'];
// let res = arr.indexOf(3);
// console.log(res);


// 19-masala
// Berilgan massivda ma'lum bir elementning oxirgi uchragan indeksini toping va qaytaring.
// let arr = [1,2,3,4,'salom','shox'];
// let res = arr.lastIndexOf();
// console.log(res);


// 20-misol
// Berilgan massivda shartga mos keladigan birinchi elementni toping va qaytaring (masalan, 10 dan katta bo'lgan birinchi element).
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
// let res = arr.find(function (value) {
//     return value>3;
// })
// console.log(res);


// 21-misol
// Berilgan massivda shartga mos keladigan birinchi elementning indeksini toping va qaytaring (masalan, 10 dan katta bo'lgan  birinchi elementning indeksi).
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
// let res = arr.findIndex(function (value) {
//     return value > 10;
// });
// console.log(res);


// 22-misol
// Berilgan massivda shartga mos keladigan oxirgi elementni toping va qaytaring (masalan, 10 dan katta bo'lgan oxirgi element).
// let arr = [0,1,2,3,4,5,6,7,12,35,68];
// let res = arr.findLast(function (value) {
//     return value>10;
// })
// console.log(res);

// 23-misol
// Berilgan massivda shartga mos keladigan oxirgi elementning indeksini toping va qaytaring (masalan, 10 dan katta bo'lgan oxirgi elementning indeksi).
// let arr = [0,1,2,3,4,5,6,7,12,35,68];
// let res = arr.findLastIndex(function (value) {
//     return value>10;
// })
// console.log(res);

// 24-misol
// Berilgan massivni teskari tartibda joylashtiring va yangi massiv hosil qiling.
// let arr = [0,1,2,3,4,5,6,7,12,35,68];
// let res = arr.reverse();
// console.log(res); 


// 25-misol
// Berilgan massivni o'sish tartibida saralang va yangi massiv hosil qiling.
// let arr = [5,4,98,6,24,2];
// let res = arr.sort(function(a,b){
//     return a-b;
// });
// console.log(res);


// 26-misol
// Berilgan massivdagi har bir elementni ikki barobarga oshirib konsolga chiqaring.
// let arr = [5,4,98,6,24,2];
// let res = arr.map(function (value) {
//     return value **2;
// });
// console.log(res);


// 27-misol
// Berilgan massivdan faqat musbat qiymatlarni ajratib, yangi massiv hosil qiling.
// let arr = [-45,-58,-32,-12,12,14,15,81];
// let res = arr.filter(function (value) {
//     return value > 0;
// });
// console.log(res);


// 28-misol
// Berilgan massivning barcha elementlarini kvadratga oshirib, yangi massiv hosil qiling.
// let arr = [5,8,2,1,12,14,15,81];
// let res = arr.map(function (value) {
//     return value**2;
// });
// console.log(res);

// 29-misol
// Berilgan massivda hech bo'lmaganda bitta manfiy son bor-yo'qligini tekshiring.
// let arr = [1,2,3,4,5,6,7,8,-9];
// let res = arr.every(function (value) {
//     return value >0
// });
// console.log(res);

// 30-misol
// Berilgan massivdagi barcha sonlar musbat ekanligini tekshiring.
// let arr = [1,2,3,4,5,6,7,8,-9];
// let res = arr.every(function (value) {
//     return value >0
// });
// console.log(res);

// 31-misol
// Berilgan massivdagi barcha elementlarni 3 ga ko'paytiring va natijada 10 dan katta bo'lgan elementlarni ajratib, yangi massiv hosil qiling.
// let arr = [1,2,3.3,4,5,6];
// let a = [];
// let res = arr.forEach(function (value) {
//     if (value*3 >10) {
//        console.log(value);
//     }
//     return value ;
// })
