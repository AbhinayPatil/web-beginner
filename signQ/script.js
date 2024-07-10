let penColor = document.querySelector("#pen-color");
let backgroundColor = document.querySelector("#canvas-color");
let penSize = document.querySelector("#pen-size");
let canvas = document.querySelector("#canvas");
let clearBtn = document.querySelector("#clear");
let saveBtn = document.querySelector("#save");
let uploadBtn = document.querySelector("#upload");
let ctx = canvas.getContext('2d');

let defaultBgColor = "rgb(0, 31, 61)";
ctx.strokeStyle = "#ffffff";
ctx.lineWidth = 1;
let isDrawing = false;
let drawingData = [];

penColor.addEventListener("change", (e)=>{
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
});
backgroundColor.addEventListener("change", (e)=>{
    canvas.style.backgroundColor = e.target.value;
});

canvas.addEventListener("mousedown",(e)=>{
    canvas.style.cursor = "crosshair";
    isDrawing = true;
    lastX = ctx.offsetX;
    lastY = ctx.offsetY;
    
});

canvas.addEventListener("mousemove",(e)=>{
    if(isDrawing){
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

        lastX = e.offsetX;
        lastY = e.offsetY;
    }
});
canvas.addEventListener("mouseup",(e)=>{
    isDrawing = false;
    canvas.style.cursor = "default";
});

penSize.addEventListener("change",(e)=>{
    ctx.lineWidth = e.target.value;
});

clearBtn.addEventListener("click",(e)=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
});

saveBtn.addEventListener("click",(e)=>{
    // this for local storage, not for download
    localStorage.setItem("drawingData", canvas.toDataURL());

    const dataURL = canvas.toDataURL("image/png"); // Change to "image/jpeg" for JPEG format
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "canvas-image.png"; // Change the filename as desired
    link.click();
});

uploadBtn.addEventListener("click",(e)=>{
    const savedData = localStorage.getItem("drawingData");
    if (savedData){
        const img = new Image();
        img.src = savedData;
        ctx.draw(img,0,0);
    }
});


