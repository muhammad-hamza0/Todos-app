import React from 'react';
import TodoItem from './TodoItem';
import { ITask } from '@/types/task';

interface TodoListProps {
    tasks: ITask[];
}

const TodosList: React.FC<TodoListProps> = ({ tasks }) => {

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <TodoItem key={task.id} task={task}/>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodosList;
