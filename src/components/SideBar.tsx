import { Button } from './Button'
import { GenreResponseProps } from '../App'

type SideBarTypes = {
  genres: GenreResponseProps[]
  handleClickButton: (id: number) => void
  selectedGenreId: number
}

export function SideBar({
  genres,
  handleClickButton,
  selectedGenreId
}: SideBarTypes) {

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
