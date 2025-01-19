const canvas =document.getElementById("canvas1");
const ctx= canvas.getContext("2D");
console.log(ctx);

const CANVAs_WIDTH=canvas.width=600;
const CANVAs_HEIGHT=canvas.heght=600;
const playerImage= new Image();
playerImage.src="shadow_dog.png";
function animate {
    ctx.clearRect(0,0,CANVAs_WIDTH,CANVAs_HEIGHT);
    ctx.fillRect(50,50,100,100);
    requestAnimationFrame(animate);
};
animate();