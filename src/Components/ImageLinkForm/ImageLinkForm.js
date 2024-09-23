import React from "react";
import 'tachyons';
import './ImageLink.css'

const ImageLinkForm = () => {
    return (
        <div>
            <p className="3">
                {'This magic will detect faces in your pictures. Give it a try'}
            </p>
            <div className="center">
                <input className='input' type="text" />
                <button className="">
                    Detect
                </button>
            </div>
        </div>
    );
}

export default ImageLinkForm;
