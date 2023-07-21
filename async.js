async function numbers(){
    return Math.round(Math.random()*10);
}


async function TestAsync(){
    
    for(let i=0;i<10;i++)
    {
        let number= await numbers();
        if(number==3){
            console.log(number);
        }
    }
}


TestAsync()