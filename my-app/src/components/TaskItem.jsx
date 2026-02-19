import { useRecoilState } from 'recoil'
import { tasksAtom } from '../atoms/tasksAtom'

export default function TaskItem({ task }) {
  const [tasks, setTasks] = useRecoilState(tasksAtom)

  function toggleTask() {
    setTasks(
      tasks.map(t =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  function removeTask() {
    setTasks(tasks.filter(t => t.id !== task.id))
  }

  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none'
        }}
      >
        {task.text}
      </span>

      <button onClick={toggleTask}>
        {task.completed ? 'Desfazer' : 'Concluir'}
      </button>

      <button onClick={removeTask}>❌</button>
    </li>
  )
}