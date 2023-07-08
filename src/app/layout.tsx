import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';
export const metadata = {
  title: 'Flexibble',
  description: 'Showcase and discover remarable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <section>
          {children}
        </section>
        <Footer />
      </body>
    </html>
  )
}
