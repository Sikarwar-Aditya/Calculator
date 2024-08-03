let string= "";

let buttons= document.querySelectorAll('.btn');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        
        if(e.target.innerHTML== 'AC'){
            string= "0";
            document.querySelector('input').value= string;
        }
        else if(e.target.innerHTML== '%'){
            string= string + "/100"
            string= eval(string);
            document.querySelector('input').value= string;
             
        }
        else if(e.target.innerHTML== '+/-'){
            string= string + "*-1"
            string= eval(string);
            document.querySelector('input').value= string;
             
        }
        else if(e.target.innerHTML == '='){
            string= eval(string);
            document.querySelector('input').value= string;
        }
        else{
            if(string== "0"){ 
                string="";
            }
            string= string+ e.target.innerHTML;
            document.querySelector('input').value= string;
        }


    })
}) 