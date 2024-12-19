import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import axios from 'axios';

const url = "https://my-json-server.typicode.com/mehulchopradev/calc-service/defaultCalcData";

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
  const firstNoRef = useRef<HTMLInputElement>(null);
  const [ calcData, setCalcData ] = useState<CalcData>({
    firstNo: 0,
    operator: '+',
    secondNo: 0
  });

  useEffect(() => {
    // effect code
    // side effect code
    // they execute after the react component has rendered/re rendered itself
    // they help react component to synchronize with the third party libraries/browser/network/apis/logging
    
    // side effect should run only on initial mount
    // document.getElementById('firstNo')!.focus();
    firstNoRef.current!.focus();

    axios.get(url)
      .then((response) => {
        const data = response.data;
        const { firstNo, secondNo, operation: operator } = data;
        setCalcData({
          firstNo,
          operator,
          secondNo
        });
        props.onCalcData({
          firstNo,
          operator,
          secondNo
        });
      })
      .catch((error) => console.error(error));
    console.log('hi');
  }, []);

  const handleInput = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    /* calcDataRef.current = {
      ...calcDataRef.current,
      [name]: name === 'operator' ? value : Number(value)
    }; */
    const newState = {
      ...calcData,
      [name]: name === 'operator' ? value : Number(value)
    }
    setCalcData(newState);
    props.onCalcData(newState);
  }

  const handleCalculate = () => {
    const { firstNo, operator, secondNo } = calcData;
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
          ref={firstNoRef}
          placeholder='First No'
          onChange={handleInput}
          value={calcData.firstNo}
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
          value={calcData.secondNo}
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