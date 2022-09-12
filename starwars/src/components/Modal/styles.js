import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 400px;
  height: 450px;

  position: absolute;
  bottom: 70px;
  left: 100px;
  z-index: 5;

  background-color: #ffba33;
  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: default;
`
export const Container = styled.div`
  background-color: #0f0f0f;
  border-radius: 16px;

  width: 95%;
  height: 95%;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;

  width: 32px;
  height: 32px;

  right: calc(-100% + 20px);
  top: 4px;
  position: relative;

  display: flex;
  align-items: center;

  cursor: pointer;

  &:before,
  &:after {
    content: ' ';
    position: absolute;
    width: 1.8px;
    height: 20px;
    background-color: orange;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`
export const Content = styled.div`
  width: 100%;
  height: 100%;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 350px;

  & > img {
    width: 180px;
  }
`
export const Form = styled.form`
  width: 600px;
  height: 250px;

  margin-block: 15px;
  padding: 10px 0;

  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > label {
    width: 300px;
    font-weight: 700;
    text-align: left;
  }
  & > p {
    font-size: 11px;
    font-style: italic;
    font-weight: 600;
    color: red;
    line-height: 4px;
  }
  & > input,
  & > button {
    width: 300px;
    height: 30px;
    border-radius: 8px;
    border: none;
    text-align: center;
    margin-block: 10px;
  }
  & > button {
    height: 40px;
    width: 200px;
    font-size: 14px;
    font-weight: 600;
    margin-top: 20px;
    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }
`
