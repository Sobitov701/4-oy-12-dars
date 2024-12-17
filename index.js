// Obyektlarni tanlash va chiqarish

//1-misol
//Massivda 3 ta obyekt bor. Har bir obyekt name va age maydoniga ega. Massivdagi birinchi obyektning name qiymatini ekranga chiqaring.

let people = [
  { name: "Ali", age: 25 },
  { name: "Vali", age: 30 },
  { name: "Sami", age: 20 },
];

console.log(people[0].name);
// Natija: "Ali"

//2-misol
//Massivda 5 ta obyekt bor. Har bir obyekt id maydoniga ega. Oxirgi obyektning id qiymatini ekranga chiqaring.

let items = [{ id: 101 }, { id: 102 }, { id: 103 }, { id: 104 }, { id: 105 }];

console.log(items[4].id);
// Natija: 105

//3-misol
//4 ta obyektli massivdagi barcha obyektlarning age qiymatini ekranga chiqaring.

let people1 = [
  { name: "Ali", age: 25 },
  { name: "Vali", age: 30 },
  { name: "Sami", age: 20 },
  { name: "Karim", age: 35 },
];

let num3 = people1.map((value) => value.age);

console.log(num3);
// Natija: 25, 30, 20, 35

//4-misol
//3 ta obyektli massivning 2-obyektidagi city maydonini konsolga chiqaring.

let users = [
  { name: "Ali", city: "Toshkent" },
  { name: "Vali", city: "Samarqand" },
  { name: "Sami", city: "Buxoro" },
];

console.log(users[1].city);

//5-misol
//Bir massivda obyektlarning job maydonlari bor. Massivdagi barcha obyektlarning job qiymatlarini chiqaring.

let workers = [
  { name: "Ali", job: "Dasturchi" },
  { name: "Vali", job: "O'qituvchi" },
  { name: "Sami", job: "Haydovchi" },
];

let num5 = workers.map((value) => value.job);

console.log(num5);

//6-misol
//5 ta obyektli massivning 3-obyektidagi salary qiymatini ekranga chiqaring.

let employees = [
  { name: "Ali", salary: 1000 },
  { name: "Vali", salary: 1200 },
  { name: "Sami", salary: 900 },
  { name: "Karim", salary: 1500 },
  { name: "Asad", salary: 1100 },
];

console.log(employees[2].salary);

//7-misol
// 4 ta obyektli massivning birinchi obyektidagi country qiymatini chiqaring.

let countries = [
  { country: "Uzbekistan" },
  { country: "Russia" },
  { country: "USA" },
  { country: "China" },
];

console.log(countries[0].country);

//8-misol
// 6 ta obyektli massivdagi 5-obyektning status qiymatini ekranga chiqaring.

let orders = [
  { id: 1, status: "New" },
  { id: 2, status: "Pending" },
  { id: 3, status: "Shipped" },
  { id: 4, status: "Delivered" },
  { id: 5, status: "Cancelled" },
  { id: 6, status: "Returned" },
];

console.log(orders[4].status);

//9-misol
//3 ta obyektli massivning oxirgi obyektidagi phone qiymatini konsolga chiqaring.

let contacts = [
  { name: "Ali", phone: "998901234567" },
  { name: "Vali", phone: "998902345678" },
  { name: "Sami", phone: "998903456789" },
];

console.log(contacts[2].phone);

//10-misol
// 4 ta obyektli massivdagi barcha obyektlarning email qiymatlarini ekranga chiqaring.

let users1 = [
  { name: "Ali", email: "ali@gmail.com" },
  { name: "Vali", email: "vali@yahoo.com" },
  { name: "Sami", email: "sami@hotmail.com" },
  { name: "Karim", email: "karim@outlook.com" },
];

let num10 = users1.map((value) => value.email);

console.log(num10);

//Obyektlar qiymatini o'zgartirish

//11-misol
//Massivning birinchi obyektidagi name qiymatini "Alisher" qilib o'zgartiring.

let users2 = [
  { name: "Ali", age: 25 },
  { name: "Vali", age: 30 },
  { name: "Sami", age: 20 },
];

users2[0].name = "Alisher";

console.log(users2);

//12-misol
//Oxirgi obyektning status qiymatini "Updated" qilib o'zgartiring.

let tasks = [
  { id: 1, status: "New" },
  { id: 2, status: "In Progress" },
  { id: 3, status: "Pending" },
];

tasks[2].status = "Updated";

console.log(tasks);

//13-misol
//3-obyektning salary qiymatini 2000 ga tenglashtiring.

let employees1 = [
  { name: "Ali", salary: 1000 },
  { name: "Vali", salary: 1200 },
  { name: "Sami", salary: 1500 },
];

employees1[2].salary = 2000;

console.log(employees1);

//14-misol
//Massivning ikkinchi obyektidagi city qiymatini "Farg'ona" qilib o'zgartiring.

let cities = [
  { id: 1, city: "Toshkent" },
  { id: 2, city: "Namangan" },
  { id: 3, city: "Samarqand" },
];

cities[1].city = "Farg'ona";

console.log(cities);

//15-misol
// 4-obyektning email qiymatini yangi qiymat bilan almashtiring.

let clients = [
  { name: "Ali", email: "ali@mail.com" },
  { name: "Vali", email: "vali@mail.com" },
  { name: "Sami", email: "sami@mail.com" },
  { name: "Karim", email: "karim@mail.com" },
];

clients[3].email = "karim_new@mail.com";

console.log(clients);

//16-misol 20-misol gacha misol yozilmgan ekan

// Yangi maydon qo'shish va qiymatni yangilash

//21-misol
//Massivning birinchi obyektiga yangi status maydonini qo'shing va qiymatini "active" deb belgilang.

let users3 = [
  { name: "Ali", age: 25 },
  { name: "Vali", age: 30 },
  { name: "Sami", age: 20 },
];

users3[0].status = "active";

console.log(users3);

//22-misol
// Oxirgi obyektga yangi role maydonini qo'shing va qiymatini "admin" qilib belgilang.

let people2 = [{ name: "Ali" }, { name: "Vali" }, { name: "Sami" }];

people2[2].role = "admin";

console.log(people2);

//23-misol
//  Massivdagi barcha obyektlarga yangi isVerified maydonini qo'shing va qiymatini false qilib belgilang.

let users4 = [{ name: "Ali" }, { name: "Vali" }, { name: "Sami" }];

users4.forEach((user) => {
  user.isVerified = false;
});

console.log(users4);

//24-misol
// 2-obyektning salary qiymatini 500 ga oshiring.

let workers1 = [
  { name: "Ali", salary: 1000 },
  { name: "Vali", salary: 1200 },
  { name: "Sami", salary: 900 },
];

workers1[1].salary += 500;

console.log(workers1);

//25-misol
// 4-obyektning phone qiymatining oxiriga " (updated)" qatorini qo'shing.

let contacts1 = [
  { name: "Ali", phone: "998901234567" },
  { name: "Vali", phone: "998902345678" },
  { name: "Sami", phone: "998903456789" },
  { name: "Karim", phone: "998904567890" },
];

contacts1[3].phone += " (updated)";

console.log(contacts1);

//26-misol
//  Massivning ikkinchi obyektidagi age qiymatini ikki barobar oshiring.

let people3 = [
  { name: "Ali", age: 20 },
  { name: "Vali", age: 25 },
  { name: "Sami", age: 30 },
];

people3[1].age *= 2;

console.log(people3);

//27-misol
//Oxirgi obyektga yangi joinedAt maydonini qo'shing va qiymatini "2024-07-01" qilib belgilang.

let employees2 = [{ name: "Ali" }, { name: "Vali" }, { name: "Sami" }];

employees2[2].joinedAt = "2024-07-01";

console.log(employees2);

//28-misol
//Massivdagi 1-obyektning name qiymatiga " (CEO)" qo'shimchasini qo'shing.

let team = [{ name: "Ali" }, { name: "Vali" }, { name: "Sami" }];

team[0].name += " (CEO)";

console.log(team);

//29-misol
//3-obyektning price qiymatini 10% kamaytiring.

let products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

products[2].price *= 0.9;

console.log(products);

//30-misol
// Barcha obyektlarning isActive qiymatini true qilib o'zgartiring.

let users5 = [
  { name: "Ali", isActive: false },
  { name: "Vali", isActive: false },
  { name: "Sami", isActive: false },
];

users5.forEach((user) => {
  user.isActive = true;
});

console.log(users5);

// Shartli tekshirish va qiymatlar o'zgarishi

//31-misol
//Agar 2-obyektning status qiymati "Pending" bo'lsa, uni "Completed" qilib belgilang.

let data = [
  { id: 1, name: "Ali", status: "Completed" },
  { id: 2, name: "Vali", status: "Pending" },
  { id: 3, name: "Sami", status: "Completed" },
];

if (data[1].status === "Pending") {
  data[1].status = "Completed";
}

console.log(data);

//32-misol
// 1-obyektning age qiymati 30 dan katta bo'lsa, "Senior" degan yangi maydon qo'shing va qiymatini true qiling.

let data2 = [
  { id: 1, name: "Ali", age: 35 },
  { id: 2, name: "Vali", age: 25 },
  { id: 3, name: "Sami", age: 28 },
];

if (data2[0].age > 30) {
  data2[0].Senior = true;
}

console.log(data2);

//33-misol
//Oxirgi obyektning price qiymati 100 dan kichik bo'lsa, uni 100 ga tenglashtiring.

let data3 = [
  { id: 1, name: "Product1", price: 150 },
  { id: 2, name: "Product2", price: 80 },
  { id: 3, name: "Product3", price: 60 },
];

if (data3[data3.length - 1].price < 100) {
  data3[data3.length - 1].price = 100;
}

console.log(data3);

//34-misol
//Barcha obyektlarning role qiymatini "user" qilib yangilang, lekin oxirgi obyektning role qiymatini "admin" qilib qo'ying.

let data4 = [
  { id: 1, name: "Ali", role: "manager" },
  { id: 2, name: "Vali", role: "guest" },
  { id: 3, name: "Sami", role: "supervisor" },
];

data4.forEach((value, index) => {
  value.role = "user";
});

data4[data4.length - 1].role = "admin";

console.log(data4);

//35-misol
//3-obyektning city qiymati "Toshkent" bo'lsa, uni "Samarqand" qilib o'zgartiring.

let data5 = [
  { id: 1, name: "Ali", city: "Buxoro" },
  { id: 2, name: "Vali", city: "Namangan" },
  { id: 3, name: "Sami", city: "Toshkent" },
];

data5[2].city = "Samarqand";

console.log(data5);

//36-misol
//Massivdagi obyektlarning salary qiymati 1000 dan kichik bo'lgan obyektlarga "low" degan yangi maydon qo'shing.

let data6 = [
  { id: 1, name: "Ali", salary: 900 },
  { id: 2, name: "Vali", salary: 1200 },
  { id: 3, name: "Sami", salary: 800 },
];

data6.forEach((value) => {
  if (value.salary < 1000) {
    value.low = "low";
  }
});

console.log(data6);

//37-misol
//2-obyektning email qiymati "@gmail.com" bilan tugasa, " (verified)" qo'shimchasini kiriting.

let data7 = [
  { id: 1, name: "Ali", email: "ali@yahoo.com" },
  { id: 2, name: "Vali", email: "vali@gmail.com" },
  { id: 3, name: "Sami", email: "sami@mail.com" },
];

data7[1].email = "verified@gmail.com";

console.log(data7);

//38-misol
//Oxirgi obyektga yangi lastLogin maydonini qo'shing va qiymatini hozirgi sanaga tenglashtiring.

let data8 = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Vali" },
  { id: 3, name: "Sami" },
];

data8[2].lastLogin = 17_12_2024;

console.log(data8);

//39-misol
//Agar 1-obyektning stock qiymati 0 bo'lsa, "isAvailable" maydonini false qilib belgilang.

let data9 = [
  { id: 1, name: "Product1", stock: 0 },
  { id: 2, name: "Product2", stock: 5 },
  { id: 3, name: "Product3", stock: 10 },
];

if (data9[0].stock == 0) {
  data9[0].isAvailable = false;
}

console.log(data9);

//40-misol
//Massivdagi har bir obyektning status qiymatini "Inactive" qilib yangilang, lekin birinchi obyektni "Active" qoldiring.

let data10 = [
  { id: 1, name: "Ali", status: "Pending" },
  { id: 2, name: "Vali", status: "Active" },
  { id: 3, name: "Sami", status: "Completed" },
];

data10.forEach((value) => {
  value.status = "Inactive";
});

console.log(data10);

//Obyektni saralash, tanlash va qiymatlarni tekshirish

//41-misol
//Massivdagi obyektlarning price qiymati 500 dan katta bo'lgan obyektlarning isExpensive qiymatini true qilib belgilang.

let data11 = [
  { id: 1, name: "Product1", price: 600 },
  { id: 2, name: "Product2", price: 400 },
  { id: 3, name: "Product3", price: 800 },
];

if (data11.price > 500) {
  data11.isExpensive = true;
}

console.log(data11);

//42-misol
//2-obyektning salary qiymati >= 1000 bo'lsa, "High salary" degan yangi maydon qo'shing va qiymatini true qilib belgilang.

let data12 = [
  { id: 1, name: "Ali", salary: 900 },
  { id: 2, name: "Vali", salary: 1000 },
  { id: 3, name: "Sami", salary: 800 },
];

data12.forEach((value) => {
  if (value.salary >= 1000) {
    value.Highsalary = true;
  }
});

console.log(data12);

//43-misol
//Agar 3-obyektning name qiymati "Ali" bo'lsa, "isManager" degan maydon qo'shib, true deb belgilan

let data13 = [
  { id: 1, name: "Vali", role: "user" },
  { id: 2, name: "Sami", role: "user" },
  { id: 3, name: "Ali", role: "guest" },
];

if ((data13[2].salary = "Ali")) {
  data13.isManager = true;
}

console.log(data13);

//44-misol
//Massivda age maydoni 18 dan kichik bo'lgan obyektlar uchun "isUnderage" qiymatini true qilib qo'shing.

let data14 = [
  { id: 1, name: "Ali", age: 17 },
  { id: 2, name: "Vali", age: 20 },
  { id: 3, name: "Sami", age: 16 },
];

data14.forEach((value) => {
  if (value.age < 18) {
    value.isUnderage = true;
  }
});

console.log(data14);

//45-misol
// Massivdagi obyektlar ichidan stock qiymati < 10 bo'lgan obyektlarni aniqlab, "lowStock" qiymatini true qilib qo'shing.

let data15 = [
  { id: 1, name: "Product1", stock: 5 },
  { id: 2, name: "Product2", stock: 15 },
  { id: 3, name: "Product3", stock: 8 },
];

data15.forEach((value) => {
  if (value.stock < 10) {
    value.lowStock = true;
  }
});

console.log(data15);

//46-misol
// 1-obyekt va oxirgi obyektning role qiymatini "guest" qilib o'zgartiring.

let data16 = [
  { id: 1, name: "Ali", role: "admin" },
  { id: 2, name: "Vali", role: "user" },
  { id: 3, name: "Sami", role: "supervisor" },
];

(data16[0].role = "guest"), (data16[2].role = "guest");

console.log(data16);

//47-misol
//Agar biror obyektning status qiymati "Pending" bo'lsa, "isPending" degan maydon qo'shib, true qilib belgilang.

let data17 = [
  { id: 1, name: "Ali", status: "Pending" },
  { id: 2, name: "Vali", status: "Completed" },
  { id: 3, name: "Sami", status: "Pending" },
];

data17.forEach((value) => {
  if (value.status == "Peding") {
    value.isPending = true;
  }
});

console.log(data17);

//48-misol
// Massivdagi 3-obyektning city qiymati "Toshkent" bo'lsa, uni "Buxoro" qilib almashtiring.

let data18 = [
  { id: 1, name: "Ali", city: "Samarqand" },
  { id: 2, name: "Vali", city: "Namangan" },
  { id: 3, name: "Sami", city: "Toshkent" },
];
if (data18[2].city == "Toshkent") {
  data18[2].city = "Buxoro";
}

console.log(data18);

//49-misol
// Oxirgi obyektning score qiymati < 50 bo'lsa, "failed" maydonini qo'shib, qiymatini true qilib belgilang.

let data19 = [
  { id: 1, name: "Ali", score: 70 },
  { id: 2, name: "Vali", score: 90 },
  { id: 3, name: "Sami", score: 40 },
];

if (dat19[2].score < 50) {
  data.failed = true;
}

console.log(data19);

//50-misol
//Barcha obyektlarning discount qiymatini 0 qilib belgilang, lekin price qiymati > 1000 bo'lgan obyektlarda "discount" qiymatini 20 qilib belgilang.

let data20 = [
  { id: 1, name: "Product1", price: 1200 },
  { id: 2, name: "Product2", price: 800 },
  { id: 3, name: "Product3", price: 1500 },
];

data20.forEach((value) => {
  value.discount = 0;
  if (value.price > 1000) {
    value.discount = 20;
  }
});

console.log(data20);

// Obyektlarni o'zgartirish va murakkabroq amallar

//51-misol
//Massivdagi obyektlarning salary qiymatini 10% ga oshiring.

let data21 = [
  { id: 1, name: "Ali", salary: 1000 },
  { id: 2, name: "Vali", salary: 1500 },
  { id: 3, name: "Sami", salary: 2000 },
];

data21.forEach((value) => {
  value.salary += value.salary * 0.1;
});

console.log(data21);

//52-misol
//2-obyektning name qiymatiga " - employee" qo'shimchasini qo'shing.

let data22 = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Vali" },
  { id: 3, name: "Sami" },
];

data22[1].name = "Vali - employlee";

console.log(data22);

//53-misol
//Massivdagi obyektlarning isAvailable maydonini o'zgartirib, stock qiymati > 0 bo'lganlarga true, qolganlarga false qilib belgilang.

let data23 = [
  { id: 1, name: "Product1", stock: 5 },
  { id: 2, name: "Product2", stock: 0 },
  { id: 3, name: "Product3", stock: 10 },
];

//54-misol
// Agar birinchi obyektning price qiymati 1000 dan katta bo'lsa, uni 900 ga tushiring.

let data24 = [
  { id: 1, name: "Product1", price: 1200 },
  { id: 2, name: "Product2", price: 800 },
  { id: 3, name: "Product3", price: 1000 },
];

if (data24[0].price > 1000) {
  data24[0].price = 900;
}

console.log(data24);

//55-misol
//Oxirgi obyektga yangi updatedAt maydonini qo'shing va qiymatini "2024-07-10" qilib belgilang.

let data25 = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Vali" },
  { id: 3, name: "Sami" },
];

data25[2].updatedAt = "2024-07-10";

console.log(data25);

//56-misol
//3-obyektning level qiymatini "Intermediate" deb o'zgartiring, agar mavjud bo'lmasa, qo'shing.

let data26 = [
  { id: 1, name: "Ali", level: "Beginner" },
  { id: 2, name: "Vali" },
  { id: 3, name: "Sami" },
];

data26[2].level = "Intermediate";

console.log(data26);

//57-misol
// Agar biror obyektning score qiymati 80 dan katta bo'lsa, "isTop" qiymatini true qilib belgilang.

let data27 = [
  { id: 1, name: "Ali", score: 75 },
  { id: 2, name: "Vali", score: 85 },
  { id: 3, name: "Sami", score: 90 },
];

data27.forEach((value) => {
  if (value.score > 80) {
    value.istop = true;
  }
});

console.log(data27);

//58-misol
// Massivdagi obyektlardan role qiymati "admin" bo'lgan obyektlarni topib, ularning privileges qiymatini "full" qilib belgilang.

let data28 = [
  { id: 1, name: "Ali", role: "admin" },
  { id: 2, name: "Vali", role: "user" },
  { id: 3, name: "Sami", role: "admin" },
];

data28.forEach((value) => {
  if (value.role == "admin") {
    value.privileges = "full";
  }
});

console.log(data28);

//59-misol
//Oxirgi obyektning name qiymatiga " (completed)" qo'shimchasini qo'shing.

let data29 = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Vali" },
  { id: 3, name: "Sami" },
];

data29[2].name = "Sami(completed)";

console.log(data29);

//60-misol
//Agar birinchi obyektning isVerified qiymati false bo'lsa, uni true qilib belgilang.

let data30 = [
  { id: 1, name: "Ali", isVerified: false },
  { id: 2, name: "Vali", isVerified: true },
  { id: 3, name: "Sami", isVerified: false },
];

if (data30[0].isVerified === false) {
  data30[0].isVerified = true;
}

console.log(data30);
