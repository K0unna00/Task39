let image = document.getElementById("image");
let input = document.getElementById("input");
let newImage = document.getElementById("newImage");
let closeBtn = document.getElementById("close");
image.addEventListener("click" , function(){
    input.click();
})
input.addEventListener("change" , function(){
    [...this.files].forEach(e => {
        let reader= new FileReader();
        reader.onload=function(){
            newImage.style.backgroundImage=`url(${reader.result})`;
        }
        reader.readAsDataURL(e);
        closeBtn.style.display='block';
    });
})
closeBtn.addEventListener("click", function(){
    newImage.style.backgroundImage="none"
    closeBtn.style.display='none';
})