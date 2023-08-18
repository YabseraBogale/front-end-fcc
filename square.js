

window.addEventListener("keyup",logKey)

function logKey(pressed){
		console.log(pressed.code);

}


function move(pressed){
	let p=document.getElementById("p");
	switch(pressed.code){
		case "ArrowRight":
			p.style.marginRight="10px"
		case "ArrowLeft":
			p.style.marginLeft=""
		case "ArrowUp":
			break
		case "ArrowDown":
			break
	}
}


