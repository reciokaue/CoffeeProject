import React, { useState } from 'react';

import { Container, DropContainer, Arrow } from './styles';



interface Props{
  title: string;
}

const Dropdown: React.FC<Props> = (Props) => {
  const [ down, setDown ] = useState(false)

  function switchDrop(){
    setDown(!down)
  }
  return (
    <Container>
      <span onClick={switchDrop} className={down === true? 'droped': ''}>
        {Props.title} <Arrow/>
      </span>  
        
      <DropContainer className={down? 'ContainerDroped': ''} id={Props.title}>
        {Props.children}
      </DropContainer>
    </Container>
  );
};

export default Dropdown;
