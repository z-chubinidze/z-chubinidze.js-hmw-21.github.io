//BMI Calculator


function calculate(){
    var weight = document.getElementById("weight").value;
    var weighterror = document.getElementById("weightError");
    var height = document.getElementById("height").value;
    var heighterror = document.getElementById("heightError");
    var  mesage = document.getElementById("mesage");

    
    
    const BMI = (weight / (height * height)*10000).toFixed(2);

    document.getElementById("result").innerHTML = BMI;

    if(weight === "" || weight == 0){
        weighterror.innerHTML = "გთხოვთ მიუთითეთ თქვენი წონა";
        weighterror.style.color = "red";
        document.getElementById("result").innerHTML = "";
        document.getElementById("weight").style.border = " 2px solid red"
    }else{
        weighterror.innerHTML = "";
        document.getElementById("weight").style.border = " none"
    };
    if(height === "" || height == 0){
        heighterror.innerHTML = "გთხოვთ მიუთითეთ თქვენი სიმაღლე";
        heighterror.style.color = "red";
        document.getElementById("result").innerHTML = "";
        document.getElementById("height").style.border = " 2px solid red"
    }else{
        heighterror.innerHTML = "";
        document.getElementById("height").style.border = " none"
    }

    if(BMI <= 18.4){  
        mesage.innerHTML = "You are underweight.";
        mesage.classList.add("mesage"); 
    } else if(BMI <= 24.9){
        mesage.innerHTML = "You are healthy.";
         mesage.classList.add("mesage");
    }else if(BMI <= 29.9){
        mesage.innerHTML = "You are over weight.";
         mesage.classList.add("mesage");
    }else if(BMI <= 34.9){
        mesage.innerHTML = "You are severely over weight.";
         mesage.classList.add("mesage");
    }else if(BMI <= 39.9){
        mesage.innerHTML = "You are obese.";
         mesage.classList.add("mesage");
    }else if(BMI >= 39.9){
        mesage.innerHTML = "You are severely obese.";
         mesage.classList.add("mesage");
    }else{
        mesage.innerHTML = "";
    };
    
};
