
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend"
import AllCards from "./components/AllCards/AllCards";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Topbar/Topbar";
import TaskState from "./context/tasks/TaskState"
import MainLayout from "./layout";


function App() {
  return (

    <>
     <TaskState>
    <DndProvider backend={HTML5Backend}>
        {/* <Navbar /> */}
        <Topbar />
        <MainLayout/>
      </DndProvider>
      </TaskState>
    </>
  );
}

export default App;
