// import uuid from "react-uuid";
import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    title: "title 1",
    contents: "constents 1",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "title 2",
    contents: "constents 2",
    isDone: true,
  },
  {
    id: shortid.generate(),
    title: "title 3",
    contents: "constents 3",
    isDone: true,
  },
  {
    id: shortid.generate(),
    title: "title 4",
    contents: "constents 4",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "title 5",
    contents: "constents 5",
    isDone: true,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state
      }; //TODO: 여기 작성

    case "DELETE_TODO":
      return; //TODO: 여기 작성

    case "SWITCH_TODO":
      return; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
