import { Auth, Blogs, Blog } from "./components";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="overflow-hidden">
      {/* <Auth /> */}
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route index element={<Auth />} />
        <Route path={"/blogs"} element={<Blogs />} />
        <Route path={"/blogs/:id"} element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
