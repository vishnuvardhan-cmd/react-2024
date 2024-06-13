import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const passwordRef = useRef(null);
  const [password, setPassword] = useState("");
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [ischaractersAllowed, setIsCharactersAllowed] = useState(false);
  const [length, setLength] = useState(8);

  const generatePassword = useCallback(() => {
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumberAllowed) str += "0123456789";
    if (ischaractersAllowed) str += "`~!@#$%^&*()_+-={}[];:'.,/?";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    console.log(pass);
    setPassword(pass);
  }, [length, isNumberAllowed, ischaractersAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  useEffect(() => {
    generatePassword();
  }, [length, isNumberAllowed, ischaractersAllowed]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-600 text-orange-500">
      <h1 className="text-center text-white my-3 ">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          placeholder="password"
          className="px-3 py-1 outline-none w-full"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none px-3 py-0.5 bg-blue-700 text-white shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex gap-x-2 text-sm text-orange font-bold">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            value={length}
            min={8}
            max={100}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isNumberAllowed}
            value={isNumberAllowed}
            className="rounded-lg"
            onChange={() => {
              setIsNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="Numbers">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={ischaractersAllowed}
            value={ischaractersAllowed}
            onChange={() => {
              setIsCharactersAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charactersallowed">characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
