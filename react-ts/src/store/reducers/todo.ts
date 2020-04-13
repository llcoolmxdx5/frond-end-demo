import { ITodo } from "../types/index";
import { toDoAction, ADD_TODO } from "../actions/index";

const TodoReducer =  (
  state: Array<ITodo> = [
    {
      id: 0,
      text: "hello",
      completed: false,
    },
  ],
  action: toDoAction
) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    default:
      return state;
  }
};

export default TodoReducer
