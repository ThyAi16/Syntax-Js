// 0 -> 5: Yeu
// 5 -> 7: TB
// 7 -> 8: Kha
// 8 -> 10: gioi
 const score = 0.5;
 if (score > 0 && score <= 5)
 { 
    console.log("Hoc sinh yeu")
 }
 else if (score > 5 && score <= 7)
 {
    console.log("Hoc sinh trung binh")
 }
 else if ( score > 7 && score <= 8)
 {

    console.log("Hoc sinh kha");
 }
 else
 {
    console.log("Hoc sinh gioi")
 }