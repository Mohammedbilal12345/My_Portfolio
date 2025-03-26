import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 flex flex-col gap-8'>
          <p className='text-white font-medium'>Feel free to reach out through any of the options below!</p>
          
          {/* Gmail Contact */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammedbilal96654@gmail.com&su=Inquiry&body=Hello, I would like to get in touch!"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            Send Inquiry via Gmail
          </a>

          {/* WhatsApp Contact */}
          <a
            href="https://wa.me/9370778994?text=Hello, I would like to get in touch!"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-green-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            Chat on WhatsApp
          </a>

          {/* LinkedIn Contact */}
          <a
            href="https://www.linkedin.com/in/mohammed-bilal-23678328a/"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-blue-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            Connect on LinkedIn
          </a>

          {/* Google Form Contact */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdnldQperV26YdyY50UnO-qa1X2qG7eNKeNHI12Nqenz_ujYw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-yellow-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            Fill Out Contact Form
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");