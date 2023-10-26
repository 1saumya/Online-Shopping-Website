var mainImg = document.getElementById("mainImg");
        var smallImg = document.getElementsByClassName("singleProImage");
    
        // smallImg[0].onclick = function(){
        //     mainImg.src = smallImg[0].src;
        // }
        // smallImg[1].onclick = function(){
        //     mainImg.src = smallImg[1].src;
        // }
        // smallImg[2].onclick = function(){
        //     mainImg.src = smallImg[2].src;
        // }
        // smallImg[3].onclick = function(){
        //     mainImg.src = smallImg[3].src;
        // }
    
        smallImg[0].addEventListener("click", ()=>{
            mainImg.src = smallImg[0].src;
        })
        smallImg[1].addEventListener("click", ()=>{
            mainImg.src = smallImg[1].src;
        })
        smallImg[2].addEventListener("click", ()=>{
            mainImg.src = smallImg[2].src;
        })
        smallImg[3].addEventListener("click", ()=>{
            mainImg.src = smallImg[3].src;
        })