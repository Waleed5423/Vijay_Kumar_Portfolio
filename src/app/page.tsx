// app/page.tsx (Server Component - remains unchanged)
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'

const Page = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default Page