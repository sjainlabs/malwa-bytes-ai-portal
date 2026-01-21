import { Newspaper, TrendingUp, Shield, Hospital, Pill, DollarSign, LineChart, ExternalLink, Calendar } from 'lucide-react'

const ProductCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <Icon className="w-12 h-12 text-bright-orange mb-4" />
      <h3 className="text-xl font-bold text-deep-navy mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

const TimelineCard = ({ year, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-bright-orange hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-3">
        <Calendar className="w-6 h-6 text-bright-orange" />
        <div className="text-lg font-bold text-bright-orange">{year}</div>
      </div>
      <h3 className="text-xl font-bold text-deep-navy mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

const StatCard = ({ number, label }) => {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-bright-orange mb-2">{number}</div>
      <div className="text-lg text-gray-700">{label}</div>
    </div>
  )
}

const Journey = () => {
  const evolutionTimeline = [
    {
      year: '2020',
      title: 'Launch of Malwa Updates',
      description: 'Started our journey with a hyperlocal news platform in Ratlam, connecting communities digitally and understanding local business needs.'
    },
    {
      year: '2022',
      title: 'Formation of Malwa Bytes',
      description: 'Pivoted from news to technology, leveraging insights from local businesses to build AI-powered solutions for SMBs across India.'
    },
    {
      year: '2023-2025',
      title: 'Expansion into AI Tools',
      description: 'Rapid expansion into AI-driven enterprise solutions including warehouse security, healthcare management, pharmacy systems, and financial tools.'
    }
  ]

  const products = [
    {
      icon: Shield,
      title: 'Warehouse AI Security',
      description: 'Intelligent surveillance and security systems powered by AI to protect your inventory and facilities 24/7.'
    },
    {
      icon: Hospital,
      title: 'Hospital & Clinic Management',
      description: 'Comprehensive healthcare management solutions streamlining patient care, appointments, and medical records.'
    },
    {
      icon: Pill,
      title: 'Pharmacy Systems',
      description: 'Modern inventory and billing solutions designed specifically for pharmacies and medical stores.'
    },
    {
      icon: DollarSign,
      title: 'Finance Tools',
      description: 'Smart financial management and accounting tools tailored for small and medium businesses.'
    },
    {
      icon: LineChart,
      title: 'Investment Platforms',
      description: 'AI-powered investment tracking and portfolio management tools for modern investors.'
    },
    {
      icon: TrendingUp,
      title: 'Business Analytics',
      description: 'Data-driven insights and analytics to help businesses make informed decisions and grow.'
    }
  ]

  return (
    <div className="min-h-screen bg-soft-gray">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-navy to-blue-900 text-white section-padding">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Journey
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            From a local news platform to an AI powerhouse serving businesses across India
          </p>
        </div>
      </section>

      {/* First Product Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Newspaper className="w-10 h-10 text-bright-orange" />
                <h2 className="text-3xl md:text-4xl font-bold text-deep-navy">
                  Our First Product
                </h2>
              </div>
              <h3 className="text-2xl font-bold text-bright-orange mb-4">
                Malwa Updates Online
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our journey began with a hyperlocal news platform launched in Ratlam. 
                Malwa Updates Online was created to connect communities digitally, bringing 
                local news, stories, and information to the fingertips of people in the Malwa region.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                This platform taught us invaluable lessons about serving local communities 
                and understanding the unique challenges faced by small businesses in India.
              </p>
              <a 
                href="https://www.malwaupdatesonline.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary"
                aria-label="Visit Malwa Updates Online (opens in new tab)"
              >
                Visit Malwa Updates Online
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-deep-navy to-blue-900 p-8 rounded-lg shadow-xl">
              <h4 className="text-2xl font-bold text-white mb-6 text-center">Key Achievements</h4>
              <div className="grid grid-cols-2 gap-6">
                <StatCard number="100K+" label="Monthly Readers" />
                <StatCard number="5+" label="Districts Covered" />
                <StatCard number="1000+" label="Stories Published" />
                <StatCard number="50+" label="Local Contributors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Timeline */}
      <section className="section-padding bg-soft-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
              From News to Nation
            </h2>
            <p className="text-xl text-gray-600">
              Our evolution from local journalism to AI-powered business solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {evolutionTimeline.map((item, index) => (
              <TimelineCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Current Products Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
              What We Build Today
            </h2>
            <p className="text-xl text-gray-600">
              AI-powered solutions transforming how Indian businesses operate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-gradient-to-br from-deep-navy to-blue-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Road Ahead
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              What started as a local news platform has evolved into a mission to digitize 
              small businesses across India. We've learned that the best solutions come from 
              understanding real problems on the ground.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Today, we're building AI-powered tools that make enterprise-level technology 
              accessible and affordable for every business in India—from warehouses to hospitals, 
              from pharmacies to investment firms.
            </p>
            <div className="bg-bright-orange p-8 rounded-lg">
              <p className="text-2xl md:text-3xl font-bold mb-4">
                Built in Ratlam. Built for Bharat.
              </p>
              <p className="text-lg">
                Join us as we continue to innovate and serve India's real economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
            Be Part of Our Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you're a business looking for solutions or someone who shares our vision, 
            we'd love to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#/products" className="btn-primary">
              Explore Our Products
            </a>
            <a href="#/contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Journey
