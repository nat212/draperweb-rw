export interface IconProps {
  name: string
}

const Icon = ({ name }: IconProps) => {
  return (
    <i
      className={`gg-${name}`}
      aria-label={`${name} icon`}
      role="presentation"
    />
  )
}

export default Icon
