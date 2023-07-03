"use client"
import React, { FormEventHandler, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from './Modal'
import { addTodo } from '@/api'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/navigation'

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [inputValue, setInputValue] = useState<string>("");

  const HandleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e)  => {
    e.preventDefault();
    await addTodo ({
      id: uuidv4(),
      title: inputValue,
    })
    setInputValue("");
    setModalOpen(false)
    router.refresh()

  };

  return (
    <div>
      <button className='btn btn-primary w-full mt-3' onClick={() => setModalOpen(true)}>ADD NEW TASK <AiOutlinePlus size={18} /></button>
      <Modal modalOpen={modalOpen} modalClose={setModalOpen}>
        <form onSubmit={HandleSubmitNewTodo}>
          <h3 className='text-center mb-4'>Add new task</h3>

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              placeholder="Type here"
              className="input input-bordered input-primary w-9/12"
            />
            <button type='submit' className='btn btn-primary ml-5'>Submit</button>
        </form>
      </Modal>
    </div>
  )
}

export default AddTask
