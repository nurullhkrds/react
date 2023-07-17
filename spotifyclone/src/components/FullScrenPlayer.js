import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import CustomRange from "components/CustomRange";
import {
  BiShuffle,
  BiSkipPrevious,
  BiPlay,
  BiSkipNext,
  BiSolidHeart,
  BiPhotoAlbum,
} from "react-icons/bi";
import {
  BsRepeat,
  BsFillPauseCircleFill,
  BsFillVolumeUpFill,
  BsArrowsFullscreen,
  BsVolumeMuteFill,
  BsFillVolumeDownFill,
  BsFillVolumeOffFill,
} from "react-icons/bs";
import { secondsToTime } from "Utils";
import {
  PiMicrophoneStageFill,
  PiQueueFill,
  PiDevicesFill,
} from "react-icons/pi";

function FullScrenPlayer({ toggle, state, controls }) {
  const { current } = useSelector((state) => state.player);

  const volFull = <BsFillVolumeUpFill />;
  const volMute = <BsVolumeMuteFill />;
  const volLow = <BsFillVolumeDownFill />;
  const volNormal = <BsFillVolumeOffFill />;

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

  return (
    <div className="h-full relative">
      <div
        className="absolute inset-0 object-cover bg-center bg-cover blur-md opacity-30 "
        style={{ backgroundImage: `url(${current.img})` }}
      ></div>

      <div className="flex flex-col-reverse px-8 items-center w-full absolute bottom-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex wrap ">
            <img className="w-12 h-12" src={current.img} />
            <div className="pl-2" >
             
              <h3 >{current.title}</h3>
              <p >{current.artist}</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <button className="w-16 h-16 flex items-center justify-center text-wbh text-white text-opacity-70 hover:text-opacity-100">
              <BiShuffle className="w-10 h-10" />
            </button>
            <button className="w-16 h-16  flex items-center justify-center text-wbh text-white text-opacity-70 hover:text-opacity-100">
              <BiSkipPrevious className="w-10 h-10" />
            </button>
            <button
              onClick={controls[state?.playing ? "pause" : "play"]}
              className="w-16 h-16 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06]"
            >
              {state?.playing ? (
                <BsFillPauseCircleFill className="w-10 h-10" />
              ) : (
                <BiPlay className="w-10 h-10" />
              )}
            </button>
            <button className="w-16 h-16 flex items-center justify-center text-wbh text-white text-opacity-70 hover:text-opacity-100">
              <BiSkipNext className="w-10 h-10" />
            </button>
            <button className="w-16 h-16  flex items-center justify-center text-wbh text-white text-opacity-70 hover:text-opacity-100">
              <BsRepeat className="w-10 h-10" />
            </button>
          </div>
          <div>
            <div className="min-w-[11.25rem] w-[30%] flex justify-end ">
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

              <button
                onClick={toggle}
                className="w-8 h-8 flex items-center justify-center text-wbh text-white text-opacity-70 hover:text-opacity-100"
              >
                <BsArrowsFullscreen />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-2">
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.time)}
          </div>
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
    </div>
  );
}

export default FullScrenPlayer;
