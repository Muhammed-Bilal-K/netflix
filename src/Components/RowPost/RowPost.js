import React, { useEffect, useState } from 'react';
import './RowPost.css';
import Youtube from 'react-youtube';
import axios from '../../axios';
import { API_KEY ,imageUrl } from '../../constants/constants';
function RowPost(props) {
    const [movie, setMovie] = useState([])
    const [urlId, setUrlId] = useState()
    useEffect(() => {
        axios.get(props.url).then((Response) => {
            setMovie(Response.data.results)
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    const handleMovie = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            if(response.data.results.length!==0){
                setUrlId(response.data.results[5])
            }else{
                console.log('not available');
            }
        })
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movie.map((obj) => (
                    <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} />
                ))}
            </div>
    {   urlId   &&  <Youtube opts={opts} videoId={urlId.key} /> }
        </div>

    )
}

export default RowPost
