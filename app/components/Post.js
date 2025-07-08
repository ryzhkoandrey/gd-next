import Link from 'next/link';

function Post({ post }) {
   return (
      <div>
         <Link href="/">Back</Link>
         <br />
         <br />
         <p>{post.id}</p>
         <h1>{post.title}</h1>
         <p>{post.body}</p>
         <strong>Avtor id: {post.userId}</strong>
      </div>
   );
}

export default Post;
