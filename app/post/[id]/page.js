import Post from '@/app/components/Post';

export async function generateStaticParams() {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
   const posts = await res.json();

   const limitedPosts = posts.slice(0, 10); // только первые 10

   return limitedPosts.map((post) => ({
      id: post.id.toString(),
   }));
}

export async function generateMetadata({ params, searchParams }) {
   const post = await fetchData(params.id);
   return {
      title: `${post.id} - ${post.title}`,
      description: post.body,
   };
}

async function fetchData(id) {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
   const result = await res.json();
   return result;
}

const PagePost = async ({ params: { id } }) => {
   const post = await fetchData(id);

   return (
      <div className="post">
         <Post post={post} />
      </div>
   );
};

export default PagePost;
