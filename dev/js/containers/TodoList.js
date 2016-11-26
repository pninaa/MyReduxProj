import React , {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';
import Todo from './Todo';
import TodoFooter from './TodoFooter';
import {Link} from 'react-router';


class TodoList extends Component {
	
	createListItems(){
		return this.props.todos.map((todo) => {
			return (
			<li className="ui-state-default" key={todo.id}><Todo objref={todo} text={todo.text} finished={todo.finished} /></li>
			); 
		}
		);
	}
	
	render(){
		return (
		<div>
		<Link to="new"><button>Add new Todo</button></Link> 
		<h1>Todos</h1>
		<ul id="sortable" className="list-unstyled">
		{this.createListItems()}
		</ul>
		<TodoFooter />
		</div>
		);
	}
	
}
/*
function mapDispatchToProps(dispatch){
	return bindActionCreators({selectUser:selectUser} , dispatch)
}
*/
function mapStateToProps(state){
	return{
		todos:state.todos
	};
}


//export default connect(mapStateToProps,mapDispatchToProps)(UserList);
export default connect(mapStateToProps)(TodoList);