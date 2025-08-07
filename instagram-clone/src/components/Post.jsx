import "../styles/post.scss"

const Post = () => {
    const posts = [
        { id: 1, type: "image", src: require("../assets/posts/Gallery Post (1).png") },
        { id: 2, type: "video", src: require("../assets/posts/Gallery Post (2).png") },
        { id: 3, type: "image", src: require("../assets/posts/Gallery Post.png") },
        { id: 4, type: "image", src: require("../assets/posts/Rectangle (3).png") },
        { id: 5, type: "video", src: require("../assets/posts/Rectangle (4).png") },
        { id: 1, type: "image", src: require("../assets/posts/Gallery Post (1).png") },
        { id: 2, type: "video", src: require("../assets/posts/Gallery Post (2).png") },
        { id: 3, type: "image", src: require("../assets/posts/Gallery Post.png") },
        { id: 4, type: "image", src: require("../assets/posts/Rectangle (3).png") },
        { id: 5, type: "video", src: require("../assets/posts/Rectangle (4).png") },
        { id: 1, type: "image", src: require("../assets/posts/Gallery Post (1).png") },
        { id: 2, type: "video", src: require("../assets/posts/Gallery Post (2).png") },
        { id: 3, type: "image", src: require("../assets/posts/Gallery Post.png") },
        { id: 4, type: "image", src: require("../assets/posts/Rectangle (3).png") },
        { id: 5, type: "video", src: require("../assets/posts/Rectangle (4).png") },
        { id: 1, type: "image", src: require("../assets/posts/Gallery Post (1).png") },
        { id: 2, type: "video", src: require("../assets/posts/Gallery Post (2).png") },
        { id: 3, type: "image", src: require("../assets/posts/Gallery Post.png") },
        { id: 4, type: "image", src: require("../assets/posts/Rectangle (3).png") },
        { id: 5, type: "video", src: require("../assets/posts/Rectangle (4).png") },
        { id: 1, type: "image", src: require("../assets/posts/Gallery Post (1).png") },
        { id: 2, type: "video", src: require("../assets/posts/Gallery Post (2).png") },
        { id: 3, type: "image", src: require("../assets/posts/Gallery Post.png") },
        { id: 4, type: "image", src: require("../assets/posts/Rectangle (3).png") },
        { id: 5, type: "video", src: require("../assets/posts/Rectangle (4).png") },
        { id: 3, type: "image", src: require("../assets/posts/Gallery Post.png") },
        { id: 4, type: "image", src: require("../assets/posts/Rectangle (3).png") },
        { id: 5, type: "video", src: require("../assets/posts/Rectangle (4).png") },
        { id: 1, type: "image", src: require("../assets/posts/Gallery Post (1).png") },
        { id: 2, type: "video", src: require("../assets/posts/Gallery Post (2).png") },
        { id: 3, type: "image", src: require("../assets/posts/Gallery Post.png") },
        { id: 4, type: "image", src: require("../assets/posts/Rectangle (3).png") },
        { id: 5, type: "video", src: require("../assets/posts/Rectangle (4).png") },
        // Add more posts as needed
    ];
    return (

        <div className="post-constainer">
            {posts.map((post) =>
                post.type === "image" ? (
                    <img key={post.id} src={post.src} alt="" className="post-item" />
                ) : (
                    <video key={post.id} src={post.src} controls className="post-item" />
                )
            )}



        </div>
    );
}

export default Post;