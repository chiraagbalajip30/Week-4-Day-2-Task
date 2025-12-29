// Hero.js
import Button2 from "./Button2";

const Hero = ({ heading, subHeading, buttonText, bgColor }) => {
  return (
    <section
      className={`flex flex-col items-center justify-center text-center p-12 ${bgColor} text-white`}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h2>
      <p className="text-lg md:text-2xl mb-6">{subHeading}</p>
      <Button2 text={buttonText} />
    </section>
  );
};

export default Hero;
