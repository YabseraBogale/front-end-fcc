function three(){
	let re=/[^AEIOU]/g
	let word,ascword;
	ascword=[];
	let cvc=[];
	let w=""
	for(let i=0;i<10000;i++){
		
	
		
		cvc.length=Math.round(Math.random()*(9-1)+1)
	    for(let j=0;j<cvc.length;j++){
	        word=Math.round(Math.random()*(90-65)+65);
	        let words=String.fromCharCode(word);
	        w+=words;
		}
		if(w.length!==1 && w!=="I"){
		    ascword.push(w);
		}
	    else if(w.length==1 && w=="I"){
	        ascword.push(w);
	    }
	    w="";
	}
	return ascword;
}
console.log(three())

