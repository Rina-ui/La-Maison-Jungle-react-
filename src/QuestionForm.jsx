import React, {useState} from 'react'


export function QuestionForm(){
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    return(
        <div>
            <textarea value={inputValue} onChange={(e) => setInputValue(e.target.value)}></textarea>
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}

function handleSubmit(e){
    e.preventDefault()
    alert(e.target['my_input'].value)   
}

export default QuestionForm


