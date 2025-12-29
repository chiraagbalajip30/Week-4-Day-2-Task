import Header from "../Practical Task/Header";
import Button from "../Practical Task/Button";
import Footer from "../Practical Task/Footer";
import Card from "../Practical Task/card";

function PracticalTaskCode() {
  const cardsData = [
    {
      title: "Modern Web Development",
      description:
        "We build fast, scalable, and elegant web applications using modern technologies.",
      accentColor: "bg-blue-500",
    },
    {
      title: "UI/UX Design",
      description:
        "Creating beautiful and intuitive user interfaces that delight users.",
      accentColor: "bg-green-500",
    },
    {
      title: "Cloud Solutions",
      description:
        "Deploy and manage applications efficiently on cloud platforms.",
      accentColor: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header title="Navatara Technologies" bgColor="bg-blue-500" />

      <main className="grow flex flex-col gap-y-8 items-center justify-around mt-4 ">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            accentColor={card.accentColor}
          />
        ))}
        <Button />
      </main>

      <Footer />
    </div>
  );
}

export default PracticalTaskCode;
