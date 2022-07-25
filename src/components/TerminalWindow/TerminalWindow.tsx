import React, { ReactElement } from 'react'
import { MutableRefObject, useEffect, useRef } from 'react';
import styled from '@emotion/styled'
import Typed, { TypedOptions } from "typed.js"

const Conatiner = styled.div`
  min-width: 550px;
  box-shadow: 1px -2px 6px 4px rgba(212,202,119,0.19);
  border-radius: 10px;
`

const HeaderBar = styled.div`
  display:flex;
  align-items: center;
  background-color: #d6d6d6;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding: 10px 10px;
`

const MainScreen = styled.div`
  background-color: #151515;
  padding: 20px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  font-size: 1.2rem;
  min-height: 200px;
  color: #ffffff;
  display: flex;
`

const DollarSign = styled.span`
  margin-right: 15px;
`

const TypedSpan = styled.span`
  white-space: 'pre';
`;

const FakeButton = styled.button`
  height: 13px;
  width: 13px;
  border-radius: 50%;
`

const FakeClose = styled(FakeButton)`
  background-color: #ff3b47;
  border: 1px solid #9d252b;
  margin-right: 8px ;
`
const FakeMinimize = styled(FakeButton)`
  background-color: #ffc100;
  border: 1px solid #9d802c;
  margin-right: 8px ;
`

const FakeZoom = styled(FakeButton)`
  background-color: #00d742;
  border: 1px solid #049931;
`

export function TerminalWindow(): ReactElement {
  const element = useRef<any>(null);
  const typed = useRef<any>(null);

  useEffect(() => {
    const options: TypedOptions = {
      strings: [
        'HI, MY NAME IS MICHAEL CHENG ^500',
        'I\'M A SOFTWARE ENGINEER',
      ],
      cursorChar: '_',
      typeSpeed: 40,
      backSpeed: 20,
      loop: true
    };

    typed.current = new Typed(element.current, options);

    return () => {
      typed.current.destroy();
    }
  }, []);

  return (
    <Conatiner>
      <HeaderBar>
        <FakeClose />
        <FakeMinimize />
        <FakeZoom />
      </HeaderBar>
      <MainScreen>
        <DollarSign>$</DollarSign>
        <TypedSpan ref={element} />
      </MainScreen>
    </Conatiner>
  )
}
