import style from "./style.css";

const Home = () => {
    const isWebApi = typeof window !== "undefined";
    const mediaRecorderSupported = isWebApi && !!window.MediaRecorder;
    const mediaRecorderIsTypeSupported = isWebApi && !!MediaRecorder.isTypeSupported;
    const isMp3Supported = mediaRecorderIsTypeSupported && MediaRecorder.isTypeSupported("audio/mp3");
    const isMp4Supported = mediaRecorderIsTypeSupported && MediaRecorder.isTypeSupported("audio/mp4");
    const isMp4AacSupported = mediaRecorderIsTypeSupported && MediaRecorder.isTypeSupported("audio/mp4;codecs=aac");
    const isMp4Ac3Supported = mediaRecorderIsTypeSupported && MediaRecorder.isTypeSupported("audio/mp4;codecs=ac3");
    const isOpusWebmSupported = mediaRecorderIsTypeSupported && MediaRecorder.isTypeSupported("audio/webm;codecs=opus");
    const isOpusOggSupported = mediaRecorderIsTypeSupported && MediaRecorder.isTypeSupported("audio/ogg;codecs=opus");

    return (
        <div class={style.home}>
            <h1>Media Recorder Tester</h1>
            <div class={style.row}>
                <div>Media Recorder API</div>
                <div>{mediaRecorderSupported ? "true" : "false"}</div>
                <div>MediaRecorder.isTypeSupported</div>
                <div>{mediaRecorderIsTypeSupported ? "true" : "false"}</div>
                <div>mp3 support</div>
                <div>{isMp3Supported ? "true" : "false"}</div>
                <div>mp4 support</div>
                <div>{isMp4Supported ? "true" : "false"}</div>
                <div>mp4/aac support</div>
                <div>{isMp4AacSupported ? "true" : "false"}</div>
                <div>mp4/ac3 support</div>
                <div>{isMp4Ac3Supported ? "true" : "false"}</div>
                <div>opus/webm support</div>
                <div>{isOpusWebmSupported ? "true" : "false"}</div>
                <div>opus/ogg support</div>
                <div>{isOpusOggSupported ? "true" : "false"}</div>
            </div>
        </div>
    );
};

export default Home;
