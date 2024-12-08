import React from "react";

const Produto = ({ nome, propriedades }) => {
  return (
    <div>
      <h2>Nome: {nome}</h2>
      <p>
        {propriedades.map((info) => (
          <p>{info}</p>
        ))}
      </p>
    </div>
  );
};

export default Produto;
