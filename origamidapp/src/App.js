import React from "react";
import Header from "./Header";
import Produtos from "./Produtos";
import Home from "./Home";
const App = () => {
  const { pathname } = window.location;
  let Port;
  if (pathname === "/produtos") {
    Port = Produtos;
  } else {
    Port = Home;
  }
  return (
    <>
      <Header />
      <Port />
    </>
  );
};

export default App;
