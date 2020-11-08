import React from 'react';
import './Widgets.css';

function Widgets() {
    return (
        <div className="widgets">
            <ifram
                src="https://www.facebook.com/votinginformationcenter"
                width="340"
                hight="100%"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media"
            >
            </ifram>
        </div>
    );
}

export default Widgets;
