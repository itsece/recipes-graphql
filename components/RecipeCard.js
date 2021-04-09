import Link from 'next/link';

import { HiHeart as UnFilledHeartIcon } from "react-icons/hi";
import { HiOutlineHeart as FilledHeartIcon } from "react-icons/hi";

export default function RecipeCard({ id, title, serves, favourited, onAdd, onRemove }) {
  return (
    <div className="recipe-card">
      <div className="recipe-card__header">
        <Link href={`/recipes/${id}`}><h2 className="recipe-card__title">{title}</h2></Link>
        {!favourited ? (
            <button className="recipe-card__button" onClick={onAdd}><FilledHeartIcon size="25px" color="#DDD"/></button>
          ) : (
            <button className="recipe-card__button" onClick={onRemove}><UnFilledHeartIcon size="25px" color="#ff4757"/></button>
          )
        }
      </div>
      <span className="recipe-card__serves">Serves {serves}</span>
    </div>
  )
}