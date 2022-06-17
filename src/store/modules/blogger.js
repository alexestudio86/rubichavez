import {blogID, apiKey} from '@/config.js'


export default {
  namespaced: true,
  state: {
    posts: [],
    post: [],
    postByLabels: [],
    loader: null
  },
  mutations: {
    allPost( state, postsJson ){
      state.loader        = false;
      state.posts         = postsJson;
    },
    singlePost( state, postJson ){
      state.loader        = false;
      state.post          = postJson;
      state.loader        = false
    },
    postBySearch( state, postJson){
      state.loader        = false;
      state.posts         = postJson
    },
    postByLabels( state, postJson){
      state.loader        = false;
      state.posts         = postJson
    }
  },
  actions: {
    getAllProducts: async function ({ commit, state }) {
      state.loader        = true;
      try{
        // No utilizar limitante de max-results
        const data        = await fetch(`https://www.blogger.com/feeds/5038678016736099105/posts/default?alt=json`);
        const allData     = await data.json();
        const feedJson   = allData.feed.entry;
        commit('allPost', feedJson)
      }catch(error){
        console.log(error)
      }
    },
    getSingleProduct: async function( {commit, state}, evt ){
      state.loader        = true;
      try{
        const data        = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts/${evt}?key=${apiKey}&fetchImages=true`);
        const postJson    = await data.json();
        commit('singlePost', postJson)
      }catch(error){
        console.log(error)
      }
    },
    // This kind of search dont support images attached or miniatures
    getProductsBySearch: async function( {commit, state}, evt ){
      state.loader        = true;
      try{
        const data        = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts/search?key=${apiKey}&q=${evt}&maxResults=200`);
        const allData     = await data.json();
        const postsJson   = allData.items;
        commit('postBySearch', postsJson)
      }catch(error){
        console.log(error);
      }
    },
    getProductsByLabels: async function( {commit, state}, evt ){
      state.loader        = true;
      try{
        const data        = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?key=${apiKey}&labels=${evt}&fetchImages=true&maxResults=200`);
        const allData     = await data.json();
        const postsJson   = allData.items;
        commit('postByLabels', postsJson)
      }catch(error){
        console.log(error);
      }
    }
  }
}