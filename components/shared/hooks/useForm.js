import { useCallback, useReducer } from "react";

/**
 * formReducer is a reducer for form inputs
 * @param {object} state current state object
 * @param {object} action object for manipulating the state object
 */
const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isValid: formIsValid,
      };
    case "SET_DATA":
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      };
    default:
      return state;
  }
};

/**
 *  useForm is a custom hook for handling forms
 *
 * @param {object} initialInputs
 * @param {object} initialFormValidity
 */
export const useForm = (initialInputs, initialFormValidity) => {
  /**
   * reducer
   */
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  // if the component rerendered, this function
  // because of using useCallback, is remained and reused
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value,
      isValid,
      inputId: id,
    });
  }, []);

  const setFormData = useCallback((inputdata, formValidity) => {
    dispatch({
      type: "SET_DATA",
      inputs: inputdata,
      formIsValid: formValidity,
    });
  }, []);

  return [formState, inputHandler, setFormData];
};
