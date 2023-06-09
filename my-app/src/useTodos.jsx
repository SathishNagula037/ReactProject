import { useCallback, useReducer, createContext, useContext } from 'react';

type Actiontypes = | { type: "ADD"; text: string }
                    | { type: "REMOVE"; id: number };
  
  interface Todo {
    id: number;
    done: boolean;
    text: string;
  }

  type useTodosManagerResult = ReturnType<typeof useTodosManager>;


  const  TodoContext = createContext<useTodosManagerResult>({
    todos: [],

  })

  export function useTodos(initialTodos: Todo[]): {
    todos : Todo[];
    addTodo: (text:string) => void;
    removeTodo : (id: number) => void;

  }{
    const [todos, dispatch] = useReducer((state: Todo[], action: Actiontypes)){
        switch (action.type) {
            case "ADD":
                return [
                    ...state,
                    {
                        id:state.length,
                        text: action.text,
                        done: false,
                    },
                ];
          
        
                break;
        
            default:
                break;
        }
    }
  }

  /**
   
   */