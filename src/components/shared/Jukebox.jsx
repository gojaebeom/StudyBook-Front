import React, { useState } from "react";
import { useRef } from "react";
import musicImg01 from "../../assets/images/bgmCover01.png";
import musicSrc01 from "../../assets/music/nanase_dear.mp3";
import musicImg02 from "../../assets/images/cover06.jpg";
import musicSrc02 from "../../assets/music/latail01.mp3";
import musicImg03 from "../../assets/images/bgmCover03.png";
import musicSrc03 from "../../assets/music/nabibobat.mp3";
import musicImg04 from "../../assets/images/bgmCover04.png";
import musicSrc04 from "../../assets/music/reminiscence.mp3";
import musicImg05 from "../../assets/images/bgmCover05.png";
import musicSrc05 from "../../assets/music/last_canival.mp3";

const Jukebox = () => {

    const audioRef = useRef();
    const [state, setState] = useState({
        index:0,
        play: false,
    });

    const bgms = [
        {
            img: musicImg01,
            source: musicSrc01,
            title: "Nanase - Dear"
        },
        {
            img: musicImg03,
            source: musicSrc03,
            title: "모여봐요 동물의 숲 - 나비보벳따우"
        },
        {
            img: musicImg05,
            source: musicSrc05,
            title: "Norihiro Tsuru - Last Carnival"
        },
        {
            img: musicImg02,
            source: musicSrc02,
            title: "라테일 수록곡 - Green Blue"
        },
        {
            img: musicImg04,
            source: musicSrc04,
            title: "테일즈위버 수록곡 - Reminiscence"
        },
    ]

    const playOrPauseButtonHandler = () => {
        setState({...state, play: !state.play});
        if(!state.play){
            audioRef.current.play();
        }else{
            audioRef.current.pause();
        }
    }

    const prevButtonHandler = () => {
        console.log(audioRef.current.currentTime);
        if(audioRef.current.currentTime > 3){
            audioRef.current.load();
            audioRef.current.play();
        }
        else if(state.index !== 0){
            audioRef.current.load();
            audioRef.current.play();
            setState({...state, play:true, index: state.index-1});
        } 
    }

    const nextButtonHandler = () => {
        audioRef.current.load();
        audioRef.current.play();
        if(state.index < bgms.length-1){
            setState({...state, play:true, index: state.index+1});
        } else{
            setState({...state, play:true, index: 0});
        }
    }

    return(
    <React.Fragment>
        <div className="fixed w-full h-full  flex flex-col justify-center items-center ">
            <div className="flex justify-center items-center">
                <button className="mb-4 mr-5"
                    onClick={prevButtonHandler}
                >
                    <i className="fas fa-step-backward text-5xl text-white"></i>
                </button>
                <div className="image-blurred-edge relative w-40 h-40 rounded-full z-0 flex justify-center items-center mb-5">
                    <img src={bgms[state.index].img} alt="img" className={`w-36 h-36 rounded-full transition-all `}/> 
                    <button className="absolute w-full h-full flex justify-center items-center z-10"
                        onClick={playOrPauseButtonHandler}
                    >
                        {
                            state.play 
                            ? <i className="fas fa-pause text-4xl text-white"></i>
                            : <i className="fas fa-caret-right text-6xl text-white"></i>
                        }
                    </button>
                    {state.play && <div className="absolute w-full h-full border-b-4 border-indigo-400 rounded-full animate-spin"></div>}
                </div>
                <button className="mb-4 ml-5"
                    onClick={nextButtonHandler}
                >
                    <i className="fas fa-step-forward text-5xl text-white"></i>
                </button>
            </div>
            <div className="font-noto-bold text-black">
                {bgms[state.index].title}
            </div>
            <audio ref={audioRef}>
                <source src={bgms[state.index].source} type="audio/mp3"/>
            </audio>
        </div>
    </React.Fragment>
    );
}
export default Jukebox;