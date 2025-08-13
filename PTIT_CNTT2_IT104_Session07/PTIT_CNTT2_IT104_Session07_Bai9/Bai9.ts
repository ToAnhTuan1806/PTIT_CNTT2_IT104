class Comment {
    public id: number;
    public userId: number;
    public content: string;
    public replies: Comment[] = [];

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
    }

    addReply(reply: Comment): void {
        this.replies.push(reply);
    }
}

class Post {
    public id: number;
    public userId: number;
    public content: string;
    public likes: number[] = [];
    public comments: Comment[] = [];

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
    }

    addLike(userId: number): void {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }

    addComment(comment: Comment): void {
        this.comments.push(comment);
    }
}

class User {
    public id: number;
    public posts: Post[] = [];
    public followers: User[] = [];

    constructor(id: number) {
        this.id = id;
    }

    createPost(postId: number, content: string): void {
        const newPost = new Post(postId, this.id, content);
        this.posts.push(newPost);
    }

    comment(post: Post, commentId: number, commentContent: string): void {
        const newComment = new Comment(commentId, this.id, commentContent);
        post.addComment(newComment);
    }

    follow(user: User): void {
        if (!this.followers.includes(user)) {
            this.followers.push(user);
        }
    }

    likePost(post: Post): void {
        post.addLike(this.id);
    }

    viewFeed(): Post[] {
        let feed: Post[] = [];
        for (let user of this.followers) {
            for (let post of user.posts) {
                feed.push(post);
            }
        }
        return feed;
    }
}

const user1 = new User(1);
const user2 = new User(2);
const user3 = new User(3);

user2.createPost(101, "Bài đăng của user2");
user3.createPost(201, "Bài đăng của user3");

user1.follow(user2);
user1.follow(user3);

const feed = user1.viewFeed();
console.log("Feed của user1:");
for (let post of feed) {
    console.log(`PostID: ${post.id}, UserID: ${post.userId}, Content: ${post.content}`);
}

if (user2.posts[0]) {
    user1.likePost(user2.posts[0]);
    console.log("Likes bài đăng của user2:", user2.posts[0].likes);
}

if (user3.posts[0]) {
    user1.comment(user3.posts[0], 301, "Bình luận của user1");
    console.log("Comments bài đăng của user3:", user3.posts[0].comments);
}
