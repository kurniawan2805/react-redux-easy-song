import { combineReducers } from 'redux';

const songReducer = () => {
  return [
    { title: 'No Scrubbs', duration: '4:05' },
    { title: 'Macarena', duration: '2:05' },
    { title: 'Bandung', duration: '2:05' },
    { title: 'Howdie', duration: '3:55' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;
    default:
      return selectedSong;
  }
};

export default combineReducers({
  song: songReducer,
  selectedSong: selectedSongReducer,
});
