const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹0',
      period: 'Forever Free',
      features: [
        'Basic billing & invoicing',
        'Up to 100 transactions/month',
        'Email support',
        'Mobile app access',
        'Basic reports',
      ],
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '₹499',
      period: 'per month',
      features: [
        'Everything in Starter',
        'Unlimited transactions',
        'Inventory automation',
        'CRM & loyalty programs',
        'AI-powered insights',
        'Priority support',
        'Advanced analytics',
        'GST compliance tools',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact Us',
      features: [
        'Everything in Pro',
        'Custom integrations',
        'Dedicated account manager',
        'On-site training',
        'API access',
        '24/7 phone support',
        'Custom features',
        'Multi-location support',
      ],
      highlighted: false,
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-lg p-8 ${
                plan.highlighted 
                  ? 'bg-gradient-to-br from-deep-navy to-blue-900 text-white shadow-2xl transform scale-105' 
                  : 'bg-soft-gray shadow-lg hover:shadow-xl transition-shadow duration-300'
              }`}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="bg-bright-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-deep-navy'}`}>
                {plan.name}
              </h3>
              
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-bright-orange' : 'text-deep-navy'}`}>
                  {plan.price}
                </span>
                <span className={`text-lg ml-2 ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.period}
                </span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className={`mr-2 ${plan.highlighted ? 'text-bright-orange' : 'text-bright-orange'}`}>✓</span>
                    <span className={plan.highlighted ? 'text-gray-200' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={scrollToContact}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                  plan.highlighted
                    ? 'bg-bright-orange text-white hover:bg-orange-600'
                    : 'bg-deep-navy text-white hover:bg-blue-900'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
