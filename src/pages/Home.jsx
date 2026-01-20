import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Mission from '../components/Mission'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'

const FounderStory = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born in Ratlam, Built for Bharat
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-deep-navy to-blue-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-bright-orange">
                From Malwa to the World
              </h3>
              <p className="text-lg leading-relaxed">
                Malwa Bytes was founded in Ratlam, in the heart of India's Malwa region. 
                We recognized that small and medium businesses across India were struggling 
                with outdated processes and lacked access to modern AI-powered tools that 
                could transform their operations.
              </p>
            </div>
            
            <div className="bg-soft-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-deep-navy">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe every business in India deserves access to world-class AI 
                technology. Our mission is to democratize business automation, making 
                it accessible and affordable for every entrepreneur from metros to 
                tier-3 cities.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-bright-orange to-orange-600 text-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Empowering Local Businesses
              </h3>
              <p className="text-lg leading-relaxed">
                Starting from our roots in Ratlam, we understand the unique challenges 
                faced by Indian SMBs. From GST compliance to inventory management, from 
                customer relationships to financial planning – we've built solutions 
                that speak your language and understand your needs.
              </p>
            </div>
            
            <div className="bg-deep-navy text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-bright-orange">
                Growing Together
              </h3>
              <p className="text-lg leading-relaxed">
                We're not just building software – we're building a community. By training 
                local talent in AI and automation, we're creating employment opportunities 
                and empowering the next generation of tech innovators in India.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-deep-navy to-blue-900 rounded-lg">
          <p className="text-2xl md:text-3xl font-bold text-white mb-4">
            Built in Ratlam. Built for Bharat.
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us in revolutionizing how Indian businesses operate. Together, we're 
            creating a future where every SMB has the power of AI at their fingertips.
          </p>
        </div>
      </div>
    </section>
  )
}

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <FounderStory />
      <HowItWorks />
      <Mission />
      <Testimonials />
      <Pricing />
    </div>
  )
}

export default Home
