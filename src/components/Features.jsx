const Features = () => {
  const features = [
    {
      title: 'Smart Billing',
      description: 'Automated invoicing with GST compliance, payment tracking, and instant digital receipts for seamless financial management.',
      icon: '💳',
    },
    {
      title: 'Inventory Automation',
      description: 'Real-time stock tracking, automated reorder alerts, and AI-powered demand forecasting to optimize your inventory.',
      icon: '📦',
    },
    {
      title: 'CRM & Loyalty',
      description: 'Build lasting customer relationships with intelligent CRM tools, loyalty programs, and personalized engagement strategies.',
      icon: '🤝',
    },
    {
      title: 'AI Insights',
      description: 'Data-driven business intelligence with predictive analytics, trend analysis, and actionable recommendations for growth.',
      icon: '📊',
    },
  ]

  return (
    <section id="features" className="section-padding bg-soft-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            Powerful Features for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to automate and grow your business with AI-powered tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition-transform"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-deep-navy mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
