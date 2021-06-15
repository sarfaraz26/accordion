import React from 'react'
import data from './data';
import Question from './Question';

const App = () => {
    return (
        <div className="container bg-light my-5 py-3 rounded">
            <h1 id="title" className="text-center">Questions And Answers</h1>
            {data.map((element, index)=>{
                return <Question key={index} title={element.title} info={element.info} />
            })}
        </div>
    )
}

export default App;
