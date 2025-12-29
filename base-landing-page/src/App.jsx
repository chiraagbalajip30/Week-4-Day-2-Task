import Header2 from "./components/Header2";
import Hero from "./components/Hero";
import Card2 from "./components/Card2";
import Footer2 from "./components/Footer2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PracticalTaskCode from "./components/Practical Task/PracticalTaskCode";

function App() {
  const cardsData = [
    {
      title: "Web Development",
      description: "Fast, scalable, and elegant web apps.",
      accentColor: "bg-blue-500",
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive interfaces.",
      accentColor: "bg-green-500",
    },
    {
      title: "Cloud Solutions",
      description: "Efficient cloud deployment and management.",
      accentColor: "bg-purple-500",
    },
  ];

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Routes>
          <Route exact path="/practicaltask" element={<PracticalTaskCode />} />
        </Routes>
        <Header2
          title="Navatara Technologies"
          tagline="Building modern, scalable web experiences"
          bgColor="bg-blue-500"
        />

        <Hero
          heading="Innovate Your Digital Presence"
          subHeading="We deliver high-quality web solutions for businesses worldwide."
          buttonText="Get Started"
          bgColor="bg-indigo-600"
        />

        <main className="grow flex flex-col items-center justify-center px-4 py-12">
          <div className="grid gap-6 w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {cardsData.map((card, index) => (
              <Card2
                key={index}
                title={card.title}
                description={card.description}
                accentColor={card.accentColor}
              />
            ))}
          </div>
        </main>

        <Footer2 text="© 2025 Navatara Technologies. All rights reserved." />
      </div>
    </Router>
  );
}

export default App;
