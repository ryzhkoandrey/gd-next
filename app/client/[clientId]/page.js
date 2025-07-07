export default async function ClientId(props) {
   const params = await props.params;

   return (
      <div>
         <h1>ClientId страница</h1>
         <p>{params.clientId}</p>
      </div>
   );
}
