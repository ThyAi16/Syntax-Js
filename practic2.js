// Bài tập khai báo biến và điều kiện
// 1. Tạo file ex1.js để giải bài sau:
// a. Khai báo một hằng số number với giá trị là 12.
var number = 12;
//console.log(number);

// b. Khai báo một biến name với giá trị là ”my number”
var name = "my number";
//console.log(name);

// c. Khai báo một biến isEven với giá trị là sai.
var isEven = false;
//console.log(isEven);

// d. Kiểm tra nếu number là số chẵn, gán lại isEven thành giá trị đúng.
if (number % 2 === 0)
{
    //console.log(isEven = true);
}
else
{
    //console.log(isEven);
}

// 2. Tạo file ex2.js, kiểm tra đoạn code sau sai ở đâu, sửa lại cho đúng và đưa nội dung
// đáp án vào file:
// const myName = "Alex";
// myName = "Nagi";
// console.log(myName);

//Answer
// -> Neu khong gan gia tri cho bien myName thi dong "myName = "Nagi"" dang dung.
// -> Neu da gan gia tri thi bo dong "myName = "Nagi"".
//C1:
// const myName = "Alex";
// console.log(myName);
//C2:
// let myName
// myName = "Nagi";
// console.log(myName);

// 3. Tạo file ex3.js, thêm vào code đáp án cho đề bài sau:
// a. Khai báo một hằng số với giá trị kiểu Number bất kỳ.
// b. In ra dòng sau ở console:
// i. Nếu hằng số lớn hơn 0: “Giá trị bạn nhập là số dương”
// ii. Nếu hằng số nhỏ hơn 0: “Giá trị bạn nhập là số âm”
// iii. Nếu hằng số = 0: “Giá trị bạn nhập là số 0”

var gt = -3;
// C1
// if(gt > 0)
//     {
//         console.log("Gia tri ban nhap la so duong")
//     }
// if (gt < 0)
// {
//     console.log("Gia tri ban nhap la so am");
// }
// if(gt == 0)
// {
//     console.log("Gia tri ban nhap la so 0");
// }

//C2:

if(gt > 0)
{
    //console.log("Gia tri ban nhap la so duong")
}
else if (gt < 0)
{
    //console.log("Gia tri ban nhap la so am");
}
if(gt == 0)
{
    //console.log("Gia tri ban nhap la so 0");
}

// 4. Các thông số sức khỏe được tính như sau:
// Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10
// Mức cân tối đa = Bằng số lẻ của chiều cao (tính bằng cm)
// Mức cân tối thiểu = Số lẻ của chiều cao (tính bằng cm) x 8 rồi chia 10
// Như vậy, nếu bạn cao 1,7m, tức 170cm thì :
// Cân cân nặng lý tưởng của bạn là: 70 x 9: 10 = 63 kg
// Cân nặng tối đa là: 70kg
// Cân nặng tối thiểu là: 70 x 8 :10 = 56 kg
// Tạo file ex4.js, thêm vào code đáp án cho đề bài sau:
// a. Khai báo chiều cao của bạn (cm)
const height = 150;
const result = height % 100;
//console.log(height);
//console.log(result);
// b. In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng một dòng.
const lt = (result * 9) / 10;
const td = result;
const tt = (result * 8) / 10;

//console.log("Can nang ly tuong:", lt + "kg, "+ "Can nang toi da:",td +"kg, "+ "Can nang toi thieu:",tt +"kg.")

// Bài tập vòng lặp
// 1. Tạo file ex5.js, thêm vào code đáp án cho đề bài sau:
// a. Lặp từ 1 tới 100
// b. Trong mỗi vòng lặp, in ra:
// i. Nếu giá trị của vòng lặp chia hết cho 2, in “Số <i> là số chẵn”
// ii. Nếu giá trị của vòng lặp không chia hết cho 2, in “Số <i> là số lẻ”

for (i= 0; i <=100; i++)
{
    if (i % 2 === 0)
    { 
        //console.log(i, "la so chan");
    }
    if (i % 2 === 1)
    {
        //console.log(i, "la so le")
    }
}

// const e = 100
// for  ( i = 0; i < e; i++);
// {
//     if (i % 2 === 0)
//     {
//         console.log("So chan:", i);
//     }
//     else
//     {
//         console.log("So le:", i);
//     }
// }
const e = 100;
for  ( i = 0; i % 2 == 1; i++);
{
    for (i = 0; i % 2 == 0; i++);
        {
            //console.log("So chan:", i);
        }
    //console.log("So le:", i);
}
// for  ( i = 0; i < 100; i++);
// {
//     switch(i)
//     {
//         case (i % 2 == 0):
//         console.log("So chan:", i)

//         case (i % 2 == 1):
//         console.log("So le:", i)

//         default://Khong trung case nao
//         console.log("Khong hop le") 
//     }  
    
// }

// 2. Tạo file ex6.js, thêm vào code đáp án cho đề bài sau:
// a. In ra giá trị từ 12 đến 30

for (i = 12; i < 31; i++)
{
    //console.log(i);
}
// 3. Tạo file ex7.js, thêm vào code đáp án cho đề bài sau:
// a. In ra các giá trị chia hết cho 3 từ 1000 đến 2000
for (i = 1000; i < 2001; i++)
{
    if(i % 3 === 0)
    {
        //console.log("Chia het cho 3:", i);
    }
}
// 4. Tạo file ex8.js, thêm vào code đáp án cho đề bài sau:
// a. In các giá trị cách nhau 4 đơn vị từ 1 đến 100.
// i. VD: 1, 5, 9, 13,...
for (i = 1; i< 101; i +=4)
{
    //console.log("Gia tri cach nhau 4 don vi:", i);
}
// 5. Tạo file ex9.js, thêm vào code đáp án cho đề bài sau:
// a. In ra các giá trị từ 25 về 12
// i. VD: 25, 24, 23, 22, 21,..., 12
for (i = 25; i > 11; i--)
{
   //console.log(i);
}

function createPerson(name) {
    let person = {};
    person.name = name;
    return person;
  }
  //let myPerson = createPerson("Greg");
  //console.log(myPerson);

  function createPerson(name) {
    this.name = name;
  }
  //let myPerson = new createPerson("Greg");
  //console.log(myPerson);
  
  function Person(name) {
    this.name = name;
  }
  // RETURNS OBJECT
  let myPerson = new Person("Greg");
  console.log(myPerson);

