export type PostType = {
  id: number
  title: string
  body: string
  userId: number
}

export type CommentType = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export type UserInfoType = {
  id: number
  name: string
  username: string
  email: string
  address: AddressType
  phone: string
  website: string
  company: CompanyType
}

export type AddressType = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: GeoType
}

export type GeoType = {
  lat: string
  lng: string
}

export type CompanyType = {
  name: string
  catchPhrase: string
  bs: string
}