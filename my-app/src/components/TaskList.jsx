import { useRecoilValue } from 'recoil'
import { filteredTasksSelector } from '../seletors/filteredTasksSelector'
import TaskItem from './TaskItem'

export default function TaskList() {
  const tasks = useRecoilValue(filteredTasksSelector)

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  )
}