'use strict';

/*
    Homework Assignment #1: Data Types

    writing data about fictive song to console:
        1. create variables
        2. write them to console
        3. save song data to object
        4. write them to console from object
*/

// 1. creating constants (don't want to use vars)
const name = 'Some Song Name';
const artist = 'Unknown band';
const album = 'Unknown Movie Soundtrack';
const durationMinutes = 4;
const durationSeconds = 31.5;
const genres = ['instrumental', 'soundtrack', 'rock'];
const isInstrumental = true;
const single = false;
const movie = 'Unknown Movie';
const releaseDate = '31. 2 2017';

// 2. writing out to console
console.log('song name: ', name);
console.log('artist: ', artist);
console.log('album: ', album);
console.log('song length: ', durationMinutes ,
    ':', durationSeconds);
console.log('genre: ', genres);
console.log('instrumental: ', isInstrumental);
console.log('released as a single: ', single);
console.log('appeared in a movie: ', movie);
console.log('release date: ', releaseDate);

const someSong = {
    songName: name,
    artist: artist,
    album: album,
    duration: {
        minutes: durationMinutes,
        seconds: durationSeconds
    },
    genre: genres,
    isInstrumental: isInstrumental,
    releasedAsSingle: single,
    appearedInMovie: movie,
    releaseDate: releaseDate,
};

console.log('song name: ', someSong.SongName);
console.log('artist: ', someSong.artist);
console.log('album: ', someSong.album);
console.log('duration: ', someSong.duration.minutes, ':'
    ,someSong.duration.seconds);
console.log('genre: ', someSong.genre);
console.log('is instrumental: ', someSong.isInstrumental);
console.log('released as a single: ', someSong.releasedAsSingle);
console.log('appeared in a movie: ', someSong.appearedInMovie);
console.log('release date: ', someSong.releaseDate);
