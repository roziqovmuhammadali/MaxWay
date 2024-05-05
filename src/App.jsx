import { useState } from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Top from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      {/* <Navbar /> */}
      <Top />
      <Footer />
    </div>
  );
}

export default App;
