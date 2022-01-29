import React  from 'react';
import '../index.css'

const GoalList = props => {
    return (
        <div>
            <h1>
                Testing the goal list
            </h1>
            <ul className='font-mono text-xl italic leading-6'>
                {props.goals.map(() => {
                    return <li>{goals.text}<li/>;
                })}
            </ul>
        </div>
    );
};

export default GoalList;