const allPlayers = () =>{
    const searchValue = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then((data) => showPlayerDetails(data.player));
    // console.log(searchValue);
}; 
const showPlayerDetails =(players) => {  
   for(const player of players){
    const parent = document.getElementById("player-container");
    const div = document.createElement('div');
    div.innerHTML =` <div class="card border p-5">
    <div class="pro-pic">
        <img class="w-25" src="${player.strThumb}" alt="">
    </div>
    <h2>name: ${player.strPlayer}</h2>
    <h5>Country:${player.strNationality}</h5>
    <p></p>
    <div class="allButton">
        <button class="btn btn-danger">Delete</button>
        <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
    </div>
</div>`;
parent.appendChild(div);
console.log(player);
   }


};

const details = (info) =>{
    console.log(info);
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`;
    fetch(url)
    .then(response => response.json())
    .then((data) =>setDetails(data.players[0]));
};
const setDetails = (info) =>{
    document.getElementById("details-conatainer").innerHTML= `
<div>
<img src="" alt="">
<h1>name:${info.strPlayer}</h1>
</div>
`;

}
