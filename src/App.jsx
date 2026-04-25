import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const cardData = [
    {
      title: "Card Title 1",
      description: "Card Description 1",
    },
    {
      title: "Card Title 2",
      description: "Card Description 2",
    },
    {
      title: "Card Title 3",
      description: "Card Description 3",
    },
  ];
  return (
    <>
      <Header />
      <Card cardData={cardData} />
      <Footer />

      {/* With conditional props
      <Footer
        companyName={"logicLayer"}
        year={2024}
        showLinks={true}
        links={[
          { text: "Home", url: "/" },
          { text: "About", url: "/about" },
        ]}
        customText={null}
      /> */}
    </>
  );
}

export default App;
