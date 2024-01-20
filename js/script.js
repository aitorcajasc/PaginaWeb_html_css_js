document.addEventListener('DOMContentLoaded',function(){
    let enlaces=document.getElementsByClassName("enlaceCabecera");

    for(let i=0; i<enlaces.length; i++){
        enlaces[i].addEventListener("mouseover", function(){
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.style.color="#"+randomColor;
        });

        enlaces[i].addEventListener("mouseout", function(){
            this.style.color="#333";
        });
    }

    let botones=document.querySelectorAll(".btn");

    for(let i=0; i<botones.length; i++){
        botones[i].addEventListener("mouseover", function(){
            this.style.background="red";
        });

        botones[i].addEventListener("mouseout", function(){
            this.style.background="var(--red)";
        });
    }

    let precios=document.querySelectorAll(".price");

    for(let i=0; i<precios.length; i++){
        precios[i].addEventListener("mouseover", function(){
            this.style.transition="font-size 0.3s ease";
            this.style.transform="scale(1.2)";
        });

        precios[i].addEventListener("mouseout", function(){
            this.style.transition="font-size 0.3s ease";
            this.style.transform="scale(1)";
        });
    }

    let formularios=document.querySelectorAll(".box");
    let textArea=document.getElementById("textArea");

    for(let i=0; i<formularios.length; i++){
        formularios[i].addEventListener("click", function(){
            this.style.border="solid red";
        });

        formularios[i].addEventListener("input", function(){
            this.style.border="none";
        });
    }

    textArea.addEventListener("input", function(){
        if(textArea.value.includes("examendam")){
            this.style.border="solid green";
        }
    });
});