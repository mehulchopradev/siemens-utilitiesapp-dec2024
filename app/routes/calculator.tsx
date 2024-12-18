import { useState } from 'react';
import CalcForm, { type CalcData } from '~/components/calculator/calc-form';
import LiveExp from '~/components/calculator/live-exp';

export default function Calculator() {
  const [ calcData, setCalcData ] = useState<CalcData>({
    firstNo: 0,
    operator: '+',
    secondNo: 0,
  });
  const [ ans, setAns ] = useState<number>(0);

  const handleCalcData = (calcData: CalcData) => {
    // console.log('parent', calcData);
    setCalcData(calcData);
  };

  const handleAns = (ans: number) => {
    // console.log('parent', ans);
    setAns(ans);
  }

  return (
    <div className='flex flex-col items-center gap-4'>
      <h1>Calculator</h1>
      <CalcForm
        onCalcData={handleCalcData}
        onAns={handleAns}
      />
      <LiveExp
        calcData={calcData}
        ans={ans}
      />
    </div>
  );
}