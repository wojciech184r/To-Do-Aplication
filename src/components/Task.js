import React from 'react';

const Task = (props) => {

    const style = {
        color: "red",
    }



const {text, date, id, active, important, finishDate} = props.task; 

        if(active){
    return (  
       <div>
           <p>
             <strong style={important ? style : null }>{text}</strong> - to <span>{date} </span>
             <button onClick={() => props.change(id)}> Task Done</button>
             <button onClick={() => props.delete(id)}> X </button>
           </p>
           
          
       </div>
    );
        }else  {
            const finish = new Date(finishDate).toLocaleString();
        return(
            <div>
             <p>
              <strong >{text}</strong>  <em>(Must be done till {date}) </em> <br/>
              - This Task was finish at <span> {finish} </span>
              
              <button onClick={() => props.delete(id)}> X </button>
            </p>
            </div>
        )
    }
}
 
export default Task;