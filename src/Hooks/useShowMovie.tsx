import  { useEffect, useState } from 'react'
import { Movie } from '../Types/Movie'
import { useSelector } from 'react-redux'

export default function useShowMovie(id: number | null | undefined) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [movie, setMovie] = useState<Movie>()
  const movies:Array<Movie> = useSelector((state:any)=>state.movies)
  useEffect(() => {
    if (!id) {
      setError(true)
      setLoading(false)
    } else {
      try {
        setLoading(true)
        setError(false)
          setMovie(movies.find((m:Movie)=>m.id===id ))
          setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }
  }, [id, movies])
  return { loading, movie, error }
}
