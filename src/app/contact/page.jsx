import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with me.',
}

export default function Contact() {
  return (
    <Container className="mt-16 sm:mt-32">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Contact Me
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        I’d love to hear from you! Please fill out the form below to get in touch.
      </p>
      <form className="mt-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-2 border rounded"
          rows="4"
        ></textarea>
        <Button type="submit">Send Message</Button>
      </form>
    </Container>
  )
}