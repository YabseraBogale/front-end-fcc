let word,ascword;
ascword="";
let spa;
for(let i=0;i<10000;i++){
    word=Math.round(Math.random(65,92)*100);
    spa=Math.round(Math.random(1,10)*10);
    if(word>=65 && word <91){
            ascword+=String.fromCharCode(word);
    }
    else{
       
        ascword+=" ";
    }
    
   
}
function three(words){
	words=ascword.split(' ')
	
	
	}

console.log(typeof(words));
