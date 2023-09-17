import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../redux/speedSlice";
import "../styles/Header.css";

function Header() {
  const language = useSelector((state) => state.speed.language);

  const dispatch = useDispatch();
  const [lang, setLang] = useState(false);

  const handleTr = () => {
    dispatch(setLanguage("TR"));
    setLang((prev) => !prev);
  };
  const handleEn = () => {
    dispatch(setLanguage("EN"));
    setLang((prev) => !prev);
  };

  return (
    <div className="header">
      {language === "EN" ? (
        <h2 style={{marginRight:"35px"}}>Typing Speed App  </h2>
      ) : (
        <h2 style={{marginRight:"35px"}}>Klavye Hız Uygulaması</h2>
      )}

      {lang ? (
        <div onClick={handleTr} className="divTr">
          <img
            style={{ width: "25px", borderRadius: "20px", height: "25px" }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAkFBMVEXjChf////iAAD0trjjABLjAA/jAAziAAf/+/v3zM386On86+ziAAPjBRT+9vbnRErkGSPpWl/tgYT1vb/mOT/ypqjmMzr3ycv+8/T74+TlKDDuhonrbXHoTlPzra/tfIDwk5b62tvxnJ73xMbraW3kER3pWV7lISrvjY/63d7oUlfsd3rqYWXlLDTnR031t7ncVsoRAAAEyklEQVR4nO2deXuiMBDGceSoFjxawftia7Ee3e//7RbQut1loqCxkPj+/tP28QmvmWRmMhkNAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4VnWrZj26ZX9kAqgUkpUW+6e29HhxdW2YMqE5doNPH7zafaiWZjNu7Fuphlj60UHKK3+nONo9Ufd4gezZBik9n9YvX4Yrm2yC57mD+ISUbYOqtIymv7YVTxyJxdFiSl8fkYCy6Rn1ORVJVA/3XFpG0Oq/mOT27Zg74vZDSKKRIz2Gg9VWiSR4SnhO9vzPRdVUy6tLYuZ/Pp0ZntBLuwPzi+P4yo7MHfB8dantNjGLYTLY5BTxwBxU4dBeujrW20FIVGA7EgA38fy5FdNiyi1SJ1drcaikL7J7Ei4zOBX+LyfsT/NNZOFLcnniTjS7GNQ2/P+olid4SzpG7neFaida0210oUk/gAON53dznTArQf1ro6iUJLgSQNJ/djWvFOHugTE1JdIMmsUO6IXlraeLRC77XoqknvvzSxHisSSDIp/IC0mesREJIg7Hu54jt32x35A/x5aMtLsrjKDLTIXXvE50teNVkZroFCVpJnKTuIo+S0MVe85YxkeBrkr1QURZB8vW4xyXz4a0NBC/SIlaQp51FiX/CazatkaMFq8inHR0/8Y/XcfWLzSH1JX26iSVM1d9/pstOkLem7TeOoumLWQ6+cJNIWxkNs+aaUKB6xmaSuI+nzj/H26v+8pUnVlYk3nZa0AR81Wf7zgRbRKPQrKwp/niNvvF95mfD0ibEgQTis1aobF9GQ06Qn7VDvlKuapqLYRL2wmbx+r+w08VxOkoG88Z40aZEZC/LpP8ueidJxdpwmEgPivznNPm1mpzT4sLqSCJxYiScS3/K83xMSnQqfuPPeSSBvxHzuu3hK8wfhTzDk+eIeq0m1k1VssCMpJE78MnfC7GtyklV3g80TSHHsY0HMOZ/67lU6TvbYFNvtIVssiDcWlYCtK205hrnnBj27bdCxoxqtlwJBJIaXd8Jiyytu8qc82i8+hILEO7JbWZ/+gNXmhh3eoIm3Ol+PXv1qjLvMk5Ha8wTrSRZ+3/n90PsO/BMG+LFZEO9kQVycBfmTLMizZUE+loHP28tbUBTM2+N8h4FfUOQZj4rngDgvZkBdQRZB/YmkMiU1608EdUqyJoqSdUqierapnBVFzXo21D0yoD42i7COWoYzq2gdtajeXs7SqGa9vfBehnJbqExwf4dBdM/rmtv2bk+Le16G2eE1ucIpp+5WVqxUMrg3yiC8X+wXu1881+d+cfw0okPefv6o3qZZ1Q+0CmHaot4n+fsVBMPaThvLSbAjcV8LM1dfi1CBSoqCuIFIk8RTudj/ZDLQr/9JMvdv6JOT5P9VjIAv4UZn+ik9ifspdRbp8YSO/ZTiNcU6V2L0f98ty05eBYvl4a9TLSVJrEDkp3zxtz+bvd9s/Yb2/dmMIn38/nmjrm8fP+PKfo9djbxXjmv6guprN18U6x/bf4D+sQb6DPOgHzXH5b7lH2v7oRRJSfvbN1k9Wv1x9Hj97VM8lyjK/g7Cy+P+DsIB/F6GCPyuCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgF38AryFAW2q5XXkAAAAASUVORK5CYII="
          />
        </div>
      ) : (
        <div onClick={handleEn} className="divEn">
          <img
            style={{ width: "25px", borderRadius: "20px", height: "25px" }}
            src="data:image/png;base64,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"
          />
        </div>
      )}
    </div>
  );
}

export default Header;
