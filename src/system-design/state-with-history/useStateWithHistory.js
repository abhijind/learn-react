import { useState, useEffect } from "react";

const getInitialState = (initialState, storageKey) => {
  return (
    JSON.parse(localStorage.getItem(storageKey)) ?? {
      currIndex: 0,
      actions: [initialState],
    }
  );
};

export default function useStateWithHistory(
  initialState,
  capacity,
  storageKey
) {
  const [state, setState] = useState(getInitialState(initialState, storageKey));

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state]);

  const push = (val) => {
    const actions = state.actions;
    if (actions.length === capacity) {
      actions.shift();
    }
    actions.push(val);
    setState((prev) => {
      return {
        ...prev,
        currIndex:
          prev.currIndex + 1 >= capacity ? prev.currIndex : prev.currIndex + 1,
        actions,
      };
    });
  };

  const undo = () => {
    setState((prev) => {
      return {
        ...prev,
        currIndex: prev.currIndex < 1 ? prev.currIndex : prev.currIndex - 1,
      };
    });
  };
  const redo = () => {
    setState((prev) => {
      return {
        ...prev,
        currIndex:
          prev.currIndex + 1 >= prev.actions.length
            ? prev.currIndex
            : prev.currIndex + 1,
      };
    });
  };

  const reset = () => {
    setState({
      currIndex: 0,
      actions: [initialState],
    });
  };

  return [state.actions[state.currIndex], push, undo, redo, reset];
}
