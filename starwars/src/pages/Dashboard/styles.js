import styled from 'styled-components'



export const Card = styled.div`
  background-color: #0f0f0f;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.35);
  border-radius: 16px;

  color: white;

  margin: 0 20px;
  height: 132px;
  width: 240px;

  display: flex;
  align-items: center;
`
export const BigCard = styled.div`
  background-color: #0f0f0f;
  color: white;

  border-radius: 16px;

  margin: 0 20px;
  height: 132px;
  width: 464px;
`
export const CardContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 80px;

  :first-child {
    border-right: 1px solid;
    color: #ffba33;
  }

  :last-child {
    border-right: none;
  }
`
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h2 {
    font-size: 54px;
    color: #ffba33;
  }
  & > p {
    font-size: 16px;
    color: #ffba33;
  }
`
export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  :nth-child() {
    border-left: 1px solid;
  }
`
export const CardsHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`

