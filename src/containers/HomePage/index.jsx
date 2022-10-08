import React, { useState } from 'react';
import { Navbar } from '../../components/button/navbar';
import { Info } from '../../components/info';
import { Reason } from './reason';
import {TopSection}  from './topSection';
import { Cards } from '../cards';
import { Search } from '../search';
import { HackCard } from '../../components/Hackathons';

export function HomePage(props){
    
    return <div>
        <Navbar/>
        <TopSection/>
        <Info/>
        <Reason/>
        <Cards/>
        <Search  />
        <HackCard/>
    </div>
}