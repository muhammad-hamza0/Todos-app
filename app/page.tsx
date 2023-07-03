import Image from 'next/image'
import AddTask from './components/AddTask'
import TodosList from './components/TodosList'
import { getAllTodos } from '@/api';

export default async function Home() {
  const tasks = await getAllTodos();
    console.log(tasks);
  return (
    <main className="p-4 max-w-3xl m-auto ">
      <h1 className='text-center font-bold text-2xl'>Todo List App</h1>
      <AddTask />
      <TodosList tasks={tasks}/>
    </main>
  )
}
