import * as React from "react"
import styled from '@emotion/styled'
import { TerminalWindow } from "../components";

const Main = styled.main`
  height: 100vh;
  color: #c2baba;
  font-size: 1.5rem;
  background: #1f201f;
  font-family: 'Roboto Mono', monospace;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
`

const IndexPage = () => {
  return (
    <Main>
      <Container>
        <TerminalWindow />
      </Container>
    </Main>
  )
}

export default IndexPage
