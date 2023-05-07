window.onload = function() {
    // Get references to the input elements and the playlist
    let songTextInput = document.getElementById('songTextInput');
    let addButton = document.getElementById('addButton');
    let playlist = document.getElementById('playlist');

   
    addButton.addEventListener('click', function() {
        
        let newItem = document.createElement('li');
        newItem.textContent = songTextInput.value;
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            
            playlist.removeChild(newItem);
        });
        newItem.appendChild(deleteButton);

       
        playlist.appendChild(newItem);

        
        songTextInput.value = '';
    });
}