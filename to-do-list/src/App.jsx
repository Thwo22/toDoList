function App(){

    function inputChange(event) {
        console.log(event.target.value)

    }
    return (
        <div>
            <input placeholder="Digite a sua tarefa" onChange={inputChange}/>
            <button>Adicionar Tarefa</button>


        </div>
    )
}

export default App 