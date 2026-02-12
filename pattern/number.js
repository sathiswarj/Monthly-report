// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15 



// function pattern(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = ""
//         for (let j = 1; j <= i; j++) {
//             row += i
//         }
//         console.log(row)
//     }
// }

// pattern(5)

function pattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = ""
        for (let j = 1; j <= i; j++) {
            row += j + " "
        }
        console.log(row)
    }
}

pattern(5)

