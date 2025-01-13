import Header from '@/app/components/Header'
import Services from '@/app/components/Services'
import Welcome from '@/app/components/Welcome'

function Gallery() {
  return null
}

function Contact() {
  return null
}

export default function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Services />
      <Gallery />
      <Contact />
    </div>
  )
}
