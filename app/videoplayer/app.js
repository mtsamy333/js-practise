let playbtn = document.getElementById('play');
let pausebtn = document.getElementById('pause');
let f10btn = document.getElementById('f10');
let b10btn = document.getElementById('b10');
let volumebtn = document.getElementById('volume');
let mutebtn = document.getElementById('mute');
let unmutebtn = document.getElementById('unmute');
let volumeInputEle = document.getElementById('volume-slider');
let downloadbtn = document.getElementById('download');
let swapbtn = document.getElementById('swap');
let fullscreenbtn = document.getElementById('full-screen');
let video = document.getElementById('main-video');
 
function play(){
console.log('play the video');
video.play();
} 
function pause(){
 console.log('pause the video');
video.pause();
}
function f10(){
    // console.log('forward 10secs');
    let cTime = video.currentTime;

    cTime = cTime + 2;

    video.currentTime = cTime;
}
function b10(){
    // console.log('backward 10secs');
    let cTime = video.currentTime;

    cTime = cTime - 2;

    video.currentTime = cTime;
}
function volumeUpdate(){
    let volumeInput = volumeInputEle.value;
    console.log(volumeInput);

    volumeInput = volumeInput/100;
    console.log(volumeInput);
    video.volume = volumeInput;
    // console.log('volumeup', videoVolume);
}
function mute(){
    console.log('mute');
    video.muted = true;
}
function unmute(){
    console.log('unmute');
    video.muted = false;
}
function download(){
    console.log('download');
}
function swap(){
    console.log('swap the video');
    let targetPath = this.value;

    cTime = video.currentTime;

    video.setAttribute('src', targetPath);

    video.currentTime = cTime;

    play();
}
function fullscreen(){
    console.log('fullscreen');
}

playbtn.addEventListener('click', play);
pausebtn.addEventListener('click', pause);
f10btn.addEventListener('click', f10);
b10btn.addEventListener('click', b10);
volumebtn.addEventListener('click', volumeUpdate);
mutebtn.addEventListener('click', mute);
unmutebtn.addEventListener('click', unmute);
// volumedownbtn.addEventListener('click', volumedown);
downloadbtn.addEventListener('click', download);
swapbtn.addEventListener('click', swap);
fullscreenbtn.addEventListener('click', fullscreen);
