export type PostType = {
  id:number
  title:string
  body: string
  userId:number
}

export type CommentType = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}