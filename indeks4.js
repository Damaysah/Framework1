// const arr = [100,200,300];
// arr.push(150);
// arr[5]=500;
// arr.push(250);
// console.log(arr);
// console.log(arr.length);

// const fruits =[];

// fruits.push("apel");
// fruits.push("pisang");
// fruits.push(30);
// fruits.push(true);
// fruits[4]="buah naga";
// fruits.push(null);
// fruits.push("apel");
// console.log(fruits);

// let ibukota = new Map();

// ibukota.set("indonesia","jakarta");
// ibukota.set("jepang","tokyo");

// console.log(ibukota.get("indonesia"));

// const bmw ={
//     color: "red",
//     sunroof: false,
//     horn: () => console.log("tinn"),
//     steering: () => console.log("brmmm")
// }

// console.log(bmw.color);
// bmw.horn();

// let age=17;
// if (age >= 18){
//     console.log("you can sign up");
// } else if (age >=10) {
//     console.log("you can't sign up");
// }
// console.log("selamat datang");

// let day="senin";

// switch(day.toUpperCase()){
//     case "SENIN":
//         console.log("puasa sunnah hari senin");
//         break;
//     case "SELASA":
//         console.log("boleh ga puasa sunnah");
//         break;
    // case 3:
    //     console.log("rabu");
    //     break;
    // case 4:
    //     console.log("kamis");
    //     break;
    // case 5:
    //     console.log("jumat");
    //     break;
    // case 6:
    //     console.log("sabtu");
    //     break;
    // case 7:
    //     console.log("minggu");
    //     break;
//     default:
//         console.log("tidak valid");
//         break;
// }

// let age=16;

// let message = age>=16 ? 'you can drive':'you cannot drive';
// console.log(message);

// let users=[];

// users=null;

// if (users) {
//     console.log("user ada");
// } else {
//     console.log("user tidak ada");
// }

for (let step = 1; step <= 100; step ++) {
    if (step % 3 === 0 && step % 5 === 0) {
        console.log("fizzbuzz");
    } else if (step % 5 === 0) {
    console.log("buzz");
    } else if (step % 3 === 0)
    console.log("fizz");
    else  {
    console.log(step);
    }
    }