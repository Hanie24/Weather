import React from 'react';

const ExtraInformation = ({ humidity, wind }) => {
    return(
        <div>
            <p>{`${humidity} % - `}
                <span>{`${wind} viento`}</span>
            </p>
        </div>
    );
}

export default ExtraInformation;