import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Academics from "./components/Academics";
import Form from "./components/Form";
function App( props) {
  return (
   <div>
    <Header />
    <Hero />
    <Academics title='ACADEMICS' />
    <Form />
    <Footer />

   </div>
  );
}

export default App;
