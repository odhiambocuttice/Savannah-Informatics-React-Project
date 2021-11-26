import { EditName } from "./EditName";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const Users = () => {
  const { fetchPosts, users } = useContext(DataContext);

  return (
    <div className="m-5 p-2 mt-2 ">
      <div className="m-5">
        {users.length > 0 ? (
          <div className="d-flex flex-wrap justify-content-evenly">
            {users.map((user) => (
              <div key={user.id} className="">
                <div
                  className="card mb-5 bg-light"
                  style={{ width: "18rem", height: "18rem" }}
                >
                  <div className="card-body">
                    <Link to={`/post/${user.id}`}>
                      <button
                        className="mt-4 btn btn-dark card-title"
                        onClick={fetchPosts}
                        style={{ cursor: "pointer" }}
                      >
                        {user.id}
                      </button>
                    </Link>
                    <p className="card-text">
                      <h6 className="">Username: {user.username}</h6>
                      <div className="">
                        <EditName conname={user.name} />
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <span className="container ">
            Users Loading....
            <div class="spinner-border text-primary" role="status"></div>
          </span>
        )}
      </div>
    </div>
  );
};
