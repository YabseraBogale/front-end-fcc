function three(){
	let re=/[^AEIOU]/g
	let word,ascword;
	ascword=[];
	let cvc="";
	for(let i=0;i<10000;i++){
		
		word=Math.round(Math.random()*(90-65)+65);
		let words=String.fromCharCode(word);
		cvc+=words;
		if(cvc.length===3){
			if(cvc[0].match(re) || cvc[2].match(re)){
                ascword.push(cvc);
            }
			cvc="";
		}
	}
	return ascword;
}
console.log(three())
