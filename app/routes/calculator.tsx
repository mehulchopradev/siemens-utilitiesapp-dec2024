import { useEffect, useMemo, useState } from 'react';
import CalcForm, { type CalcData } from '~/components/calculator/calc-form';
import LiveExp from '~/components/calculator/live-exp';
import CustomVideoPlayer from '~/components/custom-video-player';
import CalculatorStore from '~/store/CalculatorStore';
import { generateFibonacciSeries } from '~/utils/series';

const calcStore = new CalculatorStore();

export default function Calculator() {

  // heavy computation
  // const fiboSeries = useMemo(() => generateFibonacciSeries(ans), [ans]);

  // AVOID THIS!!!
  /* useEffect(() => {
    const fiboSeries = generateFibonacciSeries(ans);
  }, [ans]); */

  return (
    <div className='flex flex-col items-center gap-4'>
      <h1>Calculator</h1>
      <CalcForm
        calcStore={calcStore}
      />
      {/* <CustomVideoPlayer
        url='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
        isPlaying={ans === 13}
      /> */}
      <LiveExp
        calcStore={calcStore}
      />
      <div>
        <h2>Fibonacci series</h2>
        {/* fiboSeries.join(', ') */}
      </div>
    </div>
  );
}