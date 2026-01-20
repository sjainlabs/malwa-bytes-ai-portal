import { Target, Users, Award, Heart, Sparkles, Globe } from 'lucide-react'

const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Icon className="w-12 h-12 text-bright-orange mb-4" />
      <h3 className="text-xl font-bold text-deep-navy mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We constantly push boundaries to bring cutting-edge AI solutions to Indian businesses.'
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Our solutions are built with deep understanding of Indian SMB needs and challenges.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we build, from code to customer service.'
    },
    {
      icon: Heart,
      title: 'Empowerment',
      description: 'We believe in empowering businesses and individuals through technology and training.'
    },
    {
      icon: Sparkles,
      title: 'Accessibility',
      description: 'Making world-class AI technology accessible and affordable for every business in India.'
    },
    {
      icon: Globe,
      title: 'Local Roots, Global Vision',
      description: 'Built in Ratlam with Indian values, designed to compete globally.'
    }
  ]

  return (
    <div className="min-h-screen bg-soft-gray">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-navy to-blue-900 text-white section-padding">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Malwa Bytes
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A technology startup from Ratlam, India, on a mission to democratize AI for Indian businesses.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600">
              Empowering Indian SMBs through AI and Local Talent
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-deep-navy to-blue-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-bright-orange">Solving Local SMB IT Automation</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                We understand the unique challenges faced by small and medium businesses in India. 
                Our AI-powered solutions are specifically designed to address these challenges, making 
                enterprise-level automation accessible and affordable for every business.
              </p>
            </div>

            <div className="bg-gradient-to-r from-bright-orange to-orange-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Training Local Employees</h3>
              <p className="text-lg leading-relaxed">
                We invest in training local talent in AI and automation technologies, building a skilled 
                workforce that can support and innovate within the SMB sector. Our training programs 
                ensure sustainable growth and knowledge transfer.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Generating Employment</h3>
              <p className="text-lg leading-relaxed">
                By expanding our operations and training programs, we create meaningful employment 
                opportunities in India's technology sector, contributing to economic growth and 
                community development.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Bringing Global Work to Local Markets</h3>
              <p className="text-lg leading-relaxed">
                We bridge the gap between global technology standards and local business needs. 
                Our solutions bring world-class AI capabilities to the Indian market, enabling 
                local businesses to compete globally while operating locally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-soft-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-600">
              From Malwa to the World
            </p>
          </div>

          <div className="prose max-w-none">
            <div className="bg-gradient-to-r from-deep-navy to-blue-900 text-white p-8 rounded-lg mb-8">
              <p className="text-lg leading-relaxed mb-4">
                Malwa Bytes was born from a simple observation: while technology was transforming 
                businesses in metros and tier-1 cities, countless SMBs in smaller cities across 
                India were still struggling with manual processes and outdated systems.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Founded in Ratlam, in the heart of India's Malwa region, we set out with a mission 
                to change this. We wanted to prove that world-class AI solutions could be built 
                right here, in the heart of India, for Indian businesses.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we're proud to serve businesses across India, from warehouses to hospitals, 
                from pharmacies to investment firms. Each solution we build carries the spirit of 
                innovation from Ratlam and the commitment to serve Bharat.
              </p>
            </div>

            <div className="bg-gradient-to-r from-bright-orange to-orange-600 text-white p-8 rounded-lg text-center">
              <p className="text-3xl font-bold mb-4">
                Built in Ratlam. Built for Bharat.
              </p>
              <p className="text-xl">
                Join us in revolutionizing how Indian businesses operate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
