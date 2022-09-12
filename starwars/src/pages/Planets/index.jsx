import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings } from 'react-feather'
import { Modal } from '../../components/Modal'

import logo from '../../assets/logo-black.svg'
import dashboard from "../../assets/dashboard.svg"
import personagens from "../../assets/personagens.svg"
import planetas from "../../assets/planetas.svg"
import naves from "../../assets/nave.svg"
import veiculos from "../../assets/vehicles.svg"
import axios from 'axios';

import {
  Container,
  LeftMenu,
  MenuItems,
  Items,
  SettingsButton,
  Table,
  Content,
  ContentInfo,
} from '../../components/Wrapper/styles';

export const Planets = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [planetsInfo, setPlanetsInfo] = useState([])
  const [isLoading, setIsLoading] = useState([])
  const navigate = useNavigate()

  function swapiGet(param) {
    return axios.get(`https://swapi.dev/api/${param}`)
  }

  useEffect(() => {
    async function fullfillTable() {
      setIsLoading(true)
      const response = await swapiGet('planets/')
      setPlanetsInfo(response.data.results)
      setIsLoading(false)
    }
    fullfillTable()
  }, [])

  return (
    <Container>
      <LeftMenu>
        <img
          src={logo}
          alt='Logo'
        />
        <MenuItems>
          <Items>
            <Items
              onClick={() => navigate('/')}
            >
              <img
                src={dashboard}
                alt='personagens'

              />
              <p>Dashboard</p>
            </Items>
            <Items
              onClick={() => navigate('/characters')}
            >
              <img
                src={personagens}
                alt='personagens'

              />
              <p>Personagens</p>
            </Items>
            <Items
              onClick={() => navigate('/planets')}
            >
              <img
                src={planetas}
                alt="Planetas"
              />
              <p>Planetas</p>
            </Items>
            <Items
              onClick={() => navigate('/starships')}
            >
              <img
                src={naves}
                alt="Naves"
              />
              <p>Naves</p>
            </Items>
          </Items>
        </MenuItems>
        <SettingsButton>
          <Settings
            onClick={() => setIsModalVisible(true)} />
          {isModalVisible ?
            <Modal onClose={() => setIsModalVisible(false)}>
            </Modal >
            : null}
        </SettingsButton>
      </LeftMenu>
      <Content>
        <ContentInfo>
          <Table>
            <h5>Planetas</h5>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Clima</th>
                  <th>População</th>
                  <th>Diâmetro</th>
                </tr>
              </thead>
              <tbody>
                {isLoading
                  ?
                  "LOADING..."
                  :
                  planetsInfo.map(
                    planets =>
                      <tr key={planets.name}>
                        <td>{planets.name}</td>
                        <td>{planets.climate}</td>
                        <td>{planets.population}</td>
                        <td>{planets.diameter}</td>
                      </tr>
                  )}
              </tbody>
            </table>
          </Table>
        </ContentInfo>
      </Content>
    </Container>
  )
}