// Header.js
import { Link } from "react-router-dom";
import PracticalTaskCode from "./Practical Task/PracticalTaskCode";

const Header2 = ({ title, tagline, bgColor }) => {
  return (
    <header
      className={`flex flex-col items-center gap-2 p-6 ${bgColor} text-white`}
    >
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg">{tagline}</p>
      <p className="text-lg text-gray-300">
        Clickthe Button Below to redirect to Practical Task Page
      </p>
      <Link to="/practicaltask">
        <button className="px-6 py-3 bg-[#58b6ff] text-white rounded-xl hover:bg-blue-500 transition">
          Click Me
        </button>
      </Link>
    </header>
  );
};

export default Header2;
