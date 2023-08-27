import React from "react";
import { TodoContent } from "./Components/TodoContent";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class App extends React.Component {

  render() {
    return (
      <div className="container mt-5 ">
        <h1 className="text-center mb-3">Todo App</h1>
<TodoContent/>
<ToastContainer />
      </div>

    )


  }
}

export default App;
