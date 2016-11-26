import React , {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class TodoFooter extends Component {	
	render(){
		 
		return (
		            <div className="todo-footer">
                        <strong><span className="count-todos"></span></strong> Items Left to do: {this.props.unfinishedcount}
                    </div>
		);
	}
	
}
 
function mapStateToProps(state){
	 
	var unfinishedcount = state.todos.length;
	var indexer ;
	for(indexer = 0 ; indexer < state.todos.length ; indexer++){
		if(state.todos[indexer].finished){
			
			unfinishedcount--;
			 
		}
	}
	return{
		todos:state.todos ,
		unfinishedcount:unfinishedcount
	};
}
 
 
export default connect(mapStateToProps)(TodoFooter);