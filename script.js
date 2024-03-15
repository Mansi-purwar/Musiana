console.log("Welcome to Musiana");

let songIndex =0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
//  console.log(masterPlay);
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Chaand Baliya" , filePath:"1.mp3"      , coverPath: "cover2.jpg"},
    {songName: "No-Lie"        , filePath:"2.mp3"  , coverPath: "nolie.jpg"},
    {songName: "Enna Sona" , filePath:"3.mp3"   , coverPath: "es.jpg"},
    {songName: "8 Parche" , filePath:"4.mp3"     , coverPath: "parche 8.jpg"},
    {songName: "Rockabye" , filePath:"5.mp3"    , coverPath: "rockkabye.jpg"},
    {songName: "Go-Down-Deh" , filePath:"6.mp3", coverPath: "godown.jpg"},
    {songName: "Mi-Gente" , filePath:"7.mp3"     , coverPath: "mg.jpg"},
    {songName: "Hawayein" , filePath:"8.mp3", coverPath: "hh.jpg"},
    {songName: "Khairiyat" , filePath:"9.mp3", coverPath: "ky.jpg"},
    {songName: "Pasoori" , filePath:"10.mp3", coverPath: "cover1.png"},
   
]

songItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// audioElement.play();  

// handle play/pause

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1 ;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// //listen to events
 audioElement.addEventListener('timeupdate', ()=>{
    //  console.log('timeupdate');
//     // update seekbar
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    //   console.log(progress);
      myProgressBar.value = progress;
 })

myProgressBar.addEventListener('change',()=>{
    // simple logic is used current time/total time*100 = percentage manipulate formula
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100 ;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    }) 

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
         makeAllPlays();
         songIndex = parseInt(e.target.id);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
        //  var filePath = songs[songIndex]['filePath'];
        //  audioElement.src = `${filePath}`;
        //  var songName = songs[songIndex] ['songName'];
        //  songItem.src = `${songName}`;
        audioElement.src =`${songIndex+1}.mp3`
        masterSongName.innerHTML = songs[songIndex].songName;
         audioElement.currentTime = 0;
         audioElement.play();
         gif.style.opacity=1;
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
    })

document.getElementById('next').addEventListener('click', ()=>{
        if(songIndex>=9){
            songIndex=0
        }
        else{
            songIndex +=1;
        }
        audioElement.src =`${songIndex+1}.mp3`;
        masterSongName.innerHTML = songs[songIndex].songName;
        var currentPromise=false;    //Keeps track of active Promise

function playAudio(audioElement){
    if(!currentPromise){    //normal behavior
        audioElement.pause();
        audioElement.currentTime = 0;
        currentPromise = audioElement.play();    //Calls play. Will store a Promise object in newer versions of chrome;
                                      //stores undefined in other browsers
        if(currentPromise){    //Promise exists
            currentPromise.then(function(){ //handle Promise completion
                promiseComplete(audioElement);
            });
        }
    }else{    //Wait for promise to complete
        //Store additional information to be called
        currentPromise.calledAgain = true;
    }
}

function promiseComplete(n){
    var callAgain = currentPromise.calledAgain;    //get stored information
    currentPromise = false;    //reset currentPromise variable
    if(callAgain){
        playAudio(n);
    }
}
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})     
    
    
  
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }
    audioElement.src =`${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


})