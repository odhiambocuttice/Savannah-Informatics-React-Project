import { useState } from "react";
import axios from "axios";

export const EditName = ({ conname }) => {
  const [title, setTitle] = useState("");
  // const [status, setUserID] = useState(0);

  const onTitleChange = (e) => setTitle(e.target.value);

  const [name, setName] = useState([]);
  const [iniName, setIniName] = useState(conname);

  const postName = (e) => {
    e.preventDefault();

    const data = { title };
    const headers = { "Content-Type": "application/json" };
    const config = { headers };
    const url = "https://jsonplaceholder.typicode.com/posts";

    axios
      .post(url, data, config)
      .then((response) => {
        console.log(response.status);

        //status
        console.log(response.data);
        alert(response.status);
      })
      .catch((e) => console.log(e));

    setName([data]);

    // validate input type
    if (isNaN(title)) {
      setIniName(data.title);
    } else alert("Input must be a string");
  };

  return (
    <div className="row g-3 align-items-center">
      <div>
        <h6>Name: {iniName}</h6>
      </div>

      <div class="input-group mb-4">
        <input
          className="form-control"
          type="text"
          placeholder="Edit Name"
          value={title}
          onChange={onTitleChange}
          required
        />

        <button
          className="btn btn-primary input-group-text"
          type="submit"
          onClick={postName}
          disabled={!title}
        >
          Edit Name
        </button>
      </div>
    </div>
  );
};
