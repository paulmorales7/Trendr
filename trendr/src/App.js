import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Navbar />
        <Wrapper>
          {/* <Trends /> */}
        </Wrapper>
      <Footer />
    </div> 
  );
}

export default App;
