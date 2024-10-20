// Sample albums and photos data
let albums = [
    { name: "Nature", photos: ["nature1.jpg", "nature2.jpg"] },
    { name: "Portraits", photos: ["portrait1.jpg", "portrait2.jpg"] }
];

// Function to render albums
function renderAlbums() {
    const albumContainer = document.getElementById("albumContainer");
    albumContainer.innerHTML = ''; // Clear existing albums
    albums.forEach((album, index) => {
        let albumDiv = document.createElement('div');
        albumDiv.classList.add('album');
        
        let albumTitle = document.createElement('h3');
        albumTitle.innerText = album.name;
        albumDiv.appendChild(albumTitle);

        album.photos.forEach(photo => {
            let img = document.createElement('img');
            img.src = photo;
            albumDiv.appendChild(img);
        });

        // Add album to container
        albumContainer.appendChild(albumDiv);
    });
}

// Function to add a new album
function addAlbum() {
    let albumName = prompt("Enter album name:");
    if (albumName) {
        albums.push({ name: albumName, photos: [] });
        renderAlbums();
    }
}

// Function to add a photo to an album
function addPhoto() {
    let albumName = prompt("Enter the album name to add the photo to:");
    let album = albums.find(alb => alb.name === albumName);
    if (album) {
        let photoUrl = prompt("Enter photo URL:");
        if (photoUrl) {
            album.photos.push(photoUrl);
            renderAlbums();
        }
    } else {
        alert("Album not found!");
    }
}

// Initial render of albums on page load
window.onload = () => {
    renderAlbums();
};
