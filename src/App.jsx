import CounterPage from "./pages/CounterPage.jsx";
import TodoPage from "./pages/TodoPage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<CounterPage/>}/>
          <Route path="/Todo" element={<TodoPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
