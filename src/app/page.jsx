import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <>
      <iframe src="https://ivantrj.substack.com/embed" width="480" height="320" style={{border:"1px solid #EEE", background:"white"}} frameborder="0" scrolling="no"></iframe>
      </>
  )
}

function ServiceCard({ title, description }) {
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Description>{description}</Card.Description>
    </Card>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I&apos;m Ivan, a software engineer.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m a freelance developer specializing in Flutter, web development, and SwiftUI. If you need a beautiful and functional app for iOS, Android, or the web, let&apos;s collaborate and bring your vision to life!
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/ivan_trj"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://github.com/ivantrj"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/ivantrj"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>

      {/* Services Section */}
      <Container className="mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          My Services
        </h2>
        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Web Development"
            description="Custom websites built with modern technologies."
          />
          <ServiceCard
            title="Mobile App Development"
            description="Cross-platform apps for iOS and Android using Flutter."
          />
          <ServiceCard
            title="Consultation"
            description="Expert advice on your tech projects and strategies."
          />
        </div>
      </Container>

      <Container className="mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          About Me
        </h2>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I&apos;ve always had a knack for figuring out how things work. As a kid, I was always taking stuff apart to get a peek inside. That curiosity is what led me to tech and the joy of creating. My favorite thing to build is beautiful, user-friendly websites and apps. There&apos;s a real thrill in combining my design sense with the technical side to create something people enjoy using.
        </p>
      </Container>

      <Container className="mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Projects I&apos;ve Worked On
        </h2>
        <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {/* Add your project cards here */}
          {/* Example: <ProjectCard project={projectData} /> */}
        </ul>
      </Container>

      <Container className="mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Contact Me
        </h2>
        <form className="mt-6 space-y-4">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border rounded" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 border rounded" />
          <textarea name="message" placeholder="Your Message" required className="w-full p-2 border rounded" rows="4"></textarea>
          <Button type="submit">Send Message</Button>
        </form>
      </Container>
    </>
  )
}