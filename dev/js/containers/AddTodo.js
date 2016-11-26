import React , {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index';
import {editTodo} from '../actions/index';
import TodoFooter from './TodoFooter';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

class AddTodo extends Component {
    navigate(){
		if(this.props.params.id)
			this.props.editTodo(this.refs.AddTodo).value;
		else 
		    this.props.addTodo(this.refs.AddTodo).value;
		
		browserHistory.push('/');
 
	}
	render(){
		 
		{if (this.props.params.id) this.getOldText()}
		return (
		<div className="new-todo">
		  <div ><Link to='/'><button>Back to Todo List</button></Link></div>
		  <h1>{this.props.params.id?'Edit Existing Todo':'Add New Todo'}</h1>
		  <hr/>
		  <div className={this.props.params.id?'':'hidden'}>Id number(date time stamp) {this.props.params.id} </div>
		  <br/>
          <input id={this.props.params.id?this.props.params.id:''} ref="AddTodo" type="text" className="form-control add-todo" placeholder={this.props.params.id?'':'New Todo'}  defaultValue={this.props.params.id?this.getOldText():''} />
		  
          <span>
          <button className="btn btn-success pull-left" onClick={this.navigate.bind(this)}>{this.props.params.id?'Save':'Add'}</button>
          </span>
		    
          </div> 
		);
	}
	
	getOldText()
	{
		var value='';
		var id =  this.props.params.id.replace(':','').trim() ;
		var indexer;
		for(indexer = 0 ; indexer < this.props.todos.length;indexer++){
 
			if(this.props.todos[indexer].id == id){
				value = this.props.todos[indexer].text;
		 
				break;
			}
		}
		return value;
	}	
	
}
 

function mapStateToProps(state){	
	return{
		todos:state.todos
	};
}
 
function mapDispatchToProps(dispatch){
	return bindActionCreators({addTodo:addTodo , editTodo:editTodo} , dispatch)
}
 
export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);