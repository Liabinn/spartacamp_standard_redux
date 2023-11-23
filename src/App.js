import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Router from "./shared/Router";

function App() {

  const data = useSelector((state)=>{
    return state;
  })

  const dispatch = useDispatch();

  return <Router />;
}

export default App;
