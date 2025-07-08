async function fetchData(id) {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
   const result = await res.json();
   return result;
}

const Post = async ({ params: { id } }) => {
   const post = await fetchData(id);

   return (
      <div>
         <strong>{post.id}</strong>
         <h1>{post.title}</h1>
         <p>{post.body}</p>
         <p>Avtor id: {post.userId}</p>
      </div>
   );
};

export default Post;
