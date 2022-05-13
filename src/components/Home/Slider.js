import React from 'react';
import Carousel from 'react-elastic-carousel'
import { Test } from './Test';

export function SliderProduct() {
    return (
        <div className='container' style={{marginTop:'200px'}}>
            <Carousel itemsToShow={3} transitionMs="500" pagination={false}>
                <Test>1</Test>
                <div style={{backgroundColor:"green", width:"500px", height:"500px",cursor:"pointer",marginRight:'20px'}}></div>
                <div style={{backgroundColor:"red", width:"500px", height:"500px",cursor:"pointer",marginRight:'20px'}}></div>
                <div style={{backgroundColor:"yellow", width:"500px", height:"500px",cursor:"pointer",marginRight:'20px'}}></div>
                <Test>4</Test>
            </Carousel>
        </div>
    )
}