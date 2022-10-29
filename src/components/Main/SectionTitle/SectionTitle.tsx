import "./section-title.scss"

type Props = {
  title: string
  width?: string
}

const SectionTitle = ({ title, width }: Props) => {
  return (
    <div className="section-title-container" style={{ width: `${width}%` }}>
      <div className="section-title-content">
        <div className="section-title-right">{title}</div>
        <div className="section-title-left">more</div>
      </div>
    </div>
  )
}

export default SectionTitle
