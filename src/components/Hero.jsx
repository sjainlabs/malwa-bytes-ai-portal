const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-gradient-to-br from-deep-navy to-blue-900 text-white section-padding min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          AI-Driven Software for <span className="text-bright-orange">Smarter Business</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
          Empowering Indian SMBs with intelligent automation tools for billing, inventory, CRM, and business insights
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('features')}
            className="btn-primary text-lg"
          >
            Explore Features
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-deep-navy px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
