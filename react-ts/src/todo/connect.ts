import { connect } from "react-redux";
import { Dispatch } from "redux";

import { ITodo } from "../store/types/index";
import { ADD_TODO } from "../store/actions";
let id = 1;
type todos = {
  todos: Array<ITodo>;
};

const mapStateToProps = (state: todos) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    add: (txt: string) => {
      dispatch({
        type: ADD_TODO,
        id: id++,
        text: txt,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
