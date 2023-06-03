import { useEffect, useState } from 'react'
import { Movie } from '../Types/Movie'
import { useSelector } from 'react-redux/es/exports'
export default function useSearchProducts() {
  const emptyProductArray: Array<Movie> = []
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState(emptyProductArray)
  const popularMovies:Array<Movie>  = useSelector((state:any)=>state.popularMovies)
  useEffect(() => {
    try {
      setLoading(true)
      setError(false)
      setMovies(popularMovies)
      setLoading(false)
    } catch (error) {
      setError(true)
    }
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { movies, loading, error }
}
