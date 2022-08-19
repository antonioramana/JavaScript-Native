
/*--------------------------------------------------declaration des images--------------------------------------*/

var i=1;
var total=12;

/*--------------------------------------------defilement des images  avec les 2 boutons--------------------------------------*/

function slider(x){
   var image= document.getElementById('img');
   i=i+x;
   image.src="images/covid"+i+".jpg";
   if(i>=total){
       i=1;  
        }
    if(i<1){
        i=total;
    }
}

/*--------------------------------------------defilement des images automatique chaque 3s--------------------------------------*/


function sliderAuto(){
   var image= document.getElementById('img');
   i++;
   image.src="images/covid"+i+".jpg";
   if(i>=total){
       i=1;  
        }
    if(i<1){
        i=total;
    }
}
window.setInterval("sliderAuto()",3000);
