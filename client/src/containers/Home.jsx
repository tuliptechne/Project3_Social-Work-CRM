import React from 'react';
import TopNav from '../components/TopNav'
import MainNav from '../components/MainNav'
import Banner from '../components/Banner'
import AnimationHeader from '../components/AnimationHeader'
import RegistrationForm from './RegistrationForm';
import Login from '../components/Login';

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <AnimationHeader />
            <RegistrationForm />
            <Login />
            <RegistrationForm />
            <Login />
        </div>
    )
}

export default Home;
