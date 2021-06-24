

// changing individual properties with code and using setInterval
var rotationSpeed = 0.02;
var moveSpeed = 0.02;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	// myOtherBox.object3D.rotation.x -= rotationSpeed;
	myOtherBox.object3D.rotation.y -= rotationSpeed;
	myOtherBox.object3D.rotation.z -= rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
}

function move() {
    myOtherBox.object3D.position.y += moveSpeed;
    myOtherBox.object3D.position.x += moveSpeed;
}

setInterval(spin, 16); //equivalent to 60 fps
setInterval(move, 16); //equivalent to 60 fps