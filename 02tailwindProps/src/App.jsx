import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <p></p>
      <Card
        text={
          "If your search history is filled with ‘places to visit near Kanakapura Road’, Bilikal Rangaswamy Betta is your answer for sure! Standing tall amidst the lush greenery and dense woods, this hill offers a peaceful morning in the lap of nature to its visitors."
        }
        name={"vishnu"}
      />
      <Card
        text={
          "If your search history is filled with ‘places to visit near Kanakapura Road’, Bilikal Rangaswamy Betta is your answer for sure! Standing tall amidst the lush greenery and dense woods, this hill offers."
        }
        name={"bandlamudi"}
      />
      <Card
        text={
          "If your search history is filled with ‘places to visit near Kanakapura Road’, Bilikal Rangaswamy Betta is your answer for sure! Standing tall."
        }
        name={"vishnuvardhan"}
      />
    </div>
  );
}

export default App;
