import SimpleImageSlider from "react-simple-image-slider";
import React, { useState, useEffect } from 'react'

export function MainSlider() {
    const images = [
        { url: "https://nuochoarosa.com/wp-content/uploads/2020/10/1.png" },
        { url: "https://nuochoarosa.com/wp-content/uploads/2020/05/4-01.png" },
        { url: "https://nuochoarosa.com/wp-content/uploads/2021/02/4.png" },
        { url: "https://nuochoarosa.com/wp-content/uploads/2020/05/Daily-sale.jpg" },
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