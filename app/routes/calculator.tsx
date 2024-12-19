import { useEffect, useMemo, useState } from 'react';
import CalcForm, { type CalcData } from '~/components/calculator/calc-form';
import LiveExp from '~/components/calculator/live-exp';
import CustomVideoPlayer from '~/components/custom-video-player';
import { generateFibonacciSeries } from '~/utils/series';

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

  // heavy computation
  const fiboSeries = useMemo(() => generateFibonacciSeries(ans), [ans]);

  // AVOID THIS!!!
  /* useEffect(() => {
    const fiboSeries = generateFibonacciSeries(ans);
  }, [ans]); */

  return (
    <div className='flex flex-col items-center gap-4'>
      <h1>Calculator</h1>
      <CalcForm
        onCalcData={handleCalcData}
        onAns={handleAns}
      />
      <CustomVideoPlayer
        url='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
        isPlaying={ans === 13}
      />
      <LiveExp
        calcData={calcData}
        ans={ans}
      />
      <div>
        <h2>Fibonacci series</h2>
        {fiboSeries.join(', ')}
      </div>
    </div>
  );
}