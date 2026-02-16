import './App.css';
import Todo from './component/todo';
import Todos from './component/todos';
import Search from './component/todo/Search';
import Pagination from './component/todo/Pagination';
import Dialog from './component/Dialog/Dialog';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Open Dialog Button */}
      <div className="p-4">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Open Dialog
        </button>
      </div>

      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <Search />
      <Pagination />
    </>
  );
}

export default App;
