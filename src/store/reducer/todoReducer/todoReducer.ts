import axios from "axios";
import { Dispatch } from "redux";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
interface FetchTodosAction {
  type: TodosTypes.fetchTodos;
  payload: Todo[];
}
enum TodosTypes {
  fetchTodos = "fetchTodos" //0
}
let url = "https://jsonplaceholders.typicode.com/todos";

/**
|--------------------------------------------------
| actions
|--------------------------------------------------
*/
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    dispatch<FetchTodosAction>({
      type: TodosTypes.fetchTodos,
      payload: response.data
    });
  };
};

/**
|--------------------------------------------------
| reducer
|--------------------------------------------------
*/
export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case TodosTypes.fetchTodos:
      return action.payload;
    default:
      return [];
  }
};
