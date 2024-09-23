import { useInView, animated } from '@react-spring/web';
import first_cover from "../img/1.svg";
import school from "../img/school.svg"

const AnimatedListItem = ({ children, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Start animation when 10% of the element is visible
  });

  return (
    <animated.div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        transition: `opacity 0.6s ease-in-out ${delay}s, transform 0.6s ease-in-out ${delay}s`
      }}
    >
      {children}
    </animated.div>
  );
};

export default function Test() {
  return (
    <div>
      <div
        className="bg-right bg-[length:70vw_auto] max-w-screen mx-auto h-screen rounded-xl relative overflow-hidden"
        style={{
          backgroundImage: `url(${first_cover})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center", // Align the image to the right and center it vertically
          backgroundSize: "auto 100%", // Scale the image to fit the height of the container
          margin: 0,
          padding: 0,
          borderRadius: "10px",
        }}
      >
        <div
          className="absolute inset-0 sm:bg-transparent bg-black opacity-25 sm:opacity-0"
          style={{
            filter: "blur(5px)",
          }}
        ></div>

        <div className="relative sm:-ml-0 z-10 h-screen pt-20">
          <ol className="relative m-16 sm:ml-[16vw] text-gray-200 sm:text-gray-700 border-l border-gray-400">
              <AnimatedListItem delay={0}>
            <li className="mb-20 ms-16">
                <span className="absolute flex items-center justify-center w-20 h-20 bg-green-200 rounded-full -start-10 ring-4 ring-white">
                <img src={school} className='w-14 h-14 text-gray-500'/>
                </span>
                <h3 className="font-semibold pt-3 text-3xl leading-tight">
                  Education
                </h3>
            </li>
              </AnimatedListItem>
            
              <AnimatedListItem delay={0.2}>
              <li className="mb-20 ms-16">
                <span className="absolute flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full -start-10 ring-4 ring-white">
                <img src={school} className='w-14 h-14 text-gray-500'/>
                </span>
                <h3 className="font-medium text-2xl leading-tight">License in Introduction to Image Design
                </h3>
                <p className="text-sm">Higher Institute of Arts and Crafts<br/>
                  <span className='text-[#c0fdab] sm:text-[#329a0f] font-semibold'>From sept. 2023</span></p>
            </li>
              </AnimatedListItem>
            
              <AnimatedListItem delay={0.4}>
              <li className="mb-20 ms-16">
                <span className="absolute flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full -start-10 ring-4 ring-white">
                <img src={school} className='w-14 h-14 text-gray-500'/>
                </span>
                <h3 className="font-medium text-2xl leading-tight">Literary Baccalaureate</h3>
                <p className="text-sm">High school Ibno Roched Sousse With Art option <br/>
                 <span className='text-[#c0fdab] sm:text-[#329a0f] font-semibold'>De sept. 2021 à juin 2022</span></p>
                </li>
              </AnimatedListItem>
            
              <AnimatedListItem delay={0.6}>
            <li className="ms-16">
                <span className="absolute flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full -start-10 ring-4 ring-white">
                <img src={school} className='w-14 h-14 text-gray-500'/>
                </span>
                <h3 className="font-medium text-2xl leading-tight">Painting Club</h3>
                <p className="text-sm">Chromarium Cultural center <br/>
                <span className='text-[#c0fdab] sm:text-[#329a0f] font-semibold'>De nov. 2020 à juil. 2021</span></p>
            </li>
              </AnimatedListItem>
          </ol>
        </div>
      </div>
    </div>
  );
}
