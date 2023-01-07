import githubImgAsset from "../../Assets/images/github.png"
import linkedInImgAsset from "../../Assets/images/linkedIn.png"
import { useState } from "react";
import "./Footer.css"



const Footer = () => {
    /*Just for fun. Makes the whole document spin if you click this*/
    const [newClass, setNewClass] = useState(true);
    const root = document.getElementById('root');
    const addSpinClass =() => {
       setNewClass( prevState => !prevState);
       if(newClass){
            root.className = "spin-content"
            document.getElementById("spinner-button").innerHTML = "Why did you click?";
       }
       else {
        root.className = ""
       }
    }
    /*Just for fun. Makes the whole document spin if you click this*/

    const githubImg = <img src={githubImgAsset} alt="github"/>
    const linkedInImg = <img src={linkedInImgAsset} alt="github"/>


    return (
        <div className="footer">


            <h4>Noam Zimet's AirBnB Clone</h4>
            <a id="github-img" href="https://github.com/nzoam93" target="_blank" rel="noopener noreferrer">{githubImg}</a>
            <a id="linkedin-img" href="https://www.linkedin.com/in/noam-zimet-4114a594" target="_blank" rel="noopener noreferrer">{linkedInImg}</a>
            <button id="spinner-button" onClick={addSpinClass}>DO NOT CLICK! </button>
        </div>
    )
}

export default Footer;