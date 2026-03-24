import { Link } from "react-router-dom"
export function HomeComponent() {

    return (
        <>
            <header >
                <div className="relative">
               
                    <img src="/heroimage1.jpg" className="w-full opacity-90 object-cover h-[500px]" />
               
                <ul className="flex justify-end gap-7 absolute top-0 right-0 text-white mr-5px">

             <li> <Link to="/About">About me</Link></li>  
               <li> <Link to="/Skills">Skills</Link></li>
               <li> <Link to="/Projects">Projects</Link></li>
               <li className="pr-4"> <Link to="/Contactus">Contactus</Link></li>
                </ul>
                <div className="absolute text-[50px] text-white font-normal italic top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <span >Hi there! My name is Alekhya and I'm a</span>
                    <span className="text-rose"> front-end Developer</span>
                    <div>
                        <button className="bg-pink-300 rounded-full px-4 py-3">Download CV   </button>
                    </div>
                    
                </div>
                </div>
            </header>
          
                <div className="Aboutme-section">
                    <div>About Me</div>
                    <div>
                        <p>I am a aspiring Software Developer. I have 3 years of experience in React development and 2 years of break for motherhood. I am again looking for opportunities. </p>
                    </div>
                </div>
                <div className="skills-section">
                    <div>Skills</div>
                    <div>
                        <span>HTML</span>
                        <span>Tailwind css</span>
                        <span>JavaScript</span>
                        <span>TypeScript</span>
                        <span>React</span>
                        <span>Java</span>
                    </div>

                </div>
                <div className="projects-section">
                    <div>
                        <p>ChatBot Website using React & JS</p>
                    </div>
                    <div>
                        <p>Ecommerce website (React & JS)</p>
                    </div>

                </div>

            
            <footer>
                <div>
                    <div>LinkedIn</div>
                    <div>www.linkedin.com/in/alekhya-puranam</div>


                </div>
                <div>
                    <div>Email</div>
                    <div>alekhyapuranam99@gmail.com</div>

                </div>
                <div>
                    <div>Phone Number</div>
                    <div>+64 0225030383</div>
                </div>
            </footer>
        </>
    )
}