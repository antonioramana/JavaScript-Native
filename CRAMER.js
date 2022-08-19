function resolution(){
    var x=[
        document.forms.equation[0].value,
        document.forms.equation[4].value,
        document.forms.equation[8].value
    ];

    var y=[
        document.forms.equation[1].value,
        document.forms.equation[5].value,
        document.forms.equation[9].value
    ];

    var z=[
        document.forms.equation[2].value,
        document.forms.equation[6].value,
        document.forms.equation[10].value
    ];

    var m=[
        document.forms.equation[3].value,
        document.forms.equation[7].value,
        document.forms.equation[11].value
    ];

    //calcul des determinants
    var detprincip,det1,det2,det3;
    det1=x[0]*(y[1]*z[2]-y[2]*z[1]);
    det2=x[1]*(y[0]*z[2]-y[2]*z[0]);
    det3=x[2]*(y[0]*z[1]-y[1]*z[0]);
    
    detprincip=det1-det2+parseInt(det3);
    
    //resolution des inconnues
    
    if(detprincip===0){
        alert("L'equation possede une infinité de solution");
        document.forms.reponse[0].value="infini";
        document.forms.reponse[1].value="infini";
        document.forms.reponse[2].value="infini";
    }else{
    //determination de l'inconnue x
        var valX;
        det1=m[0]*(y[1]*z[2]-y[2]*z[1]);
        det2=m[1]*(y[0]*z[2]-y[2]*z[0]);
        det3=m[2]*(y[0]*z[1]-y[1]*z[0]);
        
        valX=(det1-det2+parseInt(det3))/detprincip;
    
    //determination de l'inconnue y
        var valY;
        det1=x[0]*(m[1]*z[2]-m[2]*z[1]);
        det2=x[1]*(m[0]*z[2]-m[2]*z[0]);
        det3=x[2]*(m[0]*z[1]-m[1]*z[0]);

        valY=(det1-det2+parseInt(det3))/detprincip;
    
    //determination de l'inconnue z
        var valZ;
        det1=x[0]*(y[1]*m[2]-y[2]*m[1]);
        det2=x[1]*(y[0]*m[2]-y[2]*m[0]);
        det3=x[2]*(y[0]*m[1]-y[1]*m[0]);

        valZ=(det1-det2+parseInt(det3))/detprincip;

        document.forms.reponse[0].value=valX;
        document.forms.reponse[1].value=valY;
        document.forms.reponse[2].value=valZ;
    }
}

function reinitialise(){
    document.forms.reponse[0].value="";
    document.forms.reponse[1].value="";
    document.forms.reponse[2].value="";
}

