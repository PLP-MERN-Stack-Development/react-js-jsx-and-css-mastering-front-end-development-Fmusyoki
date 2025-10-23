import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import TaskManagerPage from '../src/pages/TaskManagerPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TaskManagerPage />}>
      </Route>
    </Routes>
  );
}
export default App;