import React from "react";

const postData = async ()=>{
    try {
        
        const response = await fetch('https://playground.4geeks.com/todos/gabriel_viscio', {
            method: "POST",
            body: JSON.stringify({
                "label": "tarea gabriel",
                "is_done": false
              }),
            headers: {
              "Content-Type": "application/json"
            }
          })
          if(response.ok){
            alert('Tarea Creada')
          }
    } catch (error) {
        console.log('No Salió Bien',error)
    }
}

const ToDo = () => {
    return (
        <div>
            <form onSubmit={postData}>
                <button type="submit">enviar</button>
            </form>
        </div>
    );
};
export default ToDo;