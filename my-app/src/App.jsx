import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>📝 Recoil To-do List</h1>

      <TaskInput />
      <TaskFilter />
      <TaskList />
    </div>
  )
}