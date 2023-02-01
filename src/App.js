import { useState, useEffect } from "react";
import Button from "./components/Button";
import People from "./components/People";
import Title from "./components/Title";
import people from "./data";

function App() {
  const [Index, setIndex] = useState(0);

  useEffect(() => {
    const lasIndex = people.length - 1;
    if (Index < 0) {
      setIndex(lasIndex);
    }
    if (Index > lasIndex) {
      setIndex(0);
    }
  }, [Index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(Index + 1);
    }, 7000);
    return () => clearInterval(slider);
  }, [Index]);

  return (
    <section className="section">
      <Title />
      <div className="section-center">
        <People people={people} Index={Index} />
        <Button classname={"prev"} setIndex={setIndex} Index={Index} />
        <Button classname={"next"} setIndex={setIndex} Index={Index} />
      </div>
    </section>
  );
}

export default App;
