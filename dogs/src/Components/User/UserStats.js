import React from 'react'
import Head from "../Helper/Head"
import Error from "../Helper/Error"
import Loading from "../Helper/Loading"
import useFetch from "../../Hooks/useFetch";
import {STATS_GET} from "../../api";
const UseStatsGraph = React.lazy(()=> import('./UseStatsGraph'))
const UserStats = () => {

  const {data,loading, error, request} = useFetch();

  React.useEffect(()=>{
    async function getData(){
      const token = window.localStorage.getItem('token');
      const {url,options} = STATS_GET(token);
      await request(url,options);
    }getData();
  },[request])

  if(error) return <Error error={error}/>
  if(loading) return <Loading/>
  if(data)
  return (
    <React.Suspense fallback={<div></div>}>
      <Head title="Estatistícas" description="Uma rede social para cães e gatos fofos."/>
      <div>
        <UseStatsGraph data={data}/>
      </div>
    </React.Suspense>
  )
  else return null;
}

export default UserStats