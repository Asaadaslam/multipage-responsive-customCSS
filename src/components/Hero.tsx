import "../style/Hero.css"
import Image from "next/image";


function Hero () {
    return (
        <div  className="main-hero-section">
            <div className="main-container">
            {/* {left} */}
            <div className="left-container">
             <Image src={"/images/profile.jpg"} 
             width={200}
             height={200}
             
            className="profile-pic" alt ="profile"></Image>
            </div>

            {/* {right} */}

            <div className="right-container">
                <h1 className="title">Hello!!
                    <br/> I am Muhammad Asaad</h1>
                    <p className="para">Creative Frontend Developer skilled in HTML, CSS, JavaScript, and modern frameworks, with a focus on building responsive, user-friendly web applications. Seeking to enhance user experiences and contribute to innovative web solutions</p>
            </div>

            </div>
        </div>
    )

}

export default Hero