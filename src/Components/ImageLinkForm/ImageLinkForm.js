import React from "react";
import 'tachyons';
import './ImageLink.css'

const ImageLinkForm = ({oninputchange,onpress}) => {
    return (
        <div>
            <p className="3">
                {'This magic will detect faces in your pictures. Give it a try'}
            </p>
            <div className="center">
                <input className='input' type="text" onChange={oninputchange} />
                <button className="" onClick={onpress}>
                    Detect
                </button>
            </div>
        </div>
    );
}

export default ImageLinkForm;
