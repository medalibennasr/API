
import "./App.css";
import Userlist from "./components/Userlist/Userlist";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Userlist users={users} />
    </div>
  );
}

export default App;
