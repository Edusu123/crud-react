import React from "react"
import Footer from '../components/template/Footer'
import Home from "../components/home/Home"
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Home></Home>
        <Footer />
    </div>
