import { MetaTags } from '@redwoodjs/web'
import Shortcut, { ShortcutProps } from 'src/components/Shortcut/Shortcut'

export const ECOSYSTEM_SHORTCUTS: ShortcutProps[] = [
  {
    title: 'Draper Mail',
    href: 'https://mail.draper.net.za',
    icon: '/logos/roundcube.svg',
    alt: 'Roundcube logo',
  },
  {
    title: 'Draper Cloud',
    href: 'https://cloud.draper.net.za',
    icon: '/logos/nextcloud.svg',
    alt: 'Nextcloud logo',
  },
  {
    title: 'Draper Admin',
    href: 'https://admin.draper.net.za',
    icon: '/icons/logo.svg',
    alt: 'DraperWeb logo',
  },
]
export const MEDIA_SHORTCUTS: ShortcutProps[] = [
  {
    title: 'Sonarr (Series)',
    href: 'http://drapernas.local:8989',
    icon: '/logos/sonarr.svg',
    alt: 'Sonarr logo',
  },
  {
    title: 'Radarr (Movies)',
    href: 'http://drapernas.local:7878',
    icon: '/logos/radarr.svg',
    alt: 'Radarr logo',
  },
  {
    title: 'Lidarr (Music)',
    href: 'http://drapernas.local:8686',
    icon: '/logos/lidarr.png',
    alt: 'Lidarr logo',
  },
]

const DashboardPage = () => {
  const shortcutsAndTitles: [string, ShortcutProps[]][] = [
    ['Draper Ecosystem', ECOSYSTEM_SHORTCUTS],
    ['Media System', MEDIA_SHORTCUTS],
  ]
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />
      <h1 className="text-3xl">Dashboard</h1>
      <h2 className="my-3 text-xl">Shortcuts</h2>
      <div className="flex flex-row justify-between">
        {shortcutsAndTitles.map(([title, shortcuts]) => (
          <div className="flex flex-col" key={title}>
            <h3 className="mb-3 text-lg text-zinc-500">{title}</h3>
            <div className="flex flex-row gap-x-4">
              {shortcuts.map((shortcut) => (
                <Shortcut {...shortcut} key={shortcut.href} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default DashboardPage
