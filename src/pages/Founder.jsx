import { GraduationCap, Briefcase, Rocket, Quote } from 'lucide-react'

const TimelineItem = ({ year, title, description, icon: Icon }) => {
  return (
    <div className="flex gap-4 mb-8">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-bright-orange flex items-center justify-center text-white flex-shrink-0">
          <Icon className="w-6 h-6" />
        </div>
        <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
      </div>
      <div className="pb-8">
        <div className="text-sm font-semibold text-bright-orange mb-1">{year}</div>
        <h3 className="text-xl font-bold text-deep-navy mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

const Founder = () => {
  const timeline = [
    {
      year: '2000s',
      title: 'Education at UT Austin',
      description: 'Graduated from The University of Texas at Austin, building a strong foundation in technology and innovation.',
      icon: GraduationCap
    },
    {
      year: '2005-2020',
      title: 'Enterprise Architecture & Product Leadership',
      description: 'Over 15 years leading complex initiatives across industries, specializing in IT development, digital transformation, and scalable software systems for major tech companies.',
      icon: Briefcase
    },
    {
      year: '2022',
      title: 'Launch of Malwa Bytes',
      description: 'Founded Malwa Bytes with a vision to digitize small businesses across India, bringing AI-powered tools to the real economy.',
      icon: Rocket
    }
  ]

  return (
    <div className="min-h-screen bg-soft-gray">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-navy to-blue-900 text-white section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sapan Jain
              </h1>
              <p className="text-2xl md:text-3xl text-bright-orange font-semibold mb-6">
                Founder & CEO, Malwa Bytes
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                A seasoned enterprise architect and product leader with over 15 years of experience, 
                bringing world-class technology solutions to India's heartland.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-bright-orange to-orange-600 flex items-center justify-center shadow-2xl" role="img" aria-label="Sapan Jain - Founder profile">
                <div className="text-8xl md:text-9xl font-bold text-white">SJ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
              The Journey
            </h2>
            <p className="text-xl text-gray-600">
              From Ratlam to the world of enterprise technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-deep-navy to-blue-900 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-bright-orange">Roots in Ratlam</h3>
              <p className="leading-relaxed">
                Growing up in Ratlam, India, Sapan witnessed firsthand how small businesses struggled 
                with manual operations and lack of digital tools. This experience planted the seeds 
                for what would become Malwa Bytes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-bright-orange to-orange-600 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Enterprise Excellence</h3>
              <p className="leading-relaxed">
                With a background in enterprise architecture and product leadership, Sapan has led 
                digital transformation initiatives for major tech companies, blending technical depth 
                with business empathy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Vision for Bharat</h3>
              <p className="leading-relaxed">
                His vision: to digitize small businesses across India, making AI-powered tools 
                accessible and affordable for the real economy. Building solutions for those who 
                need them most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-soft-gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
              Career Milestones
            </h2>
            <p className="text-xl text-gray-600">
              A journey of innovation and leadership
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            {timeline.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-gradient-to-br from-deep-navy to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 text-bright-orange mb-6 mx-auto" />
          <blockquote className="text-3xl md:text-4xl font-bold mb-6 leading-relaxed">
            "Built in Ratlam. Built for Bharat."
          </blockquote>
          <p className="text-xl text-gray-300">
            A commitment to bringing world-class technology to every corner of India
          </p>
        </div>
      </section>

      {/* Second Founder Section - Sohil */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-1 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center shadow-2xl" role="img" aria-label="Sohil - Co-Founder profile">
                <div className="text-8xl md:text-9xl font-bold text-white">S</div>
              </div>
            </div>
            <div className="order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
                Sohil
              </h2>
              <p className="text-2xl md:text-3xl text-bright-orange font-semibold mb-6">
                Co-Founder & CTO, Malwa Bytes
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Sohil brings deep expertise in data engineering, AI pipelines, and scalable backend systems. 
                With a background in full-stack development and a passion for automation, he leads the technical 
                vision at Malwa Bytes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                His focus is on building robust, modular platforms that can scale across industries — from 
                healthcare to finance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-soft-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
            Join Us on This Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Together, Sapan and Sohil lead Malwa Bytes with a shared vision: building AI-powered 
            tools that empower India's real economy—one business at a time.
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

export default Founder
