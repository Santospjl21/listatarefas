import React from 'react'

const Formulario = ({adicionarTarefa}) => {
  let[nome, setNome]= React.useState("dsvd");
  let[descricao, setDescricao]= React.useState("sdvds");
 const lidarFormulario = (e) => {
  e.preventDefault();
   if(!nome|| !descricao) return;
   console.log("teste")
  adicionarTarefa(nome, descricao)
  setNome("")
  setDescricao("")
 }
 
  return(


    <div className='Formulario'>
      <form onSubmit={lidarFormulario}>
        <input value={nome}type="text" placeholder='Nome da Tarefa' onChange={(e)=>{setNome(e.target.value)}} />
        <input value={descricao} type="text" placeholder='Descricao da Tarefa' onChange={(e)=>{setDescricao(e.target.value)}}/>
        <button type='submit'>Confirmar</button>
        </form>
    </div>
  )
}

export default Formulario