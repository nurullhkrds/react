import CustomRange from "components/CustomRange";
import React, { useEffect, useMemo,useRef} from "react";
import { BiShuffle, BiSkipPrevious, BiPlay, BiSkipNext,BiSolidHeart ,BiPhotoAlbum} from "react-icons/bi";
import {
  BsRepeat,
  BsFillPauseCircleFill,
  BsFillVolumeUpFill,
  BsArrowsFullscreen,
  BsVolumeMuteFill,
  BsFillVolumeDownFill,
  BsFillVolumeOffFill,
} from "react-icons/bs";
import {
  PiMicrophoneStageFill,
  PiQueueFill,
  PiDevicesFill,
} from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";

import { useAudio,useFullscreen,useToggle } from "react-use";
import { secondsToTime } from "Utils";
import { setControls, setPlaying } from "store/player";
import FullScrenPlayer from "components/FullScrenPlayer";

function Player() {



  const fullScrenRef = useRef(null)
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(fullScrenRef, show, {onClose: () => toggle(false)});





  const dispatch = useDispatch();
  const STEP = 0.1;
  const MIN = 0;

  const volFull = <BsFillVolumeUpFill />;
  const volMute = <BsVolumeMuteFill />;
  const volLow = <BsFillVolumeDownFill />;
  const volNormal = <BsFillVolumeOffFill />;

  const { current } = useSelector((state) => state.player);

  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
    autoPlay: true,
  });
  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) {
      return volMute;
    }
    if (state.volume > 0 && state.volume < 0.33) {
      return volNormal;
    }
    if (state.volume >= 0.33 && state.volume < 0.66) {
      return volLow;
    }
    return volFull;
  }, [state.volume, state.muted]);

  useEffect(() => {
    dispatch(setPlaying(state.playing));
  }, [state.playing]);
  useEffect(() => {
    dispatch(setControls(controls));
  }, []);
  useEffect(() => {
    controls.play();
  }, [current]);
  return (
    <div className="flex justify-between items-center h-full px-4">
      <div className="min-w-[11.25rem] w-[30%]">
        {current && (
          <div className=" flex items-center">
            <div className="flex items-center mr-3 ">
              <div className="w-14 h-14 mr-2">
                <img src={current.img} />
              </div>
              <div>
                <h6 className="text-sm">{current.title}</h6>
                <p className="text-[0.688rem]">{current.artist}</p>
              </div>
            </div>
            <button className="w-8 h-8 flex items-center justify-center text-wbh text-white text-opacity-70 hover:text-opacity-100">
              <BiSolidHeart />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-wbh text-white text-opacity-70 hover:text-opacity-100">
              <BiPhotoAlbum />
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center max w-[45.125rem] w-[40%]">
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-wbh text-white text-opacity-70 hover:text-opacity-100">
            <BiShuffle />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-wbh text-white text-opacity-70 hover:text-opacity-100">
            <BiSkipPrevious />
          </button>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06]"
          >
            {state?.playing ? (
              <BsFillPauseCircleFill />
            ) : (
              <BiPlay className="w-6 h-6" />
            )}
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-wbh text-white text-opacity-70 hover:text-opacity-100">
            <BiSkipNext />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-wbh text-white text-opacity-70 hover:text-opacity-100">
            <BsRepeat />
          </button>
        </div>
        <div className="w-full flex items-center gap-x-2">
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.time)}
          </div>
          {audio}
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />

          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.duration)}
          </div>
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex justify-end ">
        <button className="w-8 h-8 flex items-center justify-center text-wbh text-white text-opacity-70 hover:text-opacity-100">
          <PiMicrophoneStageFill />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-wbh text-white text-opacity-70 hover:text-opacity-100">
          <PiQueueFill />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-wbh text-white text-opacity-70 hover:text-opacity-100">
          <PiDevicesFill />
        </button>
        <button
          onClick={controls[state.muted ? "unmute" : "mute"]}
          className="w-8 h-8 flex items-center justify-center text-wbh text-white text-opacity-70 hover:text-opacity-100"
        >
          {<div>{volumeIcon}</div>}
        </button>
        <div className="w-[5.813rem] max-w-full">
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state.muted ? 0 : state?.volume}
            onChange={(value) => {
              controls.unmute();
              controls.volume(value);
            }}
          />
        </div>

        <button onClick={toggle} className="w-8 h-8 flex items-center justify-center text-wbh text-white text-opacity-70 hover:text-opacity-100">
          <BsArrowsFullscreen />
        </button>
      </div>
      <div ref={fullScrenRef}>

        {isFullscreen ?(
        <FullScrenPlayer
        toggle={toggle}
        state={state}
        controls={controls}
        
        />):null }
        
      </div>
    </div>
  );
}

export default Player;
