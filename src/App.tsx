import { useEffect, useState } from "react";
import { tg } from "./tg.api";

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
      <p>init.data{initData}</p>
      <button onClick={handleButtonClick}>INIT.Data</button>
    </div>
  );
};

export { App };
