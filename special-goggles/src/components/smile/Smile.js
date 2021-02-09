import React from "react";
import * as tf from "@tensorflow/tfjs";
import * as toxicity from '@tensorflow-models/toxicity';

const Smile = ({userObj}) => {
    const threshold = 0.9;          // The minimum prediction confidence.
    let model, labels;

    // Load the model    
    toxicity.load(threshold).then(model => {

    });


    return(
        <div>
            <h1>Smile</h1>
        </div>
    );
}

export default Smile;