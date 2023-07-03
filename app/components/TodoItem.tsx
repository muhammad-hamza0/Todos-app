"use client"
import React, { FormEventHandler, useState } from 'react'
import { ITask } from '@/types/task'
import { BiSolidEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import Modal from './Modal';
import { deleteTodo, editTodo } from '@/api'
import { useRouter } from 'next/navigation'

interface ITodoItem {
    task: ITask;
}

const TodoItem: React.FC<ITodoItem> = ({ task }) => {
    const router = useRouter();
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
    const [editInputValue, setEditInputValue] = useState<string>(task.title);
    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

    const HandleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setEditModalOpen(false)
        await editTodo ({
            id: task.id,
            title: editInputValue,
        })
    router.refresh();


    }

    const HandleTaskDelete = async (id: string) => {
        await deleteTodo(id);
        setDeleteModalOpen(false);
        router.refresh();
    }

    return (
        <tr>
            <td className='w-full'>{task.title}</td>
            <td className='flex'>
                <BiSolidEdit cursor="pointer" size={20} className='text-primary' onClick={() => setEditModalOpen(true)} />
                <Modal modalOpen={editModalOpen} modalClose={setEditModalOpen}>
                    <form onSubmit={HandleSubmitEditTodo}>
                        <h3 className='text-center mb-4'>Edit task</h3>

                        <input
                            type="text"
                            value={editInputValue}
                            onChange={(e) => setEditInputValue(e.target.value.toLowerCase())}
                            placeholder="Type here"
                            className="input input-bordered input-primary w-9/12"
                        />
                        <button type='submit' className='btn btn-primary ml-5'>Submit</button>
                    </form>
                </Modal>
                <AiFillDelete cursor="pointer" size={20} className='text-red-500 ml-2' onClick={() => setDeleteModalOpen(true)} />
                <Modal modalOpen={deleteModalOpen} modalClose={setDeleteModalOpen}>
                    <h3>Are You Sure, you want to delete this task?</h3>
                    <button onClick={() => HandleTaskDelete(task.id)} className='btn btn-primary mt-5'>Yes</button>
                </Modal>
            </td>
        </tr>
    )
}

export default TodoItem
