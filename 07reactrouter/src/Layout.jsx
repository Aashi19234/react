import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>

        <Footer/>

        </>
    )
}

export default Layout

/*
Outlet-> it will use our layout as a base and jo bhi ham upr neeche ka denge vo same rhega, for example acc. to ourrequirement agr hamne <Outlet/> header footer k beech m dia toh vo upr aur neeche ka hmara same rhega
and agr outlet in dono k neeche dia toh vo tb bhi same rhega



*/