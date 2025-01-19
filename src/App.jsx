/* eslint-disable react/prop-types */

import { useState } from "react";
// import { Fragment } from "react";

import image1 from "../assets/images1.jpg";
// import image2 from "../assets/images2.jpg";

import Section from "./components/Sections";
import Tabs from "./Tabs";

function App() {
  const [content, setContent] = useState("Tab-1_Content");

  function generateRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
  }
  const readDescription = ["Fundamental", "Crucial", "Core"];
  const description = readDescription[generateRandomInt(3) - 1];

  function handleSelect(selectedButton) {
    setContent(selectedButton);
  }

  const data = {
    age: 20,
    name: "smit",
  };

  // let text = <div>smit</div>; we can fucking do this !!
  return (
    <>
      {/* {text} */}
      <Section title="Rest Operator">
        <Header {...data} />
      </Section>
      <hr />
      <Section title="Dynamic text">
        <h3>Dynamic text: {description}</h3>
      </Section>
      <hr />
      <Section title="Image import in React">
        <CoreComp title="Forest - dark" image={image1} />
        {/* <CoreComp title="Forest - warm" image={image2} /> */}
      </Section>
      <hr />
      <Section title="Tabs" className="tab-container">
        <Tabs
          buttonWrapper="menu" // default set to menu
          // buttonWrapper={Section}
          buttons={
            <>
              <TabButton
                isSelected={content === "Tab-1_Content"}
                onClick={() => handleSelect("Tab-1_Content")}
              >
                Tab-1
              </TabButton>
              <TabButton
                isSelected={content === "Tab-2_Content"}
                onClick={() => handleSelect("Tab-2_Content")}
              >
                Tab-2
              </TabButton>
              <TabButton
                isSelected={content === "Tab-3_Content"}
                onClick={() => handleSelect("Tab-3_Content")}
              >
                Tab-3
              </TabButton>
              <TabButton
                isSelected={content === "Tab-4_Content"}
                onClick={() => handleSelect("Tab-4_Content")}
              >
                Tab-4
              </TabButton>
            </>
          }
        >
          {content}
        </Tabs>
      </Section>
      <hr />
    </>
  );
}
export default App;

function Header({ age, name }) {
  return (
    <header>
      <h3>Header</h3>
      <h4>{age}</h4>
      <h4>{name}</h4>
    </header>
  );
}

function CoreComp({ title, image }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt="..." />
    </div>
  );
}

function TabButton({ children, isSelected, ...props }) {
  return (
    <>
      <button className={isSelected ? "active" : null} {...props}>
        {children}
      </button>
    </>
  );
}
