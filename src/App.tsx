// App.js
import Tweet from './tweet';
import { tweetsData } from './data';

/* Do not write your tweet component here, write it in the tweet.tsx file */

function App() {
  const list = tweetsData.map((curr)=>
    <div>
      <Tweet 
        id={curr.id} 
        name={curr.username} 
        content={curr.content}
        initlikes={curr.likes}
        timestamp={curr.timestamp}
      ></Tweet>
    </div>
  )
  return (
    <div className="app">
      <h1>Twitter Clone</h1>
      <div className="feed">
        {list}
      </div>
    </div>
  );
}

export default App;
