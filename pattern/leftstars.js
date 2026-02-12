// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *


function pattern(n) {
    for (let i = 1; i <= 2 * n - 1; i++) {
        let row = "";
        let stars = i <= n ? i : 2 * n - i;
        for (let j = 1; j <= stars; j++) {
            row += "* ";
        }
        console.log(row);
    }
}
pattern(5);