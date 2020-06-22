import React, { useRef, useState } from 'react';
import imageBW from './imageBW.jpg'
import imageColored from './imageColored.jpg'

const ImageToggle = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);
    const [paraText, setParaText] = useState("This is the black and white image. Hovering over it will show its color image with a hint of b&w");
    return (
        <div className="row">
            <div className="col-sm">
                <img
                    ref={imageRef}
                    onMouseOver={() => {
                        imageRef.current.src = secondaryImg;
                        setParaText("This is the colored image with a hint of b&w");
                    }}
                    onMouseOut={() => {
                        imageRef.current.src = primaryImg;
                        setParaText("This is the black and white image. Hovering over it will show its color image with a hint of b&w");
                    }}
                    className=" rounded mx-auto img-thumbnail"
                    style={{ "width": "200px" }}
                    src={imageBW}
                    alt="Black and White"
                />
                <p>{paraText}</p>
                <hr /><br />
            </div>
        </div>
    );
};

const ImageElementUseRef = () => {
    return (
        <div>
            <ImageToggle
                primaryImg={imageBW}
                secondaryImg={imageColored}
            />
        </div>
    )
}


export default ImageElementUseRef;