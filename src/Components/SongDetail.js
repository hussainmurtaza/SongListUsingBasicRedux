import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
        if(!song){
            return <h3>Please Select a Song</h3>
        }
        return(
            <div>
                <h3>Song Details: </h3>
                    <p>
                        Song Tile : {song.title}
                        <br/>
                        Song Duration : {song.duration}
                    </p>
            </div>
        );
    
}

const mapStateToProps = (state) => {
    return{
        song: state.selectedSong
    };
};

export default connect(mapStateToProps)(SongDetail)