import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import App from './components/App';
import AddTodo from './containers/AddTodo';
import TodoList from './containers/TodoList';
import {Router ,Route , IndexRoute , browserHistory} from 'react-router';


const store = createStore(allReducers);
 

ReactDOM.render(<Provider store={store}>
<Router history={browserHistory}>
<Route path='/' component={App}>
    <IndexRoute component={TodoList}></IndexRoute>
    <Route path='new' component={AddTodo}></Route>
	<Route path='todos/:id' component={AddTodo}></Route>
</Route>
</Router>
</Provider>,
    document.getElementById('root')
);
