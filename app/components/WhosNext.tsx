import { useRef, useState } from 'react';
import { useParams } from 'react-router';

type Employee = {
  id: number,
  name: string;
};

const employees1: Employee[] = [
  {
    id: 1,
    name: 'Amogh'
  },
  {
    id: 2,
    name: 'Mehul'
  },
  {
    id: 3,
    name: 'Rahul'
  },
  {
    id: 4,
    name: 'Elon'
  }
];

const employees2: Employee[] = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Jeff'
  },
];

const departmentEmployees: Record<number, Employee[]> = {
  1001: employees1,
  1002: employees2,
};

export default function WhosNext() {
  const [ queue, setQueue ] = useState<Employee[]>([]);
  const params = useParams<{ departmentId: string }>();
  const departmentId = parseInt(params.departmentId || '1001', 10);

  const employeesRef = useRef<Employee[]>([...departmentEmployees[departmentId]]);

  const handleNext = () => {
    const index = Math.floor(Math.random() * employeesRef.current.length);
    const removedEmployees = employeesRef.current.splice(index, 1);
    const nextEmployeeForDemo = removedEmployees[0];
    // queue.push(nextEmployeeForDemo); // avoid!
    setQueue([
      ...queue,
      nextEmployeeForDemo,
    ])
  };

  const handleRestart = () => {
    employeesRef.current = [...departmentEmployees[departmentId]];
    setQueue([]);
  };

  return (
    <div>
      <h2>Who demoes next?</h2>
      <div>
        <button
          disabled={employeesRef.current.length === 0}
          onClick={handleNext}>
            Next
        </button>
        <button
          disabled={employeesRef.current.length > 0}
          onClick={handleRestart}
        >
          Restart
        </button>
      </div>
      <div>
        {queue.map((emp: Employee) => <div>{emp.name}</div>)}
      </div>
    </div>
  )
}