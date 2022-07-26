import * as React from "react"
import styled from '@emotion/styled'
import { TerminalWindow } from "../components";

const Main = styled.main`
  height: 100vh;
  color: #c2baba;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
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
