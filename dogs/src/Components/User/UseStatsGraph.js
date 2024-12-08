import React from 'react'
import styles from './UseStatsGraph.module.css';
import {VictoryPie, VictoryChart, VictoryBar} from 'victory'

const UseStatsGraph = ({data}) => {
  const [graph, setGraph] = React.useState([])
  const [total, setTotal] = React.useState(0)

  React.useEffect(()=>{
    if(data.length !== 0){
    const graphData = data.map(item => {
      return {
        x: item.title,
        y: Number(item.acessos),
      }
    })
    setTotal(data.map(({acessos}) => acessos).reduce((a,b) => a + b))
    setGraph(graphData);
    }
  },[data])


  if(data.length !== 0)
  return (
    <section className={`animeLeft ${styles.graph}`}>
      <div className={`${styles.total}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={`${styles.graphItem}`}>
        <VictoryPie data={graph} innerRadius={50} 
        padding={{top: 20, bottom: 20, left: 80, right: 80}}
        styles={{
          data: {
            fillOpacity: 0.9,
            stroke: "#fff",
            strokeWidth: 2,
          },
          labels: {
            fontSize: 14,
            fill: '#333',
          }
        }}/>
      </div>
      <div className={`${styles.graphItem}`}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>

    </section>
  ) 
  else return <div style={{margin: "2.2rem 0", textAlign: "center", color: "#8c8c8c"}}>Não há imagens postadas</div>
}

export default UseStatsGraph