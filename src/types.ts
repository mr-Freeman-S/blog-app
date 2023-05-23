export type PostType = {
  id:number
  title:string
  body: string
  userId:number
  isLoading: boolean
}

export type CommentType = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}