import { Auth, Blogs, Blog, AddNew } from "./components";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="">
      {/* <Auth /> */}
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route index element={<Blogs />} />
        <Route path={"/admins"} element={<Auth />} />
        <Route path={"/new"} element={<AddNew />} />
        <Route path={"/:id"} element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
