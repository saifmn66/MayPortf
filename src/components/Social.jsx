
import { useSpring, animated, useInView } from '@react-spring/web';
import insta from "../img/instagram.svg";
import face from "../img/facebook.svg";
import gmail from "../img/gmail.svg";
import whats from "../img/whatsapp.svg";

export default function Social() {
    const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const fadeInContactDiv1 = useSpring({
        opacity: contactInView ? 1 : 0,
        transform: contactInView ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 1000 },
        delay: 200,
      });
      const fadeInContactDiv2 = useSpring({
        opacity: contactInView ? 1 : 0,
        transform: contactInView ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 1000 },
        delay: 400,
      });
      const fadeInContactDiv3 = useSpring({
        opacity: contactInView ? 1 : 0,
        transform: contactInView ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 1000 },
        delay: 600,
      });
      const fadeInContactDiv4 = useSpring({
        opacity: contactInView ? 1 : 0,
        transform: contactInView ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 1000 },
        delay: 800,
      });
  return (
    <div>
      <div className="font-[sans-serif] py-24 max-w-6xl mx-auto p-4">
      <div ref={contactRef} className="bg-white rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <animated.div style={fadeInContactDiv1} className="flex flex-col items-center bg-white">
            <img src={whats} className='w-8' />
            <div className="mt-4 text-center">
              <h4 className="text-gray-800 text-base font-bold">Call Us</h4>
              <p className="text-sm text-gray-500 mt-2"> +40 791 536 076</p>
            </div>
          </animated.div>

          <animated.div style={fadeInContactDiv2} className="flex flex-col items-center bg-white">
            <img src={gmail} className='w-8' />
            <div className="mt-4 text-center">
              <h4 className="text-gray-800 text-base font-bold">Mail</h4>
              <p className="text-sm text-gray-500 mt-2">mariem.ouni66@gmail.com</p>
            </div>
          </animated.div>

            <a href='https://www.facebook.com/profile.php?id=100020632549786'>
          <animated.div style={fadeInContactDiv3} className="flex flex-col items-center bg-white">
            <img src={face} className='w-8' />
            
            <div className="mt-4 text-center">
              <h4 className="text-gray-800 text-base font-bold">Facebook</h4>
              <p className="text-sm text-gray-500 mt-2">Maryem H'i</p>
            </div>
          </animated.div>
            </a>
          <a href='https://www.instagram.com/maryemm_hi/?hl=fr'> 
          <animated.div style={fadeInContactDiv4} className="flex flex-col items-center bg-white">
            <img src={insta} className='w-8' /> 
            <div className="mt-4 text-center">
              <h4 className="text-gray-800 text-base font-bold">Instagram</h4>
              <p className="text-sm text-gray-500 mt-2">Maryem H'i</p>
            </div>
          </animated.div>
          </a>

        </div>

        
      </div>
    </div>
    </div>
  )
}
