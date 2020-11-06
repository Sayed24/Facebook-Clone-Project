import React from 'react';
import './StoryReel.css';
import Story from "./Story";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://scontent.fsac1-1.fna.fbcdn.net/v/t1.0-9/51775664_916542131881888_5353898251697258496_o.jpg?_nc_cat=111&ccb=2&_nc_sid=8bfeb9&_nc_ohc=aoZ1vTmxYWYAX_63HtZ&_nc_ht=scontent.fsac1-1.fna&oh=5db5bed28511fee01152894d9b55ed3d&oe=5FCB3E93"
                profileSrc="https://scontent.fsac1-1.fna.fbcdn.net/v/t31.0-1/p200x200/26910252_703819823154121_6652453779003603140_o.jpg?_nc_cat=111&ccb=2&_nc_sid=7206a8&_nc_ohc=P6mpHHKXF18AX9hKYuQ&_nc_oc=AQkpN8P8OBxCd-8DitgE4X2UVmawQLLX5-vd2IgTGP16GQWskQes6ifCv0jR4GHOSIP7w4h62zpi2AewXJOA7bW1&_nc_ht=scontent.fsac1-1.fna&tp=6&oh=8707be421857777f6c26885d9664f021&oe=5FC94D5D"
                title="SayedRahim Sadat"
            />
            <Story
                image="https://i.pinimg.com/originals/b0/86/38/b0863898da87ff074d83cc3dc7bf9a2a.jpg"
                profileSrc="https://i.ytimg.com/vi/TcxzDcffZ9U/maxresdefault.jpg"
                title="Amazing Places"
            />
            <Story
                image="https://miro.medium.com/max/1024/1*egOeK5Y9CabeKsnR4vMkhQ.jpeg"
                profileSrc="https://static.frontendmasters.com/assets/courses/2020-02-14-pure-react-state/thumb@2x.jpg"
                title="Learn React JS"
            />
            <Story
                image="https://miro.medium.com/max/10368/0*6TwGvW85f20MMmIr"
                profileSrc="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg"
                title="Online Programming"
            />
            <Story
                image="https://upload.wikimedia.org/wikipedia/commons/b/b6/Shaki_Waterfall%2C_Armenia_-_%D5%87%D5%A1%D6%84%D5%AB%D5%AB_%D5%BB%D6%80%D5%BE%D5%A5%D5%AA%2C_%D5%80%D5%A1%D5%B5%D5%A1%D5%BD%D5%BF%D5%A1%D5%B6.jpg"
                profileSrc="https://www.ietravel.com/sites/iet/files/styles/panopoly_image_original/public/kaieteur.jpg?t=1JTwyD&itok=VE3tiKe9"
                title="Beauty of Nature"
            />
        </div>
    );
}

export default StoryReel;
