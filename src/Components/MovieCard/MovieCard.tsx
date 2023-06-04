import React, { useEffect, useMemo, useState } from 'react'
import { Movie } from '../../Types/Movie'
import styles from './moviecard.module.css'
import { NavLink } from 'react-router-dom'
import RateIcon from '../UI/Icons/RateIcon'
import CheckMarkIcon from '../UI/Icons/CheckMarkIcon'
import TrashIcon from '../UI/Icons/TrashIcon'
import EditIcon from '../UI/Icons/EditIcon'
import PlusIcon from '../UI/Icons/PlusIcon'
type props = { movie: Movie; deleteMovie: Function; addMovie: Function }
export default function MovieCard({ movie, deleteMovie, addMovie }: props) {
  const [deleted, setDeleted] = useState(false)
  const [added, setAdded] = useState(movie.owned)
  const [id, setId] = useState<number|null>(null)
  const [genresString, setGenresString] = useState('')
  const cardClassName = useMemo(() => {
    let cardClass = styles.card
    if (deleted) cardClass += ` ${styles.deleted}`
    if(!added) cardClass +=  ` ${styles.notOwned}`
    return cardClass
  }, [deleted,added])
  

  const rateClassName = () => {
    let rateClass = styles.rate
    if (movie.rating && movie.rating >= 7) rateClass += ` ${styles.highRate}`
    if (movie.rating && movie.rating >= 4 && movie.rating < 7) rateClass += ` ${styles.averageRate}`
    if (movie.rating && movie.rating < 4) rateClass += ` ${styles.lowRate}`
    return rateClass
  }

  useEffect(() => {
    setId(movie.id)
    const genreNames = movie.genres.map((g: any) => g.name)
    setGenresString(
      genreNames
        .map((g) => g)
        .reduce((accumulator, genre, index) => {
          if (index < 2) {
            if (accumulator === '') {
              return genre
            } else {
              return accumulator + ', ' + genre
            }
          } else {
            return accumulator
          }
        }, '')
    )
  }, [movie])

  function hashCode(input:string) {
    var hash = 0;
    for (var i = 0; i < input.length; i++) {
      var char = input.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }

  const handleDelete = async () => {
     if(movie.id) {
      deleteMovie(movie)
      setDeleted(true)
    }
     else if (id){
      deleteMovie({...movie, id:id})
      setDeleted(true)
     }
  }

  useEffect(() => {
    setDeleted(false)
  }, [movie])

  useEffect(() => {
    setAdded(movie.owned)
  }, [movie])

  const handleAdd = async () => {
    setId(hashCode(movie.title))
    addMovie(movie)
    setAdded(true)
  }

  return (
    <>
    <div className={cardClassName}>
      <span className={styles.deletedSpan}>DELETED</span>
        <NavLink to={id? `/movies/${id}`:''}>
          <img className={styles.poster} src={movie.poster ?? 'assets/NoImageImage2.png'} alt="" />
        </NavLink>
      <div className={styles.ratingBox}>
        <div className={styles.iconContainer}>
        <RateIcon/>
        </div>
        <div className={rateClassName()}>{movie.rating ?? '--'}</div>
      </div>
      <div className={styles.buttonsContainer}>
        {added ? (
          <>
            <div className={styles.removeBtn} onClick={handleDelete}>
              <CheckMarkIcon/>
              <TrashIcon/>
            </div>
            <NavLink to={id? `/movies/${id}`:''}>
              <div className={styles.editBtn}>
                <EditIcon/>
              </div>
            </NavLink>
          </>
        ) : (
          <>
            <div className={styles.addBtn} onClick={handleAdd}>
              <PlusIcon/>
            </div>
          </>
        )}
      </div>
      <NavLink to={id? `/movies/${id}`:''}>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>{movie.title}</h1>
        <div className={styles.genresContainer}>
          <span className={styles.genre}>{genresString}</span>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{movie.description}</p>
        </div>
      </div>
      </NavLink>

      <div className={styles.shadow}></div>
    </div>
    </>)
}
