import React, { createContext, useContext, useReducer } from "react";

//   context
const StudentContext = createContext();

//  Initial state
const initialStates = {
  students: [],
  currentStudent: null,
};

//  Reducer function
const studentReducer = (state, action) => {
  switch (action.type) {
    case "Add_Student":
      return {
        ...state,
        students: [...state.students, action.payload],
      };

    case "Edit_Student":
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student
        ),
        currentStudent: null,
      };

    case "Delete_Student":
      return {
        ...state,
        students: state.students.filter((s) => s.id !== action.payload),
      };

    case "Set_Current":
      return {
        ...state,
        currentStudent: action.payload,
      };

    case "Clear_Current":
      return {
        ...state,
        currentStudent: null,
      };

    default:
      return state;
  }
};

//  Provider 
export const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, initialStates);

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};

//  Custom hook to use the context
export const useStudentContext = () => {
  return useContext(StudentContext);
};
