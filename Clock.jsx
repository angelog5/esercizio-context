import { useContext, useState, useEffect } from "react";
import LanguageContext from "./LanguageContext";

export default function Clock() {
  const language = useContext(LanguageContext);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const getCurrentTimeMessage = (lang) => {
    switch (lang) {
      case "it":
        return "Orario corrente:";
      case "en":
      default:
        return "Current time:";
    }
  };

  return (
    <div>
      <h2>{getCurrentTimeMessage(language)}</h2>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  );
}
