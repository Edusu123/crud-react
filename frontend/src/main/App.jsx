import React from "react"
import Footer from '../components/template/Footer'
import Logo from '../components/template/Logo'
import Main from '../components/template/Main'
import Nav from '../components/template/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

// commit test

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main icon="home" subtitle="Segundo projeto do capítulo de React." title="Início" />
        <Footer />
    </div>
