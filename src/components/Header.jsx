import { useSpring, useTrail, animated } from "@react-spring/web";
import bgcov from "../img/blob-haikei.svg";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 200, friction: 20 },
    delay: 200,
  });

  const buttonAnimation = useTrail(2, {
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 300, friction: 15 },
    delay: 600,
  });

  const bgAnimation = useSpring({
    from: { backgroundSize: "130%", backgroundPosition: "center 120%" },
    to: { backgroundSize: "140%", backgroundPosition: "center" },
    config: { tension: 120, friction: 14 },
  });

  return (
    <div className="container flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <animated.div style={textAnimation} className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            
            <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl sm:leading-none"><span className="text-purple-400"> Graphic </span> 
              Designer
              <br />
              <span className="text-4xl">Maryem</span>
              <span className="inline-block text-4xl m-2 text-purple-400">Hamdi</span>
            </h2>
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Artful Designs
              for Every Vision
              </p>
            </div>
            <p className="text-base text-gray-700 md:text-lg">
             
Passionate graphic designer with expertise in visual communication, typography, and layout design. Proficient in Adobe Creative Suite and Figma. Skilled in turning client needs into compelling visual concepts with a focus on quality and detail.
            </p>
            
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <animated.div
              style={buttonAnimation[0]}
              className="relative sm:mr-8 mr-0 sm:mb-0 mb-4 px-10 py-3 font-medium text-white transition duration-300 bg-purple-500 rounded-md hover:bg-purple-600 ease"
            >
              <NavLink to="/gallerie">
              <span className="absolute bottom-0 left-0 h-full -ml-2">
                <svg
                  viewBox="0 0 487 487"
                  className="w-auto h-full opacity-100 object-stretch"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                    fill="#FFF"
                    fillRule="nonzero"
                    fillOpacity=".1"
                  ></path>
                </svg>
              </span>
              <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg
                  viewBox="0 0 487 487"
                  className="object-cover w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                    fill="#FFF"
                    fillRule="nonzero"
                    fillOpacity=".1"
                  ></path>
                </svg>
              </span>
              <span className="relative">
                
                  Gallerie
                
              </span>
              </NavLink>
            </animated.div>
            <animated.div
              style={buttonAnimation[1]}
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-500 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <NavLink to="/contact">
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-500 ease-in-out bg-purple-500 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-700">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-700 ease-in-out group-hover:text-white">
                
                Contact
                
              </span>
              </NavLink>
            </animated.div>
          </div>
        </animated.div>
      </div>
      <animated.div
        style={{
          ...bgAnimation,
          backgroundImage: `url(${bgcov})`,
        }}
        className="inset-y-0 mt-20 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0 min-h-[50vh]"
      ></animated.div>
    </div>
  );
};
