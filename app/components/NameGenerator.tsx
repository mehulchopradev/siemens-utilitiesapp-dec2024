import { type ChangeEvent, useReducer, useState } from 'react';
import styled from 'styled-components';
import { useImmer } from 'use-immer';

const FullNameDiv = styled.div<{ $fullname: string}>`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  background-color: ${(props) => props.$fullname.length > 0 ? '#f0f0f0' : 'white'};
`;

type NameGeneratorType = {
  firstName: string,
  lastName: string;
};

type NameGenActionType = {
  type: 'SET_FIRST_NAME' | 'SET_LAST_NAME',
  payload: string;
};

function nameGenReducer(state: NameGeneratorType, action: NameGenActionType) {
  console.log('old state', state);
  console.log('action', action);

  let newState: NameGeneratorType;
  switch (action.type) {
    case 'SET_FIRST_NAME':
      newState = {
        ...state,
        firstName: action.payload,
      };
      break;
    case 'SET_LAST_NAME':
      newState = {
        ...state,
        lastName: action.payload,
      };
      break;
    default:
      newState = state;
  }

  console.log('newState', newState);

  return newState;
}

export default function NameGenerator(props: NameGeneratorType) {
  // const [ firstName, setFirstName ] = useState<string>('');
  // const [ lastName, setLastName ] = useState<string>('');
  /* const [ nameComponents, setNameComponents ] = 
    useState<NameGeneratorType>({
      firstName: '',
      lastName: '',
    }); */

  const [ state, dispatch ] = useReducer(nameGenReducer, {
    firstName: props.firstName,
    lastName: props.lastName,
  });


  /* const [ nameComponents, setNameComponents ] = 
    useImmer<NameGeneratorType>({
      firstName: props.firstName,
      lastName: props.lastName,
    }); */

  
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'firstName') {
      // dispatch to the reducer function an action obj (SET_FIRST_NAME) with the value
      dispatch({ type: 'SET_FIRST_NAME', payload: value });
    } else {
      // dispatch to the reducer function an action obj (SET_LAST_NAME) with the value
      dispatch({ type: 'SET_LAST_NAME', payload: value });
    }
    /* setNameComponents({
      ...nameComponents,
      [name]: value,
    }); */
    /* const key = name as keyof NameGeneratorType;
    setNameComponents((draft) => {
      draft[key] = value;
    }); */
  };

  /* const fullName = 
    `${nameComponents.firstName} ${nameComponents.lastName}`
    .toUpperCase(); */

  const fullName = `${state.firstName} ${state.lastName}`.toUpperCase();

  return (
    <div>
      <h2>Name generator</h2>
      <div className="row">
        <input
          type="text"
          placeholder='First name'
          onInput={handleInput}
          name="firstName"
          value={state.firstName}
          data-testid="firstName"
        />
      </div>
      <div className="row">
        <input
          type="text"
          placeholder='Last name'
          onInput={handleInput}
          name="lastName"
          value={state.lastName}
          data-testid="lastName"
        />
      </div>
      <FullNameDiv $fullname={fullName.trim()}>
        <span data-testid="fullName">{fullName}</span>
      </FullNameDiv>
    </div>
  )
}