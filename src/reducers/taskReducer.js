export default function taskReducer(tasks, action) {
  switch (action.type) {
    case "Added": {
      return [...tasks, { id: action.id, text: action.text, done: false }];
    }
    case "Changed": {
        return tasks.map(t => {
            if(t.id === action.task.id){
                return action.task; 
            } else{
                return t;
            }
        })
    }
    case "Deleted": {
        return tasks.filter(t => t.id !== action.id)
    }
    default: {
        throw Error('Unknown action: ' + action.type);
    }
  }
}
