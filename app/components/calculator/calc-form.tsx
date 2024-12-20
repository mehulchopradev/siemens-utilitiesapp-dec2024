import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import axios from 'axios';
import CalculatorStore from '~/store/CalculatorStore';
import { observer } from 'mobx-react-lite';

export type CalcData = {
  firstNo: number;
  operator: string;
  secondNo: number;
}

type CalcFormProps = {
  calcStore: CalculatorStore;
}

function CalcForm(props: CalcFormProps) {
  const firstNoRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // effect code
    // side effect code
    // they execute after the react component has rendered/re rendered itself
    // they help react component to synchronize with the third party libraries/browser/network/apis/logging
    
    // side effect should run only on initial mount
    // document.getElementById('firstNo')!.focus();
    firstNoRef.current!.focus();
    props.calcStore.fetchDefaultCalcData();
  }, []);

  const handleInput = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    props.calcStore.updateCalcData(name, value);
  }

  const handleCalculate = () => {
    props.calcStore.calculate();
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
          value={props.calcStore.firstNo}
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
          defaultValue={props.calcStore.secondNo}
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
          value={props.calcStore.ans}
          readOnly
        />
      </div>
    </div>
  )
}

export default observer(CalcForm);