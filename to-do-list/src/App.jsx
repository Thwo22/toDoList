import { useState } from "react";

useState

function App(){

    const [tarefas, setTarefas] = useState(["insira sua tarefa"])
    let tarefa 

    function inputChange(event) {
        
        tarefa = event.target.value
        console.log(tarefa);

    }

    function clicou() {
        setTarefas([`nova tarefa`])
    }
    return (
        <div>
            <input placeholder="Digite a sua tarefa" onChange={inputChange}/>
            <button onClick={clicou}>Adicionar Tarefa</button>

            <ul>
                {
                    tarefas.map(item => (
                        <li>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default App 