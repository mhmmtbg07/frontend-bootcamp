/* ------->   logical operators
    && : and
    || : or
    ! : not
*/

// && = all data must TRUE
let age = 20;
let balance = 3000;
let health = false;
let exam = 20;
//           True           True            False = False (Must all true)
console.log(age>18 && balance>2500 && health==true);
//            True         True            True = Treu ( all true)
console.log(age>18 && balance>2500 && exam >= 15);
console.clear();

// || = 1 True enough!
//            False       False           True   = Treu (1 true = true)
console.log(age>30 || balance>5000 || exam==20);
//           True  false = True
console.log(5>2 || 3<2);
console.clear();

// ! = Reverse
//        Reverse  True         True       True = False "becouse reverse"
console.log(  !(age>18 && balance>2500 && exam>15));