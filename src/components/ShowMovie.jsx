export const ShowMovie=({nombre,titulo,id})=>{
const ruta=`https://image.tmdb.org/t/p/w500${nombre}`

document.querySelector('.card-grid').addEventListener('click',(e)=>{

     if(e.target.dataset?.id){
          console.log(e.target)

     }
})


return(

    <div className="card">
    <img src={ruta} width="250" height="250" data-id={id}alt={titulo}/>
    <p>{titulo}</p>
    </div>         

)



}