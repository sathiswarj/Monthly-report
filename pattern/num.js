function pattern(n){
    let start = 0;
    for(let i=0;i<n;i++){
        if(i % 2 === 0) start = 1;
        else start = 0;
        let row = '';
        for(let j=0;j<=i;j++){
            row += start + ' ';
            start = 1 - start;
        }
        console.log(row)
    }
}
pattern(5)