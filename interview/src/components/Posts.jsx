import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";

export const Posts = ({ userId }) => {
  //variables
  const [posts, setPosts] = useState([]);
  const { usersID, Button } = useContext(DataContext);

  // hooks
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${usersID}`;
    axios.get(url).then((response) => setPosts(response.data));
  }, [usersID]);

  return (
    <div>
      <Button />
      <div className="container p-5 my-5 bg-dark text-white ">
        <ol className="m-4">
          {posts.length > 0 ? (
            <div>
              {posts.map((post) => (
                <li className="" key={post.id}>
                  <h3 className="text-start">{post.title}</h3>
                  <p className="text-start">{post.body}</p>
                </li>
              ))}
            </div>
          ) : (
            <span className="">
              loading posts....
              <div className="spinner-border text-primary"></div>
            </span>
          )}
        </ol>
      </div>
    </div>
  );
};
