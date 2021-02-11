
  document.getElementById("display").addEventListener("click",function(){
    const searchValue =document.getElementById('search-input').value
    
    const url= `https://api.lyrics.ovh/suggest/${searchValue}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displaysongs(data.data))
   
  });

    
    const displaysongs =song =>{
       
      const songsContainer=document.getElementById('songs-container');
      songsContainer.innerHTML=""
      song.forEach(songs=> {
          const div=document.createElement('div');
          div.className="single-result row align-items-center my-3 p-3"
          div.innerHTML =` <div class="col-md-9">
          <h3 class="lyrics-name">${songs.title}</h3>
          <p class="author lead">Artist By <span>${songs.artist.name}</span></p>
      </div>
      <div class="col-md-3 text-md-right text-center">
          <button onclick="getLyric('${songs.artist.name}','${songs.title}')" class="btn btn-success">Get Lyrics</button>
      </div>
       <div> 
        <h4 id="songLink"> Song link : ${songs.link} </h4>
       </div>

          `
          songsContainer.appendChild(div);
         
        })      
          
      };
  
      const getLyric=(artist,title)=>{
        const url =`https://api.lyrics.ovh/v1/${artist}/${title}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>songLyrics(data.lyrics));
    };

    const songLyrics=lyric=>{
     const sang =document.getElementById("song-lyrics")
     sang.innerText=lyric;
    }
      
    

    
       
      




    
   