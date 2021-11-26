import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const DataContext = createContext({});

export const Button = () => {
  return (
    <div>
      <div className="container d-flex p-2">
        <button className="btn btn-primary">
          <Link className="text-white text-decoration-none" to="/">
            Back to users
          </Link>
        </button>
      </div>
    </div>
  );
};

export const DataProvider = ({ children }) => {
  // varibles
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [usersID, setUsersID] = useState();

  //hooks
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    axios.get(url).then((response) => setUsers(response.data));
  }, []);

  const fetchPosts = (event) => {
    const userId = event.target.innerText;
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    axios.get(url).then((response) => setPosts(response.data));
    setUsersID(userId);
  };
  const userIds = users.map((user) => user.id);
  const userHomeType = users.map((user) => user.address["suite"]);
  const aptUserHomeType = userHomeType.filter((user) => user.includes("Apt"));
  const suiteUserHomeType = userHomeType.filter((user) =>
    user.includes("Suite")
  );
  return (
    <DataContext.Provider
      value={{
        posts,
        fetchPosts,
        users,
        usersID,
        userIds,
        Button,
        aptUserHomeType,
        suiteUserHomeType,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
