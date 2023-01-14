console.log("Welcome to Musiana");

let songIndex =0;
let audioElement = new Audio('pasoori.mp3');
let masterPlay = document.getElementById('play');
//  console.log(masterPlay);
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Chaand Baliya" , filePath:"CB.mp3"      , coverPath: "cover2.jpg"},
    {songName: "No-Lie"        , filePath:"No-Lie.mp3"  , coverPath: "nolie.jpg"},
    {songName: "Enna Sona" , filePath:"Enna-Sona.mp3"   , coverPath: "es.jpg"},
    {songName: "8 Parche" , filePath:"8 Parche.mp3"     , coverPath: "8p.jpg"},
    {songName: "Rockabye" , filePath:"Rockabye-.mp3"    , coverPath: "rockkabye.jpg"},
    {songName: "Go-Down-Deh" , filePath:"Go-Down-Deh.mp3", coverPath: "godown.jpg"},
    {songName: "Mi-Gente" , filePath:"Mi-Gente.mp3"     , coverPath: "mg.jpg"},
    {songName: "Hawayein" , filePath:"Hawayein.mp3", coverPath: "hh.jpg"},
    {songName: "Khairiyat" , filePath:"Khairiyat.mp3", coverPath: "ky.jpg"},
    {songName: "Pasoori" , filePath:"pasoori.mp3", coverPath: "cover1.png"},
   
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
     console.log('timeupdate');
//     // update seekbar
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
      console.log(progress);
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
         index = parseInt(e.target.id);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         var filePath = songs[index]['filePath'];
         audioElement.src = `${filePath}`;
         var songName = songs[index] ['songName'];
         songItem.src = `${songName}`;
         audioElement.currentTime = 0;
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
    })

    // Array.from(document.getElementsByClassName('songName')).forEach((element)=>{
    //     element.addEventListener('click' ,(e)=>{
    //         console.log(e.target);
    //         index = parseInt(e.target.id);
    //         e.target.cl
    //     })

    // }


})