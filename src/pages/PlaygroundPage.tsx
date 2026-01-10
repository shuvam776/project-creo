import Hero from '@/components/hero/Hero'
import Footer from '@/components/footer/Footer'
import PlaygroundContent from '@/components/ui/playground'

export default function Playground() {
  return (
    <main className='w-full overflow-x-hidden'>
      <PlaygroundContent />
      <Hero />
      <Footer />
    </main>
  )
}
