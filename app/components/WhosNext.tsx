import { useRef, useState } from 'react';

type Employee = {
  id: number,
  name: string;
};

const employees: Employee[] = [
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

export default function WhosNext() {
  const [ queue, setQueue ] = useState<Employee[]>([]);

  const employeesRef = useRef<Employee[]>([...employees]);

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
    employeesRef.current = [...employees];
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