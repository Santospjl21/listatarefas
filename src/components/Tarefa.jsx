import React from "react";
import "./Tarefa.css";

const Tarefa = ({ id, nome, descricao, status, removerTarefa }) => {
  return (
    <div className="Tarefa">
      <div className="texto">
        <h1 className="nome">{nome}</h1>
        <p className="descricao">{descricao}</p>
        <p className="status">{status}</p>
      </div>

      <div className="botoes">
        <button className="concluir">Concluir</button>
        <button className="deletar" onClick={removerTarefa}>Deletar</button>
      </div>
    </div>
  );
};

export default Tarefa;
