import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello there 👋
        <br />
        <br />
         I'm Ritika Semwal, a third year undergraduate student of the Department of Computer Science and Engineering, 
         IIIT Agartala, India. I was born and raised in Dehradun, Uttarakhand. I completed my schooling from 
         The Indian Academy(CBSE), Dehradun.
         I have a keen interest in DSA and Web Development.
        I'm a web developer with a focus on the MERN stack, but still exploring other technologies 
        and frameworks that catch my interest.

        </p>

        <br />

        <p className="text-xl">
        Apart from coding, I also love listening music, watching movies and travelling.
         I enjoy learning new things. I am a Potterhead🧙 and a huge zombies🧟‍♀️ fan too.
        
        </p>
      </div>
    </div>
  );
};

export default About;
