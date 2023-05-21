import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})

export const appAPI = {
  getAllPosts() {
    return instance.get('posts')
  },

  getPostComments(postId: number) {
    return instance.get(`comments?postId=${postId}`)
  },

  getUserInfo(userId: number) {
    return instance.get(`users/${userId}`)
  },

  getUserPosts(userId: number) {
    return instance.get(`posts?userId=${userId}`)
  }
}