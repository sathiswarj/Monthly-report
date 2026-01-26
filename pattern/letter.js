// function pattern(n){
//     let char  = 65;
//     for(let i=0;i<n;i++){
//         let row = "";
//         for(let j=0;j<=i;j++){
//             row += String.fromCharCode(char) + " ";
//         }
//         console.log(row)
//         char++;
//     }
// }

// pattern(5)
function pattern(n) {
    let char = 65;
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row += String.fromCharCode(char+j) + " ";
         }
        console.log(row)
    }
}

pattern(5)