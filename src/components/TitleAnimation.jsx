import { useEffect, useState } from "react";

const TitleAnimation = () => {
  const text = "A'ESOP FABLES";
  const delay = 200;

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    let timerId;

    const typeNextCharacter = () => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(index));
        index++;
        timerId = setTimeout(typeNextCharacter, delay);
      }
    };

    typeNextCharacter();

    return () => {
      // Cleanup function to clear the timeout on unmount
      clearTimeout(timerId);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return <h1 id="typewriter">{displayText}</h1>;
};

export default TitleAnimation;
