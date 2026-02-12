import './App.css';
import Todo from './component/todo';
import Todos from './component/todos';
import Search from './component/todo/Search';
import Pagination from './component/todo/Pagination';
function App() {
  return (
    <>
      {/* <Todo /> */}
      {/* <Todos /> */}
      <Search />
      <Pagination />
    </>
  );
}

export default App;
