import React from "react";
import { AiFillPlayCircle, AiFillPauseCircle, AiFillBackward, AiFillForward } from "react-icons/ai";
import {
  Controlers,
  Button,
  } from "./Controls.element";


  
const Controls = ({isPlaying, setIsPlaying, skipSong}) => {

  return(
    <Controlers>
      <Button onClick={() => skipSong(false)}>
        <AiFillBackward />
      </Button>
      <Button className="btn play-btn" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
      </Button>
      <Button className="btn skip-btn" onClick={() => skipSong(true)}>
        <AiFillForward />
      </Button>
    </Controlers>
  )
}

export default Controls;