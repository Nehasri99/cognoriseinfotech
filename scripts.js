let button=document.getElementById('btn1');
button.addEventListener('click',()=>{
    const height=parseInt(document.getElementById('height').value);
    const weight=parseInt(document.getElementById('weight').value);
    const result=document.getElementById('output');
    let h=false,w=false;
    if(height===''|| isNaN(height) || (height<=0)){
        document.getElementById('height_err').innerHTML='please provide valid height';
    }
    else{
        document.getElementById('height_err').innerHTML='';
        h=true;
    }
    if(weight===''|| isNaN(weight) || (weight<=0)){
        document.getElementById('weight_err').innerHTML='please provide valid weight';
    }
    else{
        document.getElementById('weight_err').innerHTML='';
        w=true;
    }
    if(h && w){
        const res=(weight/((height*height)/10000)).toFixed(2);
        if(res<18.6){
            result.innerHTML='Under weight: '+res;
        }
        else if(res>=18.6 && res<24.9){
            result.innerHTML='Normal: '+res;
        }
        else{
            result.innerHTML='Over weight: '+res;
        }
    }
    else{
        alert('The form has errors');
        result.innerHTML='';
    }
});