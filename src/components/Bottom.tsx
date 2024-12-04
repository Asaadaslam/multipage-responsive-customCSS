import "../style/Bottom.css"
import { FaLaptopCode } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
import { RiSeoLine } from "react-icons/ri";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { IoGameController } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";


function Bottom() {

    return(
        <main className="main-bottom">
            <div className="main-bottom-container"
            >
                {/* {top container} */}
                <div className="top-div-bott">
                    <h2 className="title-heading">Hire Me For</h2>
                  <p className="desc-bott">I bring a strong technical foundation, proven problem-solving skills, and a proactive attitude to deliver quality results. With a passion for continuous learning and teamwork, I am committed to contributing effectively and driving success for your organization.</p>
                </div>
                {/* {bottom container} */}
                <div className="bottom-container">
                    <div className="box"> <FaLaptopCode className="icon" />
                    <h3 className="icon-text">Web Development</h3>
                    </div>
                    <div className="box"><GiArtificialIntelligence  className="icon"/>
                    <h3 className="icon-text">Artificial Intelligence</h3>
                    </div>
                    <div className="box"><RiSeoLine  className="icon"/>
                    <h3 className="icon-text">SEO Friendly</h3>
                    </div>
                    <div className="box"><BiLogoFacebookSquare className="icon"/>
                    <h3 className="icon-text">Digital Marketing</h3>
                    </div>
                    <div className="box"><IoGameController className="icon"/>
                    <h3 className="icon-text">Game Development</h3>
                    </div>
                    <div className="box"><FaChalkboardTeacher  className="icon"/>
                    <h3 className="icon-text">Online Teaching</h3>
                    </div>
                    
                </div>

            </div>
        </main>


    )
   


}

export default Bottom 