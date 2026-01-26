function pattern(n){
    for(let i=1;i<=n;i++){
        let row = '';
        for(let j=1;j<=i;j++){
            row += j + ' ';
        }
        for(let k=1;k<=(n-i)*2;k++){
            row += '  ';
        }
        for(let l=i;l>=1;l--){
            row += l + ' ';
        }
        console.log(row)
    }
}
pattern(5)