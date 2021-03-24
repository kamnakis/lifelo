export interface Profile {
  id: number | string
  fullName: string
  profileImage: string
  description: string
}

export interface Post {
  user: Profile
  body: string
  likes: Profile[]
  comments: {
    from: Profile
    comment: string
  }[]
} 