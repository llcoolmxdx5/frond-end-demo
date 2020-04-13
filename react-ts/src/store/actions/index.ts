export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"

export interface toDoAction {
  type: typeof ADD_TODO | typeof TOGGLE_TODO;
  id: number;
  text: string
}
