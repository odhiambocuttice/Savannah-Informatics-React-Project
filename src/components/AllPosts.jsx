import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const { Button } = useContext(DataContext);

  const fetchPosts = () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    axios.get(url).then((response) => setPosts(response.data));
  };
  fetchPosts();

  console.log(posts);

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
            <div className="loading-skeleton">
              Click user's number to their load posts....
              <div className="spinner-border text-primary"></div>
            </div>
          )}
        </ol>
      </div>
    </div>
  );
};
