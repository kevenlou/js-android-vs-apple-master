
document.getElementById('android-btn').addEventListener("click", android);
document.getElementById('apple-btn').addEventListener("click", apple);

function android(){
    document.getElementById('main-img').src = "images/Android-Logo.jpg";
    document.getElementById('link').innerHTML = "Android Home";
    document.getElementById('link').style.backgroundColor = "#a4c93b";
    document.getElementById('link').href = 'https://www.android.com/';
    document.body.style.backgroundColor = "#a4c93b";
}

function apple(){
    document.getElementById('main-img').src = "images/Apple-Logo.jpg";
    document.getElementById('link').innerHTML = "Apple Home";
    document.getElementById('link').style.backgroundColor = "#b6bcca";
    document.getElementById('link').href = 'https://www.apple.com/';
    document.body.style.backgroundColor = "#b6bcca";
}