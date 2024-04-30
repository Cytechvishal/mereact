import React from "react";
import {Car} from './car'
import { Content } from "./main";
import { Content2 } from "./main2";
import { Btn1 } from "./main2btn";
import { M3content } from "./main3";
import { Certificate } from "./certificate";
import { Schedule } from "./schedule";
import { MapComponent } from "./map";
import { Booter } from "./footer";

import { h } from "./daata";
import {cars} from './daata'
import { CarsAgain } from "./daata";

export const Home=()=>{
   
    
      
    return(<>
    

        <Car />

        <Content  h0={h} dd={cars} ddd={CarsAgain}  />
        <Content2 />
        <Btn1 data1="Explore more " data2="services" />
        <M3content />
       
        <Certificate />
       <Schedule />

       <MapComponent />
       <Booter />

       

    </>)
}