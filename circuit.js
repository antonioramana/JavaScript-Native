

/*---------------------------------recupération de r1,r2,r3 et u------------------------------------------*/


function resolution(){
           
    var r1=parseInt(document.formulaire.r1.value);
    var r2=parseInt(document.formulaire.r2.value);
    var r3=parseInt(document.formulaire.r3.value);
    var u=parseInt(document.formulaire.u.value);

/*---------------------------------équations de circuit appliquée sur cramer-----------------------------------*/

var x=[1,r1,r1];

var y=[-1,r2,0];

var z=[-1,0,r3];

 var m=[0,u,u];

//calcul des determinants
var detprincip,det1,det2,det3;
det1=x[0]*(y[1]*z[2]-y[2]*z[1]);
det2=x[1]*(y[0]*z[2]-y[2]*z[0]);
det3=x[2]*(y[0]*z[1]-y[1]*z[0]);

detprincip=det1-det2+parseInt(det3);

//resolution des inconnues

if(detprincip===0 ){
   alert("L'equation possede une infinité de solution");

   document.formulaire.i1.value="infini";
   document.formulaire.i2.value="infini";
   document.formulaire.i3.value="infini";
   document.getElementById('resp').style="display: inline;";
}else{
//determination de l'inconnue x ou i1
   var valX;
   det1=m[0]*(y[1]*z[2]-y[2]*z[1]);
   det2=m[1]*(y[0]*z[2]-y[2]*z[0]);
   det3=m[2]*(y[0]*z[1]-y[1]*z[0]);
   
   valX=(det1-det2+parseInt(det3))/detprincip;

//determination de l'inconnue y ou i2
   var valY;
   det1=x[0]*(m[1]*z[2]-m[2]*z[1]);
   det2=x[1]*(m[0]*z[2]-m[2]*z[0]);
   det3=x[2]*(m[0]*z[1]-m[1]*z[0]);

   valY=(det1-det2+parseInt(det3))/detprincip;

//determination de l'inconnue z ou i3
   var valZ;
   det1=x[0]*(y[1]*m[2]-y[2]*m[1]);
   det2=x[1]*(y[0]*m[2]-y[2]*m[0]);
   det3=x[2]*(y[0]*m[1]-y[1]*m[0]);

   valZ=(det1-det2+parseInt(det3))/detprincip;

    document.formulaire.i1.value=valX;
    document.formulaire.i2.value=valY;
    document.formulaire.i3.value=valZ;
    document.getElementById('resp').style="display: inline;";
}
}

