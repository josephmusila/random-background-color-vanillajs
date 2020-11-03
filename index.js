window.addEventListener("load",function(){
    function changecolor(){
        const color=["red","black","purple","blue","green","yellow","pink"];
        const bgcolor=color[Math.floor(Math.random() *color.length)];
        console.log(bgcolor);
        document.getElementById("container").style.background=bgcolor;
    }document.getElementById("change").addEventListener("click",changecolor);
},false); 
