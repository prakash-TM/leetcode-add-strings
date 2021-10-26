// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"

// Input: num1 = "9333852702227987" , num2 = "85731737104263"
// Output: "9419584439332250"


//Solution 1:

// var num1 = "456";
// var num2 = "77";

// const a = Number(num1); // or parseInt(num1)
// const b = Number(num2);
// let add = a + b;
// out = "0" + add;
// var sum = "";
// for (let i = 1; i < out.length; i++) {
//     sum += out[i] + "";
// }
// console.log(sum.trim());






//Solution 2:


var num1 = "98";
var num2 = "9";
Fstr = "";

var a = [];
var carry = 0;
const Lnum1 = num1.length
const Lnum2 = num2.length


if (Lnum1 > Lnum2) {

    Flen = Lnum1 - Lnum2;

    for (j = 0; j < Flen; j++) {
        Fstr += "0"
    }
    Fstr += num2;


    for (let i = Lnum1 - 1; i >= 0; i--) {
        let x = parseInt(num1[i]);
        let y = parseInt(Fstr[i]);

        let sum = x + y + carry;
        if (i === 0) {
            if (sum > 10) {

                a.push(sum - 10);
                a.push(1);
            } else if (sum === 10) {

                a.push(0);
                a.push(1);
            } else {
                a.push(sum);
                carry = 0;
            }

        } else {

            if (sum > 10) {
                a.push(sum - 10);
                carry = 1;
            } else if (sum === 10) {
                a.push(0)
                carry = 1;
            } else {
                a.push(sum);
                carry = 0;
            }
        }
    }

} else if (Lnum1 === Lnum2) {

    for (let i = Lnum1 - 1; i >= 0; i--) {

        let x = parseInt(num1[i]);
        let y = parseInt(num2[i]);
        let sum = x + y + carry;

        if (i === 0) {
            if (sum > 10) {
                a.push(sum - 10);
                a.push(1);


            } else if (sum === 10) {
                a.push(0)
                a.push(1);
            } else {
                a.push(sum);
                carry = 0;
            }

        } else {

            if (sum > 10) {
                a.push(sum - 10);
                carry = 1;

            } else if (sum === 10) {
                a.push(0)
                carry = 1;
            } else {
                a.push(sum);
                carry = 0;
            }
        }
    }

} else {
    if (Lnum1 < Lnum2) {

        Flen = Lnum2 - Lnum1;
        for (j = 0; j < Flen; j++) {
            Fstr += "0"
        }
        Fstr += num1;


        for (let i = Lnum2 - 1; i >= 0; i--) {
            let x = parseInt(Fstr[i]);
            let y = parseInt(num2[i]);

            let sum = x + y + carry;

            if (i === 0) {
                if (sum > 10) {
                    a.push(sum - 10);
                    a.push(1);


                } else if (sum === 10) {
                    a.push(0)
                    a.push(1);
                } else {
                    a.push(sum);
                    carry = 0;
                }

            } else {

                if (sum > 10) {
                    a.push(sum - 10);
                    carry = 1;

                } else if (sum === 10) {
                    a.push(0)
                    carry = 1;
                } else {
                    a.push(sum);
                    carry = 0;
                }
            }
        }

    }
}

var resLen = a.length;
var res = "";
for (let i = resLen - 1; i >= 0; i--) {
    res += a[i] + "";
}

console.log(res.trim())