import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const Residence = () => {
  const { Button, aptUserHomeType, suiteUserHomeType } =
    useContext(DataContext);

  return (
    <div>
      <div className=" container text-dark d-flex">
        <ol className="m-4">
          {aptUserHomeType.length > 0 || suiteUserHomeType.length > 0 ? (
            <div>
              {aptUserHomeType.map((type) => (
                <li className="" key={type}>
                  <h3 className="text-start">{type}</h3>
                </li>
              ))}
              {suiteUserHomeType.map((type) => (
                <li className="" key={type}>
                  <h3 className="text-start">{type}</h3>
                </li>
              ))}
            </div>
          ) : (
            <span className="container">
              Loading users' residences....
              <div className="spinner-border text-primary"></div>
            </span>
          )}
        </ol>
        <div className="col-8 m-4">
          <div className="m-8">
            <h1>Number of users in Apt: {aptUserHomeType.length}</h1>
          </div>
          <div>
            <h1>Number of users in Suites: {suiteUserHomeType.length}</h1>
          </div>
        </div>
      </div>
      <Button />
    </div>
  );
};
