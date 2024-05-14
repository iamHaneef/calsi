document.addEventListener("DOMContentLoaded",function(){
    const inputBox =document.getElementById("inputBox");
    const buttons=document.querySelectorAll("button");

    let expression="";

    buttons.forEach((button)=>{
        button.addEventListener("click",function(d){
            handleButtonclick(d.target.innerHTML);
        });
    
});
function handleButtonclick(value){
    switch(value)
    {
        case "=":
            try{
                    expression=eval(expression);
                    inputBox.value=expression;

            }
            catch(error){
                inputBox.value=error;
                expression="";

            }
            break;

        case "AC":
            expression="";
            inputBox.value=expression;
            break;

        case "DEL":
            expression=expression.slice(0,-1);
            inputBox.value=expression;
            break;

        
            


        default :
            expression += value;
            inputBox.value=expression;
            break;
    }
}

});