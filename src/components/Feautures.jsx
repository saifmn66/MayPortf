import { useInView, animated } from "@react-spring/web";
import ui from "../img/illustrator.svg";
import pho from "../img/photoshop.svg";
import adin from "../img/in.svg";
import fig from "../img/figma.svg";
import energy from "../img/energy.svg";

export const Feature = () => {
  const [ref1, springs1] = useInView(
    () => ({
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      config: { duration: 800 },
    }),
    { threshold: 0.5, triggerOnce: true }
  );

  const [ref2, springs2] = useInView(
    () => ({
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      config: { duration: 800 },
    }),
    { threshold: 0.5, triggerOnce: true }
  );

  const [ref3, springs3] = useInView(
    () => ({
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      config: { duration: 800 },
    }),
    { threshold: 0.5, triggerOnce: true }
  );

  const [ref4, springs4] = useInView(
    () => ({
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      config: { duration: 800 },
    }),
    { threshold: 0.5, triggerOnce: true }
  );

  return (
    <div className="px-4 container py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
            "Empowering Creativity with Cutting-Edge Design Skills."
          </h2>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-700 md:text-lg">
            My expertise in Adobe Illustrator, Photoshop, InDesign, and Figma allows me to transform ideas into visually stunning designs. From precise vector art to intuitive user interfaces, I leverage these tools to deliver impactful and innovative design solutions.
          </p>
        </div>
      </div>
      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <animated.div
          ref={ref1}
          style={springs1}
          className="sm:block flex mx-auto sm:justify-between"
        >
          <div className="flex sm:mr-0 mr-14 items-center justify-center hover:w-20 hover:h-20 duration-500 sm:w-16 w-20 h-20 sm:h-16 mb-4 rounded-full bg-indigo-50">
            <img src={ui} alt="Illustrator" />
          </div>
          <div className="max-w-[50vw]">
            <h6 className="mb-2 text-lg font-semibold leading-5">
            Adobe Ilustrator 
            </h6>
            <p className="mb-3 text-sm text-gray-900">
            Illustrate the essence with creative precision.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <img className="w-5 h-5 mt-px " src={energy} alt="Energy" />
                </span>
                Typography 
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <img className="w-5 h-5 mt-px " src={energy} alt="Energy" />
                </span>
                Isometric Design Techniques
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <img className="w-5 h-5 mt-px " src={energy} alt="Energy" />
                </span>
                Logo Design Mastery
              </li>
            </ul>
          </div>
        </animated.div>

        <animated.div
          ref={ref2}
          style={springs2}
          className="sm:block flex mx-auto sm:justify-between"
        >
          <div className="flex items-center mr-14 hover:w-20 hover:h-20 duration-500 justify-center sm:w-16 w-20 h-20 sm:h-16 mb-4 rounded-full bg-indigo-50">
            <img src={pho} alt="Photoshop" />
          </div>
          <div className="max-w-[50vw]">
            <h6 className="mb-2 text-lg font-semibold leading-5">
            Adobe Photoshop
            </h6>
            <p className="mb-3 text-sm text-gray-900">
            Transform pixels into powerful visuals.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <img className="w-5 h-5 mt-px " src={energy} alt="Energy" />
                </span>
                Photo Retouching
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <img className="w-5 h-5 mt-px " src={energy} alt="Energy" />
                </span>
                Layering and Masking
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <img className="w-5 h-5 mt-px " src={energy} alt="Energy" />
                </span>
                Filters and Text Effects
              </li>
            </ul>
          </div>
        </animated.div>

        <animated.div
          ref={ref3}
          style={springs3}
          className="sm:block flex mx-auto sm:justify-between"
        >
          <div className="flex items-center mr-14 hover:w-20 hover:h-20 duration-500 justify-center sm:w-16 w-[4.5rem] h-[4.5rem] sm:h-16 mb-4 rounded-full bg-indigo-50">
            <img src={adin} alt="InDesign" />
          </div>
          <div className="max-w-[50vw]">
            <h6 className="mb-2 text-lg font-semibold leading-5">
            Adobe Indesign
            </h6>
            <p className="mb-3 text-sm text-gray-900">
            Design with precision, layout with clarity.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <img className="w-5 h-5 mt-px " src={energy} alt="Energy" />
                </span>
                Page Layout Design
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <img className="w-5 h-5 mt-px " src={energy} alt="Energy" />
                </span>
                Mastering Styles and Templates
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <img className="w-5 h-5 mt-px " src={energy} alt="Energy" />
                </span>
                Interactive PDF Creation
              </li>
            </ul>
          </div>
        </animated.div>

        <animated.div
          ref={ref4}
          style={springs4}
          className="sm:block flex mx-auto sm:justify-between"
        >
          <div className="flex items-center mr-14 hover:w-20 hover:h-20 duration-500 justify-center sm:w-16 w-20 h-20 sm:h-16 mb-4 rounded-full bg-indigo-50">
            <img src={fig} alt="Figma" />
          </div>
          <div className="max-w-[50vw]">
            <h6 className="mb-2 text-lg font-semibold leading-5">
              Figma
            </h6>
            <p className="mb-3 text-sm text-gray-900">
            Collaborate live, design with confidence.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <img className="w-5 h-5 mt-px " src={energy} alt="Energy" />
                </span>
                Collaborative Feedback and Commenting
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <img className="w-5 h-5 mt-px " src={energy} alt="Energy" />
                </span>
                Plugin Integration
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <img className="w-5 h-5 mt-px " src={energy} alt="Energy" />
                </span>
                Version Control
              </li>
            </ul>
          </div>
        </animated.div>
      </div>
    </div>
  );
};
