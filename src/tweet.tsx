// Tweet.js
import { useState } from 'react';

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/

type Props = {
    id:number;
    name: string;
    content: string;
    initlikes: number;
    timestamp: string;
}
export default function Tweet({id, name, content, initlikes, timestamp}:Props){
    const [likes, setLikes] = useState(initlikes)
    const [heart, setHeart] = useState('🤍')
    function handleLikes(){
        if (heart == '🤍') {
            setHeart('❤️')
            setLikes(likes+1)
        } else {
            setHeart('🤍')
            setLikes(likes-1)
        }
    }
    return (
        <div key={id} className="tweet">
            <h3>@{name}</h3>
            <p>{content}</p>
            <p>{timestamp} ago</p>
            <button onClick={handleLikes}>{heart} {likes} likes</button>
        </div>
    )
}
