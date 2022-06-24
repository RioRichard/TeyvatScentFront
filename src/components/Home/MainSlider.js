import SimpleImageSlider from "react-simple-image-slider";
import React from 'react'
import Url from '../Home/URL'

export function MainSlider() {

    const images = [
        { url: Url+'/FELogo/banner1.jpg' },
        { url: Url+'/FELogo/banner2.jpg' },
        { url: Url+'/FELogo/banner3.jpg' },
        { url: Url+'/FELogo/banner4.jpg' },
        // { url: "images/5.jpg" },
        // { url: "images/6.jpg" },
        // { url: "images/7.jpg" },
    ];

    return (
        <div className="container" style={{marginTop:'200px'}}>
            <SimpleImageSlider style={{position:'relative', marginLeft:'100px'}}
                width={1090}
                height={480}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
            />
        </div>
    );
}