export default function(state , action){
	switch(action.type){
		case 'TODO_CLICKED':
		var updatedArray = [];
		  var i;
		  for(i = 0 ; i < [...state].length ; i++){
			  if(action.payload.id === [...state][i].id){
				  var temp_arr = {};
				  temp_arr['text'] = action.payload.text;
				  temp_arr['finished'] = !action.payload.finished;
				  temp_arr['id'] = action.payload.id;
			      updatedArray.push(temp_arr);
			  }
			  else{
				 updatedArray.push([...state][i]);
			  }
		  }
	         return updatedArray;
		     break;
		case 'DELETE_TODO':
		     var updatedArray = [];
		     var i;
		     for(i = 0 ; i < [...state].length ; i++){
			  if(action.payload.id === [...state][i].id){
				  continue;
			  }
			  else{
				 updatedArray.push([...state][i]);
			  }
		  }
	         return updatedArray;
		     break;
		case 'ADD_TODO':
		
		    // action.payload.value;
			if(action.payload.value.trim() != '')
			{
				 var newText = action.payload.value;
				 action.payload.value = '';
				 return [...state , {text:newText , finished:false  , id:(new Date().getTime())}];
			}
			else{
				return state;
			}
			 
		    break;
			
		case 'EDIT_TODO':
		    var id = action.payload.id.replace(':' , '').trim();
			var updatedArray = [];
		    var i;
		    for(i = 0 ; i < [...state].length ; i++){
			  if(id == [...state][i].id){
				  var temp_arr = {};
				  temp_arr['text'] = action.payload.value;
				  temp_arr['finished'] = [...state][i].finished;
				  temp_arr['id'] = [...state][i].id;
			      updatedArray.push(temp_arr);
			  }
			  else{
				 updatedArray.push([...state][i]);
			  }
		  }
	         return updatedArray;
		     
		    break;
	}
	if(state && state.length ==0){
		return [];
	}
	return []; 
}
 