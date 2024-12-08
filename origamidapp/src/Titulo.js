import React from "react";

const Titulo = ({ cor, texto }) => {
  return <h2 style={{ color: cor }}>{texto}</h2>;
};

export default Titulo;
