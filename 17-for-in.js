//for-in: lap trong object, lay thuoc tinh

const student = 
{
    id: 1,
    name: "Linda",
    age: 22
};
for (let pro in student)
{
    console.log(pro);//truy xuat thuoc tinh
    console.log(student[pro]);// truy xuat gia tri
}

