import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";

function App() {
  const [signedIn, setSignedIn] = useState(false);

  const handleSignedIn = () => {
    setSignedIn((prev) => !prev);
  };

  return (
    <main>
      <nav>
        <Navbar handleSignedIn={handleSignedIn} />
      </nav>
      <Blog signedIn={signedIn} />
    </main>
  );
}

export default App;
