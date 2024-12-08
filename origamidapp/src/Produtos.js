import React from "react";
import Produto from "./Produto";
import Titulo from "./Titulo";

const Produtos = () => {
  const produtos = [
    {
      nome: "Notebook",
      propriedades: ["16gb ram", "512gb"],
    },
    {
      nome: "Iphone",
      propriedades: ["4gb ram", "512gb"],
    },
  ];

  return (
    <div>
      <Titulo texto="Produtos" cor="blue" />
      <p>
        {produtos.map((val) => {
          return <Produto key={val} {...val} />;
        })}
      </p>
    </div>
  );
};

export default Produtos;
