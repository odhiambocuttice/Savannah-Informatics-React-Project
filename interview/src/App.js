import "./App.css";
import { TopBar } from "./components/TopBar";
import { Routes, Route } from "react-router-dom";
import { Residence } from "./components/Residence";
import { DataProvider } from "./context/DataContext";
import { Posts } from "./components/Posts";
import { AllPosts } from "./components/AllPosts";
import { Users } from "./components/Users";

const App = () => {
  return (
    <div className="App">
      <DataProvider>
        <TopBar />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route exact path="/post/:id" element={<Posts />} />
          <Route exact path="/posts" element={<AllPosts />} />
          <Route path="residence" element={<Residence />} />
        </Routes>
      </DataProvider>
    </div>
  );
};

export default App;
