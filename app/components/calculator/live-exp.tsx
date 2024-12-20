import { observer } from 'mobx-react-lite';
import CalculatorStore from '~/store/CalculatorStore';

type LiveExpProps = {
  calcStore: CalculatorStore;
};

function LiveExp(props: LiveExpProps) {
  const { algebraicExp } = props.calcStore;
  return (
    <div className='flex flex-col gap-4 items-center'>
      <div>****************************</div>
      <h2>Live Algebraic Expression</h2>
      <div>
        {algebraicExp}
      </div>
      <div>****************************</div>
    </div>
  );
}

export default observer(LiveExp);