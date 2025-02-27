import { createSlice } from '@reduxjs/toolkit'
import {getRedditData} from '../api/reddit_api_req.js'

const redditPostsSlice = createSlice({
    name: "redditPosts",
    initialState: [],
    reducers: {
        addPostsToFeed (state) {
            let newPosts = getRedditData()
            state.value = [...state.value, newPosts]
        }
    }
})