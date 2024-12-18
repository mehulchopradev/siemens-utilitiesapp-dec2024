import type { CalcData } from './calc-form';

type LiveExpProps = {
  calcData: CalcData;
  ans: number;
};

export default function LiveExp(props: LiveExpProps) {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <div>****************************</div>
      <h2>Live Algebraic Expression</h2>
      <div>
        {`${props.calcData.firstNo} ${props.calcData.operator} ${props.calcData.secondNo} = ${props.ans}`}
      </div>
      <div>****************************</div>
    </div>
  );
}