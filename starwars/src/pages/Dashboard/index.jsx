import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment/moment'

import { Chart } from "react-google-charts"
import { Settings } from 'react-feather'

import { Modal } from '../../components/Modal'

import logo from '../../assets/logo-black.svg'
import dashboard from "../../assets/dashboard.svg"
import personagens from "../../assets/personagens.svg"
import planetas from "../../assets/planetas.svg"
import naves from "../../assets/nave.svg"
import veiculos from "../../assets/vehicles.svg"

import {
  LeftMenu,
  Container,
  MenuItems,
  Items,
  SettingsButton,
  Table,
  Content,
  ContentInfo,
} from '../../components/Wrapper/styles.js'

import {
  Card,
  CardContent,
  CardInfo,
  CardContainer,
  CardsHeader,
  BigCard,
} from './styles'



export function Dashboard() {
  const [characters, setCharacters] = useState([]);
  const [vehiclesData, setVehiclesData] = useState({ results: [] })
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [films, setFilms] = useState([])
  const [isLoading, setIsLoading] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate()

  const vehiclesChartData = vehiclesData.results.map(
    item => [item.name, parseInt(item.passengers)]
  )
  vehiclesChartData.unshift(["Nome", "Passageiros"])
  const data = vehiclesChartData
  const options = {
    title: "Maiores veículos",
    titleTextStyle: {
      color: "#ffba33",
      fontSize: 16,
    },
    legend: "none",
    backgroundColor: "transparent",
  };

  function swapiGet(param) {
    return axios.get(`https://swapi.dev/api/${param}`)
  }

  useEffect(() => {
    Promise.all([
      swapiGet('people/'),
      swapiGet('starships/'),
      swapiGet('vehicles/'),
      swapiGet('planets/'),
    ]).then(function (results) {
      setCharacters(results[0].data.count)
      setStarships(results[1].data.count)
      setVehiclesData(results[2].data)
      setPlanets(results[3].data.count)
    });
  }, [])

  useEffect(() => {
    async function fullfillTable() {
      setIsLoading(true)
      const response = await swapiGet('films')
      setFilms(response.data.results)
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
        <CardsHeader>
          <Card>
            <CardContent>
              <CardInfo>
                <p>Personagens</p>
                <h2>{characters}</h2>
              </CardInfo>
              <img src={personagens} alt="" />
            </CardContent>
          </Card>
          <BigCard>
            <CardContainer>
              <CardContent>
                <CardInfo>
                  <p>Naves</p>
                  <h2>{starships}</h2>
                </CardInfo>
                <img src={naves} />
              </CardContent>
              <CardContent>
                <CardInfo>
                  <p>Veículos</p>
                  <h2>{vehiclesData.count}</h2>
                </CardInfo>
                <img src={veiculos} />
              </CardContent>
            </CardContainer>
          </BigCard>
          <Card>
            <CardContent>
              <CardInfo>
                <p>Planetas</p>
                <h2>{planets}</h2>
              </CardInfo>
              <img src={planetas} alt="" />
            </CardContent>
          </Card>
        </CardsHeader>
        <ContentInfo>
          <Table>
            <h5>Filmes</h5>
            <table>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Estréia</th>
                  <th>Diretor</th>
                  <th>Episódio</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? ('LOADING...')
                  : films.map(
                    film =>
                      <tr key={film.episode_id}>
                        <td>{film.title}</td>
                        <td>{moment(film.release_date).format('DD/MM/YYYY')}</td>
                        <td>{film.director}</td>
                        <td>{film.episode_id}</td>
                      </tr>
                  )}
              </tbody>
            </table>
          </Table>
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"400px"}
            height={"400px"}
          />
        </ContentInfo>
      </Content>
    </Container>
  )
}
