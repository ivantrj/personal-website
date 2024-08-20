import Link from 'next/link'
import Image from 'next/image'


import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoFlutter from '@/images/logos/flutter.svg'
import logoSwiftUI from '@/images/logos/swiftui.svg'
import logoReactNative from '@/images/logos/react-native.svg'


import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import Projects from './projects/page'
import Contact from './contact/page'

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


function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function ServiceCard({ title, description, link, icon }) {
  return (
    <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div class="p-6">
        <span class="w-12 h-12 mb-4 text-gray-900 text-4xl">{icon}</span>
        <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h5>
        <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {description}
        </p>
      </div>
      <div class="p-6 pt-0">
        <a href="#" class="inline-block">
          <button
            class="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
            type="button">
            {link}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  )
}

function WorkingProcessStep({ number, title, description }) {
  return (
    <div className="flex items-start mt-6">
      <div className="flex-shrink-0">
        <span className="text-2xl font-bold text-teal-500">{number}</span>
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">{title}</h3>
        <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>
    </div>
  )
}


export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hi👋, I&apos;m Ivan, full-stack mobile developer.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Since 2021, I have been developing mobile and web applications, specializing in Flutter and SwiftUI.
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

      {/* Redesigned Services Section */}
    <Container className="mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-center">
          What can I do for you?
        </h2>
        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 justify-items-center">
          <ServiceCard
            title="Mobile App Development"
            description="Custom mobile applications for iOS and Android."
            link="I want a mobile app"
            icon="🚀"
          />
          <ServiceCard
            title="Consulting"
            description="Expert advice on your tech projects and strategies."
            link="I want a consultation"
            icon="💡"
          />
        </div>
      </Container>

      {/* My Working Process Section */}
      <Container className="mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-center">
          My Working Process
        </h2>
        <div className="mt-8">
          <WorkingProcessStep
            number="1"
            title="You book a call with me"
            description="You will contact me and we will pick a date and time that fits both of us. I will also send you a form with some basic questions."
          />
          <WorkingProcessStep
            number="2"
            title="We have a call"
            description="On the call (or meeting in person) you will present your vision, what would you like to achieve. I will provide feedback taking into account what is technically possible and what is not."
          />
          <WorkingProcessStep
            number="3"
            title="I prepare specification, time & price estimates"
            description="Based on the information you provided me so far I will create a specification with time & price estimates."
          />
          <WorkingProcessStep
            number="4"
            title="I start working on your application"
            description="As soon as the contract is signed I will start working on the application. During that time we will keep each other up to date with regular meetings."
          />
          <WorkingProcessStep
            number="5"
            title="We deploy your application"
            description="When the application is finished and you are satisfied with the result we will deploy the application."
          />
        </div>
      </Container>

       <SimpleLayout
      title="My Recent Work"
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>

      {/* <Container id="contact"> */}
    <Contact />
      {/* </Container> */}
    </>
  )
}

const projects = [
  {
    name: 'Guess the Number',
    description: 'A React Native cross-platform game to guess the number.',
    link: {
      href: 'https://github.com/ivantrj/rn_guess_the_number',
      label: 'GitHub',
    },
    logo: logoReactNative,
  },
  {
    name: 'Chat App',
    description: 'A Flutter cross-platform chat app using Firebase.',
    link: {
      href: 'https://github.com/ivantrj/flutter_chat_app',
      label: 'GitHub',
    },
    logo: logoFlutter,
  },
  {
    name: 'To Do List App',
    description: 'A SwiftUI iOS to do app using Firebase.',
    link: {
      href: 'https://github.com/ivantrj/ToDoList_SwiftUI',
      label: 'GitHub',
    },
    logo: logoSwiftUI,
  },
]