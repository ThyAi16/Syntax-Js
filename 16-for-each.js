// Vong lap for-Each: dung de lap cac phan tu trong mang, khong can lay thu tu cua cac phan tu
//Cu phap: <bien la ten mang>.forEach(callbackfn)
//numberArr: ten bien
//callback function: ham xu ly vong lap for. VD: item => {console.log(...)}
let numberArr = [1, 3, 5, 7, 9, -100];

numberArr.forEach(number => 
{
    console.log(number * 2)
}
)
// Co the bo dau ngoac nhon neu chi co 1 dong duy nhat trong callbackfn
numberArr.forEach(number => console.log(number));


