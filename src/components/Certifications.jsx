import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CertificationCard = ({ title, provider, date, link }) => {
  const cardRef = React.useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  const handleClick = () => {
    const el = cardRef.current;

    gsap.timeline()
      .to(el, { scale: 1.1, boxShadow: "0px 0px 20px rgba(0, 162, 255, 0.8)", duration: 0.3, ease: "power2.out" }) // Scale up + glow effect
      .to(el, { scale: 1, boxShadow: "0px 0px 10px rgba(0, 162, 255, 0.4)", duration: 0.2, ease: "power2.in" }) // Shrink back
      .add(() => window.open(link, "_blank"), "-=0.2"); // Open link
  };

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      className="bg-gray-900 p-6 rounded-3xl xs:w-[320px] w-full shadow-lg cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-xl"
    >
      <h3 className="text-white font-semibold text-[20px]">{title}</h3>
      <p className="text-gray-400 text-[16px] mt-2">{provider}</p>
      <p className="text-blue-400 text-[14px] mt-1">{date}</p>
    </div>
  );
};

const Certifications = () => {
  return (
    <div className="mt-12 bg-gray-800 rounded-[20px]">
      <div className={`bg-gray-700 rounded-2xl ${styles.padding} min-h-[250px]`}>
        <div>
          <p className={styles.sectionSubText}>Recognitions & Accomplishments</p>
          <h2 className={styles.sectionHeadText}>Certifications</h2>
        </div>
      </div>
      <div className="-mt-20 pb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {certifications.map((cert) => (
          <CertificationCard key={cert.title} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "");
