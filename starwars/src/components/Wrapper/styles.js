import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: #272727;
`
export const LeftMenu = styled.div`
  background: #000;
  width: 250px;
  height: 100vh;
  padding: 10px 0;

  color: white;
  font-weight: 700;
  font-size: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  & > img {
    width: 150px;
    height: 100px;
  }
`
export const MenuItems = styled.div`
  margin-top: 20px;
  list-style: none;
`
export const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &> &:hover {
    cursor: pointer;
    color: #ffba33;
  }
`
export const SettingsButton = styled.button`
  color: white;
  background-color: black;
  &:hover {
    cursor: pointer;
  }
`
export const Content = styled.div`
  width: 100vw;
`
export const Table = styled.div`
  width: 100%;

  margin: 30px 70px;
  padding: 30px;

  background: #efefef;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  text-align: left;

  &>table {
    width: 100%;
    margin-top: 25px;
  }

  &>table>thead>tr>th {
    border-bottom: 1px solid #5e5e5e;
    padding: 10px 0;
  }

  &>table>tbody>tr>td {
    border-bottom: 1px solid #e9e9e9;
    padding: 10px 0;
  }
  &>h5 {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 5px;
  }
`
export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
`
