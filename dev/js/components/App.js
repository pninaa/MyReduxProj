import React, {Component} from 'react';
import TodoList from '../containers/TodoList';
import TodoFooter from '../containers/TodoFooter';
import {Link} from 'react-router';

require('../../scss/style.scss');


export default class App extends  Component{ 
render(){
	return (

<div className="container" >
    <div className="row">
        <div className="col-md-2">
        </div>
        <div className="col-md-8">
            <div id="app" className="todolist not-done">
                <div>
                        {this.props.children}
                      
                </div>
            </div>
        </div>
        <div className="col-md-2">
        </div>
    </div>
</div>

	);
	
} 
}