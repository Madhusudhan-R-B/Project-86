var canvas = new fabric.Canvas("myCanvas");
var block_image_object = "";
var x = document.getElementById("myAudio");

function add_image(){
    fabric.Image.fromURL('81CKIHKsuML._AC_SL1500_.jpg', function(IMG){
        block_image_object = IMG;
        
        block_image_object.scaleToWidth(800);
        block_image_object.scaleToHeight(600);
        block_image_object.set({
            left: 0,
            top: 0
        });
        canvas.add(block_image_object);
    });
}

function play_music(){
    x.play();
}