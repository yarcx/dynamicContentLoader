import "./styles.css";
import { useState } from "react";

const tabs = [
  { title: "BED", content: "Bachelors degree and the rest" },
  { title: "Aeed", content: "Athletic  degree and the rest" },
  { title: "Ceeed", content: "C.o.e certificate abi na weting be this" }
];

export default function App() {
  const [content, setContent] = useState(tabs[0]);
  const [selected, setSelected] = useState(0);

  const handleChangeTab = (tab, index) => {
    setContent(tab);
    setSelected(index);
  };

  return (
    <div className="App">
      <nav>
        {tabs.map((tab, index) => (
          <li
            style={{
              background: selected == index ? "coral" : "none",
              color: selected == index ? "whitesmoke" : "Black"
            }}
            onClick={() => handleChangeTab(tab, index)}
          >
            {tab.title}
          </li>
        ))}
      </nav>
      <h2>Start editing to see some magic happen!</h2>
      <h1>{content.title}</h1>
      <p>{content.content}</p>
    </div>
  );
}
