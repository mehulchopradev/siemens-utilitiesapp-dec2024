import { useRef, useState, type ChangeEvent } from 'react'

export type CalcData = {
  firstNo: number;
  operator: string;
  secondNo: number;
}

type CalcFormProps = {
  onCalcData: (calcData: CalcData) => void;
  onAns: (ans: number) => void;
}

export default function CalcForm(props: CalcFormProps) {
  const [ ans, setAns ] = useState<number>(0);
  const calcDataRef = useRef<CalcData>({
    firstNo: 0,
    operator: '+',
    secondNo: 0
  });

  const handleInput = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    calcDataRef.current = {
      ...calcDataRef.current,
      [name]: name === 'operator' ? value : Number(value)
    };
    props.onCalcData(calcDataRef.current);
  }

  const handleCalculate = () => {
    const { firstNo, operator, secondNo } = calcDataRef.current;
    let result = 0;
    switch (operator) {
      case '+':
        result = firstNo + secondNo;
        break;
      case '-':
        result = firstNo - secondNo;
        break;
      case '*':
        result = firstNo * secondNo;
        break;
    }
    setAns(result);
    props.onAns(result);
  }

  return (
    <div className='flex flex-col gap-4 items-center'>
      <div className='flex gap-4'>
        <input
          type="text"
          name="firstNo" 
          placeholder='First No'
          onChange={handleInput}
        />
        <select name="operator" onChange={handleInput}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
        </select>
        <input
          type="text"
          name="secondNo"
          placeholder='Second No'
          onChange={handleInput}
        />
      </div>
      <div className='flex'>
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      <div>
        <input
          type="text"
          name="ans"
          placeholder='Answer'
          value={ans}
          readOnly
        />
      </div>
    </div>
  )
}