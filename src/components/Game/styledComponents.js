import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  color: #ffffff;
  margin: 0;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
`

export const RulesView = styled.div`
  align-self: flex-end;
  margin-top: auto;
  margin-bottom: 44px;
`

export const ImageContainer = styled.div`
  width: 50%;
  display: flex;

  align-items: center;
`
export const Image = styled.img`
  width: 100px;
  height: 100px;
`

export const Button = styled.button`
  width: 75px;
  height: 35px;
  font-family: 'Bree Serif';

  font-size: 16px;
  font-weight: 400;

  padding: 8px 15px 8px 15px;
  margin: 8px;

  border: none;
  border-radius: 4px;
  outline: none;
`
export const RulesImg = styled.img`
  height: 90%;
  width: 100%;
  margin-top: auto;
`

export const PopupView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 260px;
  width: 100%;
  padding: 10px;

  @media screen and (min-width: 768px) {
    height: 60vh;
  }
`

export const RulesButton = styled.button`
  background-color: transparent;
  border: none;
`
