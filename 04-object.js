// Để khai báo object ta dùng cú pháp khai báo với let hoặc const
const student = {
    'id': 1,
    'name': "Alex",
    'age': "18"
};
// Khong dùng Object, khai bao cac bien rieng biet để lưu trữ dl cho các thông tin
const sv1 = 1;
const sv1name = "Alex";
const sv1age = "18";

const sv2 = 2;
const sv2name = "Linda";
const sv2age = "19";

console.log(`-- Thông tin sv 1: ${sv1}, ${sv1name}, ${sv1age}`);
console.log(`-- Thông tin sv 1: ${sv2}, ${sv2name}, ${sv2age}`);

// Dùng object

const sv01 ={
    'id': 1,
    'name': "Alex",
    'age': "18"
}

const sv02 ={
    'id': 2,
    'name': "Teddy",
    'age': "18"
}

const sv03 ={
    'id': 3,
    'name': "Petter",
    'age': "18"
}
//C1
console.log(`-- Thông tin sv 1: ${sv01.id}, ${sv01.name}, ${sv01.age}`);
console.log(`-- Thông tin sv 2: ${sv02.id}, ${sv02.name}, ${sv02.age}`);
console.log(`-- Thông tin sv 1: ${sv03.id}, ${sv03.name}, ${sv03.age}`);
//C2
console.log(`-- Thông tin sv 1: ${sv01["id"]}, ${sv01["name"]}, ${sv01["age"]}`);

// Object lồng nhau: 1 object có thể chứa 1 object khác
const student1 = {
    id: 1,
    name: "Thy",
    address: {
        province: "HCM",
        isCapital: true,
        country: "Viet Nam"
    }
}

console.log(student1.address.province);
console.log(student1["address"]["isCapital"]);
console.log(student1["address"]);
// Thêm thuộc tính vào object
let student02 ={
    id: 1,
    name: "Pam"
};
student02.age = "20";
student02["address"] = "HCM";

// Xóa thuộc tính
let student03 = {
    name: 'Pamiuoi',
    age: 4
};
delete student03.age;
console.log(student03);

// Thay đổi giá trị của hằng số
const student04 ={
id: 1,
name: "Linda Pham"
};
student04.id = 11;
student04.name = "Pit";