import React from 'react';

// class Todo extends React.Component{
//     render(){
//         return(
//             <li
//                 onClick={this.props.onClick}
//                 style={{ textDecoration : this.props.completed ? 'line-through' : 'none' }}
//             >
//                 {this.props.text}
//             </li>
//         )
//     }
// }

const Todo = ({ onClick, completed, text }) =>{
    return(
        <li
            onClick={onClick}
            style={{ textDecoration : completed ? 'line-through' : 'none' }}
        >
            {text}
        </li>
    )
}

// const Todo = ({onclick,completed,text}) => (
// 	<li
// 		onlick={onclick}
// 		style = {{textDecoration:completed?"line-through":"none"}}>
// 	<label>{text}</label>
// 	</li>
// )
export default Todo