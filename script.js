const btn = document.getElementById('btn');
const container = document.querySelector('.container');

btn.addEventListener('click', function(){
    getData();
})

async function getData(){

    const reponseJSON = await fetch('https://api.unsplash.com/photos/random/?client_id=H9QGg4WEB46rh_xzaabyQqIs3J9bwVYHiqxyEKY1VuQ');
    console.log(reponseJSON);

    const reponseJS = await reponseJSON.json();
    console.log(reponseJS);

    container.innerHTML =   `<div class='row'>
                                <img src='${reponseJS.urls.small}'>
                                <h2 style="margin-top:1rem">Artiste : ${reponseJS.user.name} (${reponseJS.user.instagram_username})</h2>
                                <p>Description : ${reponseJS.alt_description != null ? reponseJS.alt_description : 'La description nest pas renseignée'}.</p>
                                <a href='https://www.instagram.com/${reponseJS.user.instagram_username}' id='instagram'>Instagram</a>
                            </div>`; 


}