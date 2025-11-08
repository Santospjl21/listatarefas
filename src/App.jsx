import React from 'react'
import Tarefa from './components/Tarefa'
import Formulario from './components/Formulario'
import './App.css'

const App = () => {
    let [listatarefas, setListatarefas] = React.useState([ 
    {id:0, nome:"Passear com Cachorro", descricao:"Passear no dia 05/11", status:"Pendente"},
    {id:1, nome:"Estudar", descricao:"React", status:"Pendente"},
    {id:3, nome:"Sei la", descricao:"Fazer alguma coisa", status:"Pendente"},
  ]);
   
const removerTarefa = (id) => {
  const listaAtualizada = listatarefas.filter((tarefa) => tarefa.id != id)
  setListatarefas(listaAtualizada)
}
 const adicionarTarefa = (nome, descricao) => {
  const tarefa = {id : listatarefas.length + 1, nome:nome, descricao:descricao, status:"pendente"}
   setListatarefas ([...listatarefas, tarefa]);
  }

  return (
    <div className='App'>
      <h1>Lista de Tarefas</h1>
      <div className='ListaTarefas'>
        {
          listatarefas.map(
            (tarefa) =>
              (<Tarefa 
                id={tarefa.id} 
                nome={tarefa.nome}
                descricao={tarefa.descricao}
                status={tarefa.status}
                removerTarefa={()=>removerTarefa(tarefa.id)}
              />) 
          )
        }
      </div>
      <Formulario adicionarTarefa={adicionarTarefa}/>
    </div>
  )
}

export default App