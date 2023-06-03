import { useEffect, useState } from 'react'
import { Genre } from '../Types/Genre'

export default function useGetGenres() {
  const [genres, setGenres] = useState<Array<Genre>>([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    try {
      setLoading(true)
        setGenres([{"id":10770,"name":"TV Movie"},{"id":10752,"name":"War"},{"id":10751,"name":"Family"},{"id":10749,"name":"Romance"},{"id":9648,"name":"Mystery"},{"id":878,"name":"Sci-Fi"},{"id":99,"name":"Documentary"},{"id":80,"name":"Crime"},{"id":53,"name":"Thriller"},{"id":37,"name":"Western"},{"id":36,"name":"History"},{"id":35,"name":"Comedy"},{"id":28,"name":"Action"},{"id":27,"name":"Horror"},{"id":18,"name":"Drama"},{"id":16,"name":"Animation"},{"id":14,"name":"Fantasy"},{"id":12,"name":"Adventure"}])
        setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }, [])

  return { genres, loading, error }
}
