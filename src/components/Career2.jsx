import sec_cover from "../img/2.svg";
import { useInView, animated } from '@react-spring/web';
import work from "../img/work.svg"

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

export default function Career2() {
  return (
    <div >

    
<div
      className="bg-right  bg-[length:70vw_auto]  max-w-screen mx-auto h-[107vh] rounded-xl relative overflow-hidden"
      style={{
        backgroundImage: `url(${sec_cover})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center", // Align the image to the right and center it vertically
        backgroundSize: "auto 100%", // Scale the image to fit the height of the container
        
        margin: 0,
        padding: 0,
        borderRadius: "10px",
      }}
    >

      <div
        className="absolute inset-0 sm:bg-transparent bg-black  opacity-25 sm:opacity-0"
        style={{
          filter: "blur(5px)", 
        }}
      ></div>

      
      <div className="sm:absolute relative  mx-20  mt-6  right-0 sm:-ml-0  z-10 h-screen pt-20">
        <ol className="sm:absolute relative  right-0 sm:w-[40vw]   text-gray-200 sm:text-gray-700 border-l border-gray-400">
        <AnimatedListItem delay={0}>
            <li className="mb-20 ms-16">
                <span className="absolute flex items-center justify-center w-20 h-20 bg-green-200 rounded-full -start-10 ring-4 ring-white">
                <img src={work} className='w-14 h-14 text-gray-500'/>
                </span>
                <h3 className="font-semibold pt-3 text-3xl leading-tight">
                Career
                </h3>
                
            </li>
              </AnimatedListItem>
            
              <AnimatedListItem delay={0.2}>
              <li className="mb-20 ms-16">
                <span className="absolute flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full -start-10 ring-4 ring-white">
                <img src={work} className='w-14 h-14 text-gray-500'/>

                </span>
                <h3 className="font-medium text-2xl leading-tight">Clean Casa</h3>
                <p className="text-sm">Is a company that specializes in cleaning services. Their UI design should reflect their brand's commitment to cleanliness, efficiency, and customer satisfaction. <br/>
                <span className='text-[#c0fdab] sm:text-[#329a0f] font-semibold'>
                Freelance Aug 2024</span>
                </p>
            </li>
              </AnimatedListItem>
            
              <AnimatedListItem delay={0.4}>
              <li className="mb-20 ms-16">
                <span className="absolute flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full -start-10 ring-4 ring-white">
                <img src={work} className='w-14 h-14 text-gray-500'/>

                </span>
                <h3 className="font-medium text-2xl leading-tight">HH Design · Internship</h3>
                <p className="text-sm">My graphic design internship was transformative, allowing me to apply classroom knowledge to real-world projects and develop valuable skills across various assignments. <br/>
                <span className='text-[#c0fdab] sm:text-[#329a0f] font-semibold'>
                Jun 2024 - Jul 2024 </span>
                </p>
                </li>
              </AnimatedListItem>
            
              <AnimatedListItem delay={0.6}>
            <li className="ms-16">
                <span className="absolute flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full -start-10 ring-4 ring-white">
                <img src={work} className='w-14 h-14 text-gray-500'/>
                  
                </span>
                <h3 className="font-medium text-2xl leading-tight">e-Training · Freelance</h3>
                <p className="text-sm">a web-based platform offering comprehensive training resources. Its UI design should be intuitive, engaging, and foster a positive learning experience. <br/>
                <span className='text-[#c0fdab] sm:text-[#329a0f] font-semibold'>
                Nov 2023 - Dec 2023</span>
                </p>
            </li>
              </AnimatedListItem>
        </ol>
      </div>
    </div>
    </div>
  );
}
