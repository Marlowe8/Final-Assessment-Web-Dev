var typed = new Typed(".auto-type", {
    strings: ["You", "Health", "Life"],
    typeSpeed: 500,
    backSpeed: 150,
    loop: true
})

function imageFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}