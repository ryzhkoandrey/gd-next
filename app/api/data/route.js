export async function GET(request) {
   const data = {
      name: 'Bob',
      age: 10,
      bio: 'Some info',
   };

   return new Response(JSON.stringify(data));
}
