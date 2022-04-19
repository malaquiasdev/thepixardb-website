import Image from 'next/image'
import {
  HomeIcon,
  SearchIcon,
  CodeIcon,
  StarIcon,
  ExternalLinkIcon,
} from '@heroicons/react/solid'

export default function Header() {
  return (
    <div className="sticky top-0 z-[1000] flex h-[72px] items-center bg-black px-10 md:px-12">
      <span className="text-xl font-medium text-white">ThePixarDB</span>
      <div className="ml-10 hidden items-center space-x-6 md:flex">
        <a className="header-link group">
          <HomeIcon className="h-4" />
          <span className="span">Home</span>
        </a>
        <a className="header-link group">
          <CodeIcon className="h-4" />
          <span className="span">API Doc</span>
        </a>
        <a className="header-link group">
          <img src="/images/movie-icon.svg" alt="" className="h-5" />
          <span className="span">Live Demo</span>
        </a>
        <a className="header-link group">
          <SearchIcon className="h-4" />
          <span className="span">Search</span>
        </a>
        <a className="header-link group">
          <StarIcon className="h-4" />
          <span className="span">About</span>
        </a>
        <a className="header-link group">
          <ExternalLinkIcon className="h-4" />
          <a
            href="https://github.com/search?q=malaquiasdev%2Fthepixardb"
            target="_blank"
          >
            <span className="span">Github</span>
          </a>
        </a>
      </div>
    </div>
  )
}