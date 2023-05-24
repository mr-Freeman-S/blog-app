import axios, {AxiosResponse} from 'axios';
import {PostType} from "../types";

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})

interface AppAPI {
  getAllPosts(): Promise<AxiosResponse<PostType[]>>;
  getPostComments(postId: number): Promise<AxiosResponse<PostType[]>>;
  getUserInfo(userId: number): Promise<AxiosResponse<any>>;
  getUserPosts(userId: number): Promise<AxiosResponse<PostType[]>>;
}

export const appAPI: AppAPI = {
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