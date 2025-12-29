const Header = ({ title, bgColor }) => {
  return (
    <header className={`flex flex-col items-center gap-3 p-4 ${bgColor} text-white`}>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl text-blue-100">
        Building modern, scalable, and elegant web experiences
      </p>
    </header>
  );
};

export default Header;
