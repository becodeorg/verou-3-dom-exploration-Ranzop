const collection = [
    {
        albumName: 'Fantastic Planet',
        artistName: 'Lealani',
        releaseYear: '2019',
        genre: ['electronic', 'experimental electronic', 'experimental hip-hop', 'pop', 'synthpop', 'triphop', 'Los Angeles'],
        albumArtwork: 'fantastic-planet.jpg',
        albumLabel: 'Dome of Doom',
        albumCountryOfOrigin: 'USA'
    },
    {
        albumName: 'Slide',
        artistName: 'George Clanton',
        releaseYear: '2018',
        genre: ['electronic', 'baggy', 'chillwave', 'hypnogogic pop', 'vaporwave', 'Los Angeles'],
        albumArtwork: 'slide.jpg',
        albumLabel: '100% Electronica',
        albumCountryOfOrigin: 'USA'
    },
    {
        albumName: 'Suddenly Everyone Explodes',
        artistName: 'Plastic Mermaids',
        releaseYear: '2019',
        genre: ['dream pop', 'shoegaze', 'experimental', 'indie-rock'],
        albumArtwork: 'suddenly-everyone-explodes.jpg',
        albumLabel: 'Sunday Best Recordings',
        albumCountryOfOrigin: 'UK'
    },
    {
        albumName: 'Callisto',
        artistName: 'Robotalco',
        releaseYear: '2019',
        genre: ['electronic', 'balearic', 'disco', 'dub', 'house', 'Italy'],
        albumArtwork: 'callisto.jpg',
        albumLabel: 'Silk Sound',
        albumCountryOfOrigin: 'Italy'
    },
    {
        albumName: 'Reckoning',
        artistName: 'Mourning [A] BLKstar',
        releaseYear: '2019',
        genre: ['experimental', 'afrofuturism', 'beats', 'electronic music', 'soul', 'Cleveland'],
        albumArtwork: 'reckoning.jpg',
        albumLabel: 'Don Giovanni Records',
        albumCountryOfOrigin: 'USA'
    }
]

for (i = 0; i < collection.length; i++) {
const albumElement = collection[1];
const createSection = document.createElement ("section");
document.body.appendChild(createSection);
const createDivContainer = document.createElement("container");
document.body.appendChild(createDivContainer);
createDivContainer.append(createSection);
createDivContainer.innerHTML = albumElement;
}




