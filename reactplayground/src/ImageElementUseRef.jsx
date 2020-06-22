import React, { useRef } from 'react';
import imageBW from './imageBW.jpg'
import imageColored from './imageColored.jpg'

const ImageToggle = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);
    let paraRef = useRef(null);
    return (
        <div className="row">
            <div className="col-sm">
                <img
                    ref={imageRef}
                    onMouseOver={() => {
                        imageRef.current.src = imageColored
                    }}
                    onMouseOut={() => {
                        imageRef.current.src = imageBW;
                    }}
                    className=" rounded mx-auto img-thumbnail"
                    style={{ "width": "200px" }}
                    src={imageBW}
                    alt="Black and White"
                />
                <h5 className="mt-0">Images and Refs</h5>
                <p
                    ref={paraRef}
                    onMouseOut={() => {
                        paraRef.current.innerHTML = "This is the black and white image. Hovering over it will show its color image with a hint of b&w"
                        
                    }}
                    onMouseOver={() => {
                        paraRef.current.innerHTML = "This is the colored image with a hint of b&w"
                    }}
                />                    
                
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