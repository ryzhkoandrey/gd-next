async function fetchData() {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
   const result = await res.json();
   return result;
}

export default async function Home() {
   const posts = await fetchData();

   return (
      <div>
         <h1>Главная страница</h1>
         {posts.map((el) => (
            <div key={el.id}>{el.title}</div>
         ))}
      </div>
   );
}
