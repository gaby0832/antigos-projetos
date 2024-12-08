import React from 'react'
import { UserContext } from '../../UserContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import UserHeader from './UserHeader';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import NotFound from '../Helper/NotFound';
import Head from "../Helper/Head"

const User = () => {
  
    const {data,login} = React.useContext(UserContext);

    if(login === false) return <Navigate to="/login"/>;
    if(data)
    return (
        <div className="container">
            <Head title="Minha Conta" description="Uma rede social para cães e gatos fofos."/>
            <UserHeader/>
            <div>    
                <Routes>
                    <Route path="/" element={<Feed user={data.id} />} />
                    <Route path="postar" element={<UserPhotoPost/>} />
                    <Route path="estatisticas" element={<UserStats/>} />                    
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </div>
        </div>
    )
    else return <Navigate to="/login"/>;
}

export default User