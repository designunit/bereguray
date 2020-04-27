import s from './styles.module.css'

interface ProjectSlideProps {
    picturePath: string
}

export const ProjectSlide: React.SFC<ProjectSlideProps> = props => (
    <section className={s.section}>
        <img
            className={s.picture} 
            src={props.picturePath} 
        />
    </section>
)