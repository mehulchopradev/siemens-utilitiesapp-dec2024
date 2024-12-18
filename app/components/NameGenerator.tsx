import { type ChangeEvent, useState } from 'react';
import { useImmer } from 'use-immer';

type NameGeneratorType = {
  firstName: string,
  lastName: string;
};

export default function NameGenerator(props: NameGeneratorType) {
  // const [ firstName, setFirstName ] = useState<string>('');
  // const [ lastName, setLastName ] = useState<string>('');
  /* const [ nameComponents, setNameComponents ] = 
    useState<NameGeneratorType>({
      firstName: '',
      lastName: '',
    }); */

  const [ nameComponents, setNameComponents ] = 
    useImmer<NameGeneratorType>({
      firstName: props.firstName,
      lastName: props.lastName,
    });

  
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    /* setNameComponents({
      ...nameComponents,
      [name]: value,
    }); */
    const key = name as keyof NameGeneratorType;
    setNameComponents((draft) => {
      draft[key] = value;
    });
  };

  const fullName = 
    `${nameComponents.firstName} ${nameComponents.lastName}`
    .toUpperCase();

  return (
    <div>
      <h2>Name generator</h2>
      <div className="row">
        <input
          type="text"
          placeholder='First name'
          onInput={handleInput}
          name="firstName"
          defaultValue={props.firstName}
        />
      </div>
      <div className="row">
        <input
          type="text"
          placeholder='Last name'
          onInput={handleInput}
          name="lastName"
          value={nameComponents.lastName}
        />
      </div>
      <div className="row">
        <span>{fullName}</span>
      </div>
    </div>
  )
}