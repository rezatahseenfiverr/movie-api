import { useEffect, useState } from "react"
import CardItems from "./components/CardItems"
import MyNavbar from "./components/MyNavbar"
import LoadingEffect from "./components/LoadingEffect";


function App() {
  const [MovieList,setMovieList] = useState([]);
  const [Loading,setLoading] = useState(true);

  async function getMovies(){
    setLoading(true);
    const response = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_MY_API}&language=en-US&page=1`)
   
    const data = await response.json();
    setMovieList(data.results)
    setLoading(false);
  }

  useEffect(() =>{
      getMovies();
      
  }, [])
  console.log(MovieList)

  return (
    <>
      <MyNavbar />
      {
        Loading ? (<LoadingEffect />):(<div className="flex container mx-auto gap-2 flex-wrap my-3">
          {
            MovieList.map((movie) => (
              <CardItems  key={movie.id} moviesInfo={movie}/>
            ))
          }
          
          </div>)
      }
      
    </>
  )
}

export default App
