export interface ShortcutProps {
  href: string
  icon: string
  alt: string
  title: string
}

const Shortcut = ({ href, icon, alt, title }: ShortcutProps) => {
  return (
    <a
      className="glass flex h-32 w-32 flex-col items-center justify-center gap-y-4 rounded-lg shadow-lg transition-all duration-200 hover:shadow-2xl"
      key={href}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex h-10 w-10 flex-col justify-center">
        <img src={icon} alt={alt} />
      </div>
      <span className="text-sm">{title}</span>
    </a>
  )
}

export default Shortcut
