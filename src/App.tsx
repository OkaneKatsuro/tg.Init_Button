import { useEffect, useState } from "react";
import { tg } from "./tg.api";
import "./App.css";

const App = () => {
  interface User {
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
  }

  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  const initData = tg.initData;

  const handleButtonClick = () => {
    const params = new URLSearchParams(initData);

    const userJson = params.get("user");
    if (userJson) {
      const user = JSON.parse(decodeURIComponent(userJson));
      setUserData(user);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div>
      <h3>init.data: </h3>

      <div className="data-container">
        {userData ? (
          <div>
            <p onClick={() => copyToClipboard(initData)}>{initData}</p>
            <p onClick={() => copyToClipboard(userData.username)}>
              Username: {userData.username}
            </p>
            <p onClick={() => copyToClipboard(userData.first_name)}>
              First Name: {userData.first_name}
            </p>
            <p onClick={() => copyToClipboard(userData.last_name)}>
              Last Name: {userData.last_name}
            </p>
            <p onClick={() => copyToClipboard(userData.language_code)}>
              Language code: {userData.language_code}
            </p>
          </div>
        ) : (
          <p>No user data</p>
        )}
      </div>
      <button className="button" onClick={handleButtonClick}>
        INIT.Data
      </button>
    </div>
  );
};

export { App };
