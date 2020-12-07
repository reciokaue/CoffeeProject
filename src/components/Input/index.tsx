import React from 'react';

import { Container } from './styles';

interface PropsInterface {
  placeholder?: string;
  type?: string;
  max?: number;
  state: Function;
}
const Input: React.FC<PropsInterface> = (Props) => {
  return (
    <>
      { Props.type === 'longText'? (
        <Container>
          <textarea
            maxLength={Props.max}
            wrap="soft"
            autoComplete="off"
            required
            typeof={Props.type}
            id={Props.placeholder}
            onChange={(event) => Props.state(event.target.value)}
            />
          <label htmlFor={Props.placeholder}>{Props.placeholder}</label>
        </Container>
      ):(
        <Container>
          <input
            autoComplete="off"
            required
            type={Props.type === 'email'? 'text': Props.type}
            id={Props.placeholder}
            className={Props.type === 'email'? 'emailInput': ''}
            onChange={(event) => Props.state(event.target.value)}
            />
          <label htmlFor={Props.placeholder}>{Props.placeholder}</label>
        </Container>
      )}
    </> 
     
    );
};

export default Input;