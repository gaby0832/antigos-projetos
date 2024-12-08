import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import { PHOTO_GET } from '../../api';
import PhotoContent from './PhotoContent';
import Head from "../Helper/Head"

function Photo() {
    const {id} = useParams();
    const {data, error, loading, request} = useFetch();

    useEffect(()=>{
        const {url, options} = PHOTO_GET(id);
        request(url,options);
    },[request, id])

    if(error) return <Error error={error}/>
    if(loading) return <Loading/>
    if(!data) return null
    else return (
        <div className='container'>
            <Head title={data.photo.title} description="Uma rede social para cães e gatos fofos."/>
            <PhotoContent single={true} data={data}/>
        </div>
    )
}

export default Photo