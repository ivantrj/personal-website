import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Ivan Trajanovski. I am a full stack mobile developer, working with Flutter and SwiftUI.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
          <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/ivan_trj" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href="https://github.com/ivantrj"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:hello.ivantrj@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              hello.ivantrj@gmail.com
            </SocialLink>
            </ul>
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hi, I&apos;m Ivan. Mobile Developer based in the picturesque city of Salzburg, Austria.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve always had a knack for figuring out how things work. As a kid, I was always taking stuff apart to get a peek inside. That curiosity is what led me to tech and the joy of creating.
            </p>
            <p>
              My favorite thing to build is beautiful, user-friendly websites and apps. There’s a real thrill in combining my design sense with the technical side to create something people enjoy using.
            </p>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mt-8">
            Technologies I Use
          </h2>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="bg-teal-500 text-white px-3 py-1 rounded">Flutter</span>
            <span className="bg-teal-500 text-white px-3 py-1 rounded">Firebase</span>
            <span className="bg-teal-500 text-white px-3 py-1 rounded">React</span>
            <span className="bg-teal-500 text-white px-3 py-1 rounded">Next.js</span>
            <span className="bg-teal-500 text-white px-3 py-1 rounded">TypeScript</span>
            <span className="bg-teal-500 text-white px-3 py-1 rounded">Node.js</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mt-8">
            Work Experience
          </h2>
          <ul className="mt-4 space-y-4">
            <li>
              <strong>E Group</strong> (2019 - 2022)
              <p>Software Developer and Data Scientist.</p>
            </li>
            <li>
              <strong>ruwido</strong> (2022 - Present)
              <p>Flutter, iOS, and Android Developer.</p>
            </li>
            <li>
              <strong>The Odd Institute</strong> (2021)
              <p>iOS Developer.</p>
            </li>
          </ul>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mt-8">
            Education
          </h2>
          <ul className="mt-4 space-y-4">
            <li>
              <strong>University of Pecs</strong> (2016 - 2021)
              <p>Bachelor in Computer Science Engineering.</p>
            </li>
            
          </ul>
        </div>
      </div>
    </Container>
  )
}



