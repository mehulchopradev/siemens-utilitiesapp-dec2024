import { useSearchParams } from 'react-router';
import NameGenerator from '~/components/NameGenerator';

export default function NameGen() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('firstName'));
  console.log(searchParams.get('lastName'));

  return (
    <div>
      <NameGenerator
        firstName={searchParams.get('firstName') || ''}
        lastName={searchParams.get('lastName') || ''}
      />
    </div>
  )
}