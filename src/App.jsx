/* eslint-disable react/prop-types */
import image1 from "../assets/images1.jpg";
import image2 from "../assets/images2.jpg";
import { useState } from "react";
const readDescription = ["Fundamental", "Crucial", "Core"];

function generateRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}
function App() {
  const [content, setContent] = useState("please select a tab");

  const description = readDescription[generateRandomInt(3) - 1];

  function handleSelect(selectedButton) {
    setContent(selectedButton);
  }

  const data = {
    age: 20,
    name: "smit",
  };

  // let text = <div>smit</div>;
  return (
    <>
      {/* {text} */}
      <section>
        <Header {...data} />
      </section>
      <section>
        <h3>{description}</h3>
        <CoreComp title="Forest - dark" image={image1} />
        <CoreComp title="Forest - warm" image={image2} />
      </section>
      <section>
        <TabButton
          isSelected={content === "tab1"}
          onSelect={() => handleSelect("tab1")}
        >
          tab1
        </TabButton>
        <TabButton
          isSelected={content === "tab2"}
          onSelect={() => handleSelect("tab2")}
        >
          tab2
        </TabButton>
        <TabButton
          isSelected={content === "tab3"}
          onSelect={() => handleSelect("tab3")}
        >
          tab3
        </TabButton>
        <TabButton
          isSelected={content === "tab4"}
          onSelect={() => handleSelect("tab4")}
        >
          tab4
        </TabButton>
        <br />
        {content}
      </section>
    </>
  );
}
export default App;

function Header({ age, name }) {
  return (
    <header>
      <h3>{age}</h3>
      <h3>{name}</h3>
      <h1>Header</h1>
    </header>
  );
}

function CoreComp({ title, image }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt="..." />
    </div>
  );
}

function TabButton({ children, onSelect, isSelected }) {
  return (
    <>
      <button className={isSelected ? "active" : null} onClick={onSelect}>
        {children}
      </button>
    </>
  );
}
