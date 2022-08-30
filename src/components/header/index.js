import style from "./style.css";
import githubDark from "./github-dark.png";

const Header = () => {
    return (
        <header class={style.header}>
            <h1>Media Recorder Tester</h1>
            <a className="github" href="https://github.com/jetfontanilla/media-recorder-tester">
                <img src={githubDark} width="32" height="32" alt="View on Github"/>
            </a>
        </header>
    );
};

export default Header;
