//1.
// Kiến thức bổ sung để làm bài: toán tử chia dư (%)
// % sẽ trả về phần dư của phép tính.
// Giả sử:
// - 3%3 = 0 (vì 3 chia hết cho 3 dư 0)

var a = 3;
a %= 3;
//console.log(a);

// - 3%2 = 1 (vì 3 không chia hết cho 2, dư 1)
var a1 = 3;
a1 %= 2;
//console.log(a1);

// - 3%1 = 0 (vì 3 chia hết 1 dư 0)
var a2 = 3;
a2 %= 1;
//console.log(a2);

// - 1%2 = 1 (vì 1 không chia hết cho 2, dư 1)
var a3 = 1;
a3 %= 2;
//console.log(a3);

// - 100%80 = 20 (vì 100 không chia hết cho 80, dư 20)
var a4 = 100;
a4 %= 80;
//console.log(a4);

// Ứng dụng tìm số chẵn, lẻ:
// - Nếu là số lẻ, chia dư cho 2 = 1: x % 2 === 1
// - Nếu là số chẵn, chia dư cho 2 = 0: x % 2 === 0
let a5 = 0;
if (a5 % 2 === 1)
{
    //console.log("So le");
}
else if(a5 % 2 === 0)
{
    //console.log("So chan");
}

//2.
// Kiến thức bổ sung để làm bài: in kết hợp giá trị chuỗi và biến với console.log()
// Ở bài học, ta đã biết dùng console.log(“message”) để in ra giá trị kiểu chuỗi, hay
// console.log(<variable_name>) để in ra giá trị của biến.
// Để in ra kết hợp giá trị kiểu chuỗi và giá trị của biến, ta có hai cách như sau:
// - console.log(“Dùng dấu cộng như sau: “ + name)
// - console.log(“Hoặc dùng dấu phẩy: “, name)

let a6 = "Hom nay la thu";
let a7 = 7;
// console.log(a6 + " "+ a7)
// console.log("Hom nay la thu", a7)
// console.log("Hom nay la thu " + a7)

//3.
// Kiến thức bổ sung để làm bài: nối chuỗi với toán tử +
// Để nối chuỗi từ hai biến, ta sử dụng dấu cộng (+):
// - const str1 = “Hello”;
// - const str2 = “Playwright Viet Nam”
// - console.log(str1 + str2); // HelloPlaywright Viet Nam
var a8 = "Playwright";
var a9 = "Viet Nam";
console.log(a8 +" "+ a9);


