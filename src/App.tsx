import { useEffect, useState } from "react";
import { tg } from "./tg.api";
import "./App.css";

const App = () => {
  const [initData, setInitData] = useState(null);

  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  const handleButtonClick = () => {
    const data = tg.initData;
    setInitData(data);
  };

  return (
    <div>
      <h1>init.data:</h1>
      <p>fdsfdsf{initData}</p>

      <p></p>
      <button className="button" onClick={handleButtonClick}>
        INIT.Data
      </button>
    </div>
  );
};

export { App };
