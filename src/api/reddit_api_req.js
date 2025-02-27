import { createAsyncThunk } from "@reduxjs/toolkit"; 
const reddit_popular_json = "https://www.reddit.com/r/popular.json"


const getRedditData = createAsyncThunk('redditAPI/getRedditPosts',
  async () => {
    try {
      const response = await fetch(reddit_popular_json);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      return json.data
      //return json.data.children.map(post => <li>{post.title}</li>);
    } catch (error) {
      console.error(error.message);
    }
      
  }
)

export {getRedditData};

