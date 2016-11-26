import React , {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {markAsFinished} from '../actions/index';
import {deleteTodo} from '../actions/index';
import {Link} from 'react-router';

class Todo extends Component {	
	render(){
		if(this.props.finished){
			return (
		       <div className="checked">
               <label onClick={() => this.props.markAsFinished(this.props.objref)}>{this.props.text}</label>
               <span className="todo-buttons pull-right">
               <Link to={"/todos/:"+ this.props.objref.id}><button className="btn">Edit</button></Link> &nbsp;
			   <button className="btn" onClick={() => this.props.deleteTodo(this.props.objref)}>Delete</button>
               </span>
               </div>
		    );
		}
		return (
		<div className="">
           <label onClick={() => this.props.markAsFinished(this.props.objref)}>{this.props.text}</label>
           <span className="todo-buttons pull-right">
		   <Link to={"/todos/:"+ this.props.objref.id}><button className="btn">Edit</button></Link> &nbsp;
           <button className="btn" onClick={() => this.props.deleteTodo(this.props.objref)}>Delete</button>
           </span>
         </div>
		);
	}
	
}
 
function mapStateToProps(state){
	return{
		todos:state.todos
	};
}
 
function mapDispatchToProps(dispatch){
	return bindActionCreators({markAsFinished:markAsFinished , deleteTodo:deleteTodo} , dispatch)
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Todo);