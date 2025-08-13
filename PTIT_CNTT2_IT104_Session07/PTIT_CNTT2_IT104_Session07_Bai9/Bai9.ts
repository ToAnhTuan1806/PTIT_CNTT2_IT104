class Comment{
    public id:number
    public userId:number
    public content:string
    public replies: Comment[]=[]

    constructor(id:number, userId:number, content:string){
        this.id=id
        this.userId=userId
        this.content=content
    }
    addReply(reply: Comment):void{
        this.replies.push(reply)
    }
}

class Post{
    public id:number
    public likes: number[]=[]
    public comments: Comment[]=[]
    public userId: number
    public content: string

    constructor(id:number, userId:number, content:string){
        this.id=id
        this.userId=userId
        this.content=content
    }

    addLike(userId:number):void{
        if(!this.likes.includes(userId)){
            this.likes.push(userId)
        }
    }

    addComment(comment: Comment):void{
        this.comments.push(comment)
    }
}

class User{
    public id:number
    public posts:Post[]=[]
    public followers:User[]=[]
    constructor(id:number){
        this.id=id
    }

    createPost(postId:number ,content:string):void{
        let newPost= new Post(postId, this.id, content)
        this.posts.push(newPost)
    }

    comment(postId:number, commentId:number, commentContent:string, allPosts:Post[]):void{
        let post=  allPosts.find(p => p.id===postId)
        if(post){
            let newComment= new Comment(commentId, this.id, commentContent)
            post.addComment(newComment)
        }
    }

    follow(user:User):void{
        if(!this.followers.includes(user)){
            this.followers.push(user)
        }
    }

    likePost(postId:number, allPosts:Post[]):void{
        let post= allPosts.find(p => p.id === postId)
        if(post){
            post.addLike(this.id)
        }
    }

    viewFeed():Post[] {
        let feed:Post[] = [];
        for (let i=0; i<this.followers.length; i++) {
            for (let j=0; j<this.followers[i].posts.length; j++) {
                feed.push(this.followers[i].posts[j]);
            }
        }
        return feed;
    }
}

let user1 = new User(1)
let user2 = new User(2)

user1.createPost(101, "Xin chào mọi người!")
user1.createPost(102, "Hôm nay trời đẹp quá!")

user2.follow(user1)

let feed = user2.viewFeed()
console.log("Feed của user2:", feed)

user2.likePost(101, user1.posts)

user2.comment(101, 201, "Chào bạn!", user1.posts)
user2.comment(102, 202, "Thật tuyệt!", user1.posts)

console.log("Bài đăng của user1:")
for (let p of user1.posts) {
    console.log(`Post ID: ${p.id}, Content: ${p.content}, Likes: ${p.likes.length}`)
    for (let c of p.comments) {
        console.log(`  Comment ID: ${c.id}, User: ${c.userId}, Content: ${c.content}`)
    }
}
