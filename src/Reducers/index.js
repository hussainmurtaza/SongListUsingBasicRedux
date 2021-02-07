import { combineReducers } from 'redux';

const songsReducer = () => {
    return[
        {title: 'bekhayali', duration: '4:05'},
        {title: 'Kamli', duration: '2:30'},
        {title: 'Teri Meri', duration: '3:15'},
        {title: 'shava shava', duration: '5:05'},

    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});