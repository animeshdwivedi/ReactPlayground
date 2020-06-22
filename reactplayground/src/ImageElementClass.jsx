import React, { Component, createRef } from 'react';
import imageBW from './imageBW.jpg'
import imageColored from './imageColored.jpg'


class ImageClassToggle extends ImageClassToggle {
    constructor(props) {
        super(props);
        this.state = {
            primaryImage: props.primaryImage,
            secondaryImage: props.secondaryImage,
            paraText: "This is the black and white image. Hovering over it will show its color image with a hint of b&w"
        };
        imageRef = createRef();
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm">
                    <img
                        ref={this.imageRef}
                        onMouseOver={() => {
                            imageRef.current.src = secondaryImg;
                            this.setState({ paraText: "This is the colored image with a hint of b&w" });
                        }}
                        onMouseOut={() => {
                            imageRef.current.src = primaryImg;
                            this.setState({ paraText: "This is the black and white image. Hovering over it will show its color image with a hint of b&w" });
                        }}
                        className=" rounded mx-auto img-thumbnail"
                        style={{ "width": "200px" }}
                        src={imageBW}
                        alt="Black and White"
                    />
                    <p>{this.state.paraText}</p>
                    <hr /><br />
                </div>
            </div>
        );
    }
}



class ImageElementClass extends Component {
    render() {
        return (
            <ImageClassToggle
                primaryImage={imageBW}
                secondaryImage={imageColored}
            />
        );
    }
};

export default ImageElementClass;