const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Sign Up & Setup',
      description: 'Create your account in minutes and customize your business profile with our intuitive onboarding process.',
    },
    {
      number: '2',
      title: 'Integrate Your Data',
      description: 'Connect your existing systems or import data seamlessly. Our AI learns your business patterns automatically.',
    },
    {
      number: '3',
      title: 'Automate Operations',
      description: 'Let AI handle billing, inventory, customer relations, and insights while you focus on growth.',
    },
    {
      number: '4',
      title: 'Scale & Grow',
      description: 'Watch your business thrive with data-driven decisions, improved efficiency, and enhanced customer satisfaction.',
    },
  ]

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in four simple steps and transform your business operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bright-orange text-white text-2xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-deep-navy mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
