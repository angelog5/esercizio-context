import { useState } from "react";
import Clock from "./assets/components/Clock";
import LanguageContext from "./assets/components/LanguageContext";

function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <h1>Select Language:</h1>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="it">Italian</option>
      </select>
      <hr />
      <LanguageContext.Provider value={language}>
        <Clock />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
