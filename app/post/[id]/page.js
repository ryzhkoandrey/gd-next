import Link from 'next/link';

async function fetchData(id) {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
   const result = await res.json();
   return result;
}

const Post = async ({ params: { id } }) => {
   const post = await fetchData(id);

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
};

export default Post;
