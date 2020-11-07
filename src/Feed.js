import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post
                profilePic="https://scontent.fsac1-1.fna.fbcdn.net/v/t31.0-1/p200x200/26910252_703819823154121_6652453779003603140_o.jpg?_nc_cat=111&ccb=2&_nc_sid=7206a8&_nc_ohc=P6mpHHKXF18AX9hKYuQ&_nc_oc=AQkpN8P8OBxCd-8DitgE4X2UVmawQLLX5-vd2IgTGP16GQWskQes6ifCv0jR4GHOSIP7w4h62zpi2AewXJOA7bW1&_nc_ht=scontent.fsac1-1.fna&tp=6&oh=8707be421857777f6c26885d9664f021&oe=5FC94D5D"
                message="Ohhh, it looks pretty nice!"
                timestamp="Here is the timestamp"
                username="SayedRahim Sadat"
                image="https://scontent.fsac1-1.fna.fbcdn.net/v/t1.0-9/51775664_916542131881888_5353898251697258496_o.jpg?_nc_cat=111&ccb=2&_nc_sid=8bfeb9&_nc_ohc=aoZ1vTmxYWYAX_63HtZ&_nc_ht=scontent.fsac1-1.fna&oh=5db5bed28511fee01152894d9b55ed3d&oe=5FCB3E93"
            />

            <Post
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSu6oM-J1ZnxnfIc3Ra6RoXI7PG9wY-lKywQQ&usqp=CAU"
                message="Awesome View"
                timestamp="TimeStamp here"
                username="The Great Man"
                image="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/amazing-view-eduard-valentinov.jpg"
            />
            <Post
                profilePic="https://wallpaperstock.net/amazing-view-of-italy-wallpapers_51069_1920x1200.jpg"
                message="Nie Sky View"
                timestamp="This is a timestamp"
                username="Sky Views"
                image="https://i.pinimg.com/originals/35/c4/3d/35c43d2a265d8f90d3555570f7c9729f.jpg"
            />
        </div>
    );
}

export default Feed;
