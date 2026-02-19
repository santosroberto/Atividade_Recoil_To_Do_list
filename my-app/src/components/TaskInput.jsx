import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { tasksAtom } from '../atoms/tasksAtom'

export default function TaskInput() {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useRecoilState(tasksAtom)

  function addTask() {
    if (!text.trim()) return

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text,
        completed: false
      }
    ])

    setText('')
  }

  return (
    <div>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Digite uma tarefa..."
      />

      <button onClick={addTask}>Adicionar</button>
    </div>
  )
}