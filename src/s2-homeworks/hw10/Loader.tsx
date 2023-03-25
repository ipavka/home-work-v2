import s from './Loader.module.css'

export const Loader = () => {
  return (
    <div className={s.loader}>
      <div className={s.container}>
        <div className={s.speedingWheel}></div>
      </div>
    </div>
  )
}

