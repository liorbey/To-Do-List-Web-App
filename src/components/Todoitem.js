import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Todoitem.css';

export class Todoitem extends Component {
    getStyle = () => {
        return{
            padding: '10px',
            background: '#f4f4f4',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through':'none'

        }
        
        
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)}/>{' '}
                    {this.props.todo.title}
                    <button onClick = {this.props.delTodo.bind(this,this.props.todo.id)} className="blue">Delete</button>
                </p>
            </div>
        );
    }
};

// Prop Types
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}



export default Todoitem
