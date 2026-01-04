// Print numbers from 1 to 100, skipping multiples of 3.

function multiple(){
    for(let i=1;i<=100;i++){
        if(i % 3 === 0){
            continue  
        }
        console.log(i)
    }
}

multiple()