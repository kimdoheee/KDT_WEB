function light(sw){
    var pic;    // var : 변수 선언할 때 사용
    if(sw==0) {
        pic = "https://www.w3schools.com/html/pic_bulboff.gif"
    } else {
        pic = "https://www.w3schools.com/html/pic_bulbon.gif"
    }
    document.getElementById('myImage').src = pic;
}