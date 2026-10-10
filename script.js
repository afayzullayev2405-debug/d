// let a=34;
// let b=24;
// a>b ? console.log("Kattasi", a): console.log("Kichkina", b);

// let son = 10;
// son>0 ? console.log("musbat"):console.log("manfiy");

// let son=18;
// son>=18 ? console.log("Ruxsat berildi"):console.log("ruxsat berilmadi");

// let son=60;
// son>=60 ? console.log("O'tdi"):console.log("Yiqildi");

// let son=7;
// son >= 1 && son <= 5 ? console.log("Ish kuni") : console.log("Dam olish kuni");

// let son = 25;
// son> 20 ? console.log("Yengil kiyining") : console.log("Issiq kiyining");

// let massiv = [45];
// massiv.length > 0 ? console.log(`${massiv.length} ta element bor`) : console.log("Massiv bo'sh");

let N = 25;
if (N >= 10 && N <= 50) {
    console.log("Son oraliqda bor");
} else {
    console.log("Son oraliqda yo'q");
}
let yosh = 25;
let staj = 3;
if (yosh > 22 && staj >= 2) {
    console.log("Ishga qabul qilindi");
} else {
    console.log("Mos kelmadi");
}
let kun = 6;
if (kun === 6 || kun === 7) {
    console.log("Dam olish kuni");
} else {
    console.log("Ish kuni");
}
let xaridorYoshi = 65;
let vip = 0;
if (xaridorYoshi > 60 || vip === 1) {
    console.log("Chegirma taqdim etildi");
} else {
    console.log("To'liq narx");
}
let yil = 2024;
if ((yil % 4 === 0 && yil % 100 !== 0) || (yil % 400 === 0)) {
    console.log("Kabisa yili");
} else {
    console.log("Oddiy yil");
}
let a = 3, b = 4, c = 5;
if (a < b + c && b < a + c && c < a + b) {
    console.log("Uchburchak yasash mumkin");
} else {
    console.log("Mavjud emas");
}
let login = "admin";
let parol = "1234";
if ((login === "admin" && parol === "1234") || login === "guest") {
    console.log("Xush kelibsiz!");
} else {
    console.log("Kirish rad etildi");
}