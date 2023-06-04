import { useEffect, useState } from 'react'
import { Movie } from '../Types/Movie'
import { useSelector } from "react-redux"
export default function useGetMovies(title: string) {
  const emptyMovieArray: Array<Movie> = []
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [movies,setMovies] = useState(emptyMovieArray)
  const allMovies: Array<Movie> = useSelector(
    (state: any) => state.movies
  )
  const regexPattern = new RegExp(title,'i');
  const descendingMovies = [...allMovies].reverse()
  useEffect(() => {
    
    try {      
      setLoading(true)
      setError(false)
      if(title.length===0){setMovies(descendingMovies)}
      else{
        setMovies(movies.filter((m:Movie)=>regexPattern.test(m.title)))
      }
      
      setLoading(false)

    } catch (error) {
      setLoading(false)
      setError(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title])

  return { movies, loading, error }
}
