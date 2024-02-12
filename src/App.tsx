import { useEffect, useState } from "react";
import { tg } from "./tg.api";
import "./App.css";

const App = () => {
  interface User {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
    allows_write_to_pm: boolean;
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

  return (
    <div>
      <h3>init.data: </h3>

      <div className="data-container">
        {userData ? (
          <div>
            <p>{initData}</p>
            <p>Username: {userData.username}</p>
            <p>First Name: {userData.first_name}</p>
            <p>Last Name: {userData.last_name}</p>
            <p>Language code: {userData.language_code}</p>
            <p>First Name: {userData.first_name}</p>
            <p>Last Name: {userData.allows_write_to_pm}</p>
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
