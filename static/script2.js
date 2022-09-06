let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');
let lyr_cont = document.querySelector('.content');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fas-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : "/static/images/Jacobinte-Swargarajyam.jpg",
        name : 'Thiruvaavaniraavu',
        artist : 'Sithara, and Unni Menon',
        music : '/static/music/Thiruvaavaniraavu - Meera Scharma, Sithara, and Unni Menon.mp3',
        lyr : "തിരുവാവണി രാവു് മനസ്സാകെ നിലാവു്\nമലയാളച്ചുണ്ടിൽ മലരോണപ്പാട്ടു്\nതിരുവാവണി രാവു് മനസ്സാകെ നിലാവു്\nമലയാളച്ചുണ്ടിൽ മലരോണപ്പാട്ടു്\n\nമാവിൻ കൊമ്പേറുന്നൊരു പൂവാലിക്കുയിലേ\nമാവേലിത്തമ്പ്രാന്റെ വരവായാൽ ചൊല്ല്\nതിരുവാവണി രാവു് മനസ്സാകെ നിലാവു്\nമലയാളച്ചുണ്ടിൽ മലരോണപ്പാട്ടു്\nതിരുവാവണി രാവു് മനസ്സാകെ നിലാവു്\nമലയാളച്ചുണ്ടിൽ മലരോണപ്പാട്ടു്\n\nപൂവേ പൊലി പൂവേ പൊലി\nപൂവേ പൂവേ\nപൂവേ പൊലി പൂവേ പൂവേ\nപൂവേ പൊലി പൂവേ പൊലി\nപൂവേ പൂവേ\nപൂവേ പൊലി പൂവേ പൂവേ\n\nആ ആ ആ\nആ ആആ\n\nകടക്കണ്ണിൽ മഷി മിന്നും മുറപ്പെണ്ണിൻ കവിളത്തു്\nകുറുമ്പിന്റെ കുളിരുമ്മ സമ്മാനം\nപൂക്കൂട നിറയ്ക്കുവാൻ പുലർമഞ്ഞിൻ കടവത്തു്\nപുന്നാരക്കാറ്റിന്റെ സഞ്ചാരം\nഇലയിട്ടു വിളമ്പുന്ന രുചികളിൽ വിടരുന്നു\nനിറവയറൂണിന്റെ സന്തോഷം\nപൂങ്കോടിക്കസവിട്ടു് ഊഞ്ഞാലിലാടുമ്പോൾ\nനിനവോരമുണരുന്നു സംഗീതം\nസംഗീതം\n\nപൂവേ പൊലി പൂവേ പൊലി\nപൂവേ പൂവേ\nപൂവേ പൊലി പൂവേ പൂവേ\nപൂവേ പൊലി പൂവേ പൊലി\nപൂവേ പൂവേ\nപൂവേ പൊലി പൂവേ പൂവേ\n\nതിരുവാവണി രാവു് മനസ്സാകെ നിലാവു്\nമലയാളച്ചുണ്ടിൽ മലരോണപ്പാട്ടു്\nമാവിൻ കൊമ്പേറുന്നൊരു പൂവാലിക്കുയിലേ\nമാവേലിത്തമ്പ്രാന്റെ വരവായാൽ ചൊല്ല്\nതിരുവാവണി രാവു് മനസ്സാകെ നിലാവു്\nമലയാളച്ചുണ്ടിൽ മലരോണപ്പാട്ടു്\nആ ആ ആ\nആ ആ ആ"
        
    },
    {
        img : '/static/images/Poovili.jpg',
        name : 'Poovili Poovili',
        artist : 'KJ Yesudas',
        music : '/static/music/Poovili Poovili - KJ Yesudas.mp3',
        lyr : "പൂവിളി പൂവിളി പൊന്നോണമായി\nനീ വരൂ നീ വരൂ പൊന്നോണതുമ്പീ\n(2)\n\nഈ പൂവിളിയില്\u200d\nമോഹം പൊന്നിന്\u200d മുത്തായ് മാറ്റും\nപൂവയലില്\u200d\nനീ വരൂ ഭാഗം വാങ്ങാന്\u200d\nപൂവിളി പൂവിളി പൊന്നോണമായി\nനീ വരൂ നീ വരൂ പൊന്നോണതുമ്പീ\n\nഈ പൂവിളിയില്\u200d\nമോഹം പൊന്നിന്\u200d മുത്തായ് മാറ്റും\nപൂവയലില്\u200d\nനീ വരൂ ഭാഗം വാങ്ങാന്\u200d\n\nപൂവിളി പൂവിളി പൊന്നോണമായി\nനീ വരൂ നീ വരൂ പൊന്നോണതുമ്പീ\n\nപൂ കൊണ്ടുമൂടും പൊന്നിന്\u200d\nചിങ്ങത്തില്\u200d\nപുല്ലാങ്കുഴല്\u200d കാറ്റത്താടും\nചമ്പാവിന്\u200d പാടം (2)\n\nഇന്നേ കൊയ്യാം നാളെ ചെന്നാല്\u200d\nഅത്തം ചിത്തിര ചോതി (2)\n\nപുന്നെല്ലിന്\u200d പൊന്മല പൂമുറ്റം തോറും\nനീ വരൂ നീ വരൂ പൊന്നോലത്തുമ്പീ\nഈ പൂവിളിയില്\u200d\nമോഹം പൊന്നിന്\u200d മുത്തായ് മാറ്റും\nപൂവയലില്\u200d\nനീ വരൂ ഭാഗം വാങ്ങാന്\u200d\n\nപൂവിളി പൂവിളി പൊന്നോണമായി\nനീ വരൂ നീ വരൂ പൊന്നോണതുമ്പീ\n\nമാരിവില്\u200d മാല മാനപൂന്തോപ്പില്\u200d\nമണ്ണിന്\u200d സ്വപ്ന പൂമാലയീ\nപമ്പാതീരത്തില്\u200d (2)\n\nതുമ്പപ്പൂക്കള്\u200d നന്ത്യാര്\u200dവട്ടം\nതെച്ചീ ചെമ്പരത്തീ (2)\n\nപൂക്കളം പാടിടും പൂമുറ്റം തോറും\nനീ വരൂ നീ വരൂ പൂവാലന്\u200d തുമ്പീ\n\nഈ പൂവിളിയില്\u200d\nമോഹം പൊന്നിന്\u200d മുത്തായ് മാറ്റും\nപൂവയലില്\u200d\nനീ വരൂ ഭാഗം വാങ്ങാന്\u200d\n\nപൂവിളി പൂവിളി പൊന്നോണമായി\n(2)\n\nനീ വരൂ നീ വരൂ പൊന്നോണതുമ്പീ\n(2)\n\nപൂവിളി പൂവിളി പൊന്നോണമായി\nനീ വരൂ നീ വരൂ പൊന്നോണതുമ്പീ"
    },
    {
        img : '/static/images/Onam-Vanllo.jpg',
        name : 'Onam vanllo',
        artist : 'Daya Bijibal',lyr : "ഓണം വന്നല്ലോ ഊഞ്ഞാലിട്ടലലോ\nകോടിയുടുത്തല്ലോ ഉണ്ണി ചാടിമറിഞ്ഞല്ലോ\nകൂട്ടുകാരെ വരുന്നില്ലേ വീട്ടിലിരുന്നാലൊ\nസന്ധ്യ വരും മുൻപേ ഉണ്ണി പന്തു കളിക്കണ്ടേ..\nസന്ധ്യ വരും മുൻപേ ഉണ്ണി പന്തു കളിക്കണ്ടേ..\nഓണം വന്നല്ലോ ഊഞ്ഞാലിട്ടലലോ..\nകോടിയുടുത്തല്ലോ ഉണ്ണി ചാടിമറിഞ്ഞല്ലോ\nകൂട്ടുകാരെ വരുന്നില്ലേ വീട്ടിലിരുന്നാലൊ\nസന്ധ്യ വരും മുൻപേ ഉണ്ണി പന്തു കളിക്കണ്ടേ\nസന്ധ്യ വരും മുൻപേ ഉണ്ണി പന്തു കളിക്കണ്ടേ..",
        music : '/static/music/Onam vanllo - Daya Bijibal.mp3'
    },
    {
        img : '/static/images/Varnam.jpg',
        name : 'Ponnonam Varavayi',
        artist : 'KS Harisankar',
        music : '/static/music/Ponnonam Varavayi - KS Harisankar.mp3',
        lyr : "Thithi Thara Thithi They\nThithey Thaka They They Thom\n\nThithi Thara Thithi They\nThithey Thaka They They Thom\n\nThithi Thara Thithi They\nThithey Thaka They They Thom\n\nThithi Thara Thithi They\nThithey Thaka They They Thom\n\nPonnonam Varavayi\nPonchinga Kathir Chuduvan\nEe Chinkara Thiruvonamay\n\nPonnonam Varavayi\nPonchinga Kathir Chuduvan\nEe Chinkara Thiruvonamay\n\nTheyyara Thuzhal Veeshi\nNeyyarin Thira Thalli\nThamberin Thudi Kotti\nAmberin Thaalam Thulli\n\nThithi Thara Thithi They\nThithey Thaka They They Thom\n\nThithi Thara Thithi They\nThithey Thaka They They Thom\n\nThithi Thara Thithi They\nThithey Thaka They They Thom\n\nThithi Thara Thithi They\nThithey Thaka They They Thom\n\nNisa Gari Gama Ridha Madhanisa Gaari Needha\nDhanisa Garisa Nisa Needha Maapa\nGari Gama Ridha Madhanisa Gaari Needha\nDhanisa Garisa Nisa Needha Maapa\n\nThithi Thara Thithi They\nThithey Thaka They They Thom\n\nThithi Thara Thithi They\nGari Sa Nidha Pa Gari\n\nThechi Poo Thumba Poo\nChiri Thookumpol\nChinkara Chiri Thooki\nVannu Neeyum\n\nThechi Poo Thumba Poo\nChiri Thookumpol\nChinkara Chiri Thooki\nVannu Neeyum\n\nTheyyotta Kolangal Thullum\nEe Onapaattinte Eenam\nEe Minnattam Minnum Kannil\nPonnaaram Kandu Penne\n\nThithi Thara Thithi They\nThithey Thaka They They Thom\n\nThithi Thara Thithi They\nThithey Thaka They They Thom\n\nThithi Thara Thithi They\nThithey Thaka They They Thom\n\nThithi Thara Thithi They\nThithey Thaka They They Thom"
    },
    {
        img : '/static/images/Jilebi.jpg',
        name : 'Njanoru Malayali',
        artist : 'P Jayachandran',
        music : '/static/music/Njanoru Malayali - P Jayachandran.mp3',
        lyr : "ഞാനൊരു മലയാളി എന്നും മണ്ണിൻ കൂട്ടാളി\nഎങ്ങും അതിരുകളില്ല മതിലുകളില്ലാ സ്നേഹത്തേരാളി\nമണ്ണാണ് ജീവൻ മണ്ണിലാണ് ജീവൻ\nപൊന്നിൻ വിളകൾ കൊയ്തെടുത്തൊരു സ്വർഗ്ഗം തീർക്കും ഞാൻ\nഇവിടൊരു സ്വർഗ്ഗം തീർക്കും ഞാൻ\n\nഒത്തിരി ഒത്തിരി മോഹം\nഎന്നും മുത്തശ്ശിക്കഥ കേട്ടുറങ്ങാൻ\nഒത്തിരി ഒത്തിരി മോഹം..\nമുത്തശ്ശിക്കഥ കേട്ടുറങ്ങാൻ\nഎനിക്കീ വീടുമതി നാടിൻ നന്മ മതി\nപഴമയ്ക്ക് കൂട്ടായി ഞാനും\nഎന്നും അറിയാതെ പറയാതെ..\nസ്വപ്നങ്ങളിൽ വന്നണയും സഖീ ..\nനിൻ മനസും മതി..\nഞാനൊരു മലയാളി എന്നും മണ്ണിൻ കൂട്ടാളി\nഎങ്ങും അതിരുകളില്ല മതിലുകളില്ലാ സ്നേഹത്തേരാളി\n\nഒത്തിരി ഒത്തിരി ഇഷ്ടം\nഇന്നും മുറ്റത്തെ കളിയൂഞ്ഞാലാടാൻ\nഒത്തിരി ഒത്തിരി ഇഷ്ടം\nമുറ്റത്തെ കളിയൂഞ്ഞാലാടാൻ\nഒർക്കാൻ കനവു മതി...കൂട്ടായ്\u200c അമ്മ മതി\nപണ്ടത്തെ പോലെന്നും ഞാനും..\nഇനി നിറവാർന്ന നിനവായി സല്ലപിക്കാൻ\nഞാനച്ഛനായ് കാണും.. ഈ ..തേന്മാവും മതി\n\nഞാനൊരു മലയാളി എന്നും മണ്ണിൻ കൂട്ടാളി\nഎങ്ങും അതിരുകളില്ല മതിലുകളില്ലാ സ്നേഹത്തേരാളി\nമണ്ണാണ് ജീവൻ മണ്ണിലാണ് ജീവൻ\nപൊന്നിൻ വിളകൾ കൊയ്തെടുത്തൊരു സ്വർഗ്ഗം തീർക്കും ഞാൻ\nഇവിടൊരു സ്വർഗ്ഗം തീർക്കും ഞാൻ"
    }
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;
    lyr_cont.textContent=music_list[track_index].lyr;
    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    
}



function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fas fa-pause"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fas fa-play"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}