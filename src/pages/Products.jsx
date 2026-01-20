import { Shield, Heart, Pill, DollarSign, TrendingUp, ArrowRight } from 'lucide-react'

const ProductCard = ({ icon: Icon, title, description, features, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className={`${color} p-6 text-white`}>
        <Icon className="w-12 h-12 mb-4" />
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-700 text-lg mb-4">{description}</p>
        <div className="space-y-3">
          <h4 className="font-semibold text-deep-navy">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <ArrowRight className="w-5 h-5 text-bright-orange mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <button className="mt-6 w-full bg-deep-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-300 group-hover:bg-bright-orange">
          Learn More
        </button>
      </div>
    </div>
  )
}

const Products = () => {
  const products = [
    {
      icon: Shield,
      title: 'Warehouse AI Security System',
      description: 'Advanced AI-powered security and monitoring solution for warehouses and storage facilities.',
      color: 'bg-gradient-to-br from-blue-600 to-blue-800',
      features: [
        'Real-time video surveillance with AI threat detection',
        'Automated intrusion alerts and notifications',
        'Intelligent access control and visitor management',
        'Inventory monitoring with computer vision',
        'Analytics dashboard for security insights',
        '24/7 cloud-based monitoring and storage'
      ]
    },
    {
      icon: Heart,
      title: 'Hospital & Clinic Management',
      description: 'Comprehensive healthcare management solution for hospitals, clinics, and medical practices.',
      color: 'bg-gradient-to-br from-red-500 to-red-700',
      features: [
        'Patient registration and electronic health records',
        'Appointment scheduling and management',
        'Prescription and medication tracking',
        'Billing and insurance claim processing',
        'Lab and diagnostic test management',
        'Doctor and staff scheduling system'
      ]
    },
    {
      icon: Pill,
      title: 'Pharmacy Inventory & Compliance',
      description: 'Complete pharmacy management system with inventory tracking and regulatory compliance.',
      color: 'bg-gradient-to-br from-green-600 to-green-800',
      features: [
        'Automated inventory tracking and reordering',
        'Drug interaction and allergy checking',
        'Regulatory compliance management',
        'Expiry date monitoring and alerts',
        'Prescription management and filling',
        'Sales analytics and reporting'
      ]
    },
    {
      icon: DollarSign,
      title: 'Finance Management Tools',
      description: 'Intelligent financial management and accounting platform for growing businesses.',
      color: 'bg-gradient-to-br from-orange-600 to-orange-800',
      features: [
        'Automated bookkeeping and accounting',
        'GST compliance and tax filing support',
        'Invoice and payment tracking',
        'Expense management and categorization',
        'Financial reporting and analytics',
        'Bank reconciliation and cash flow management'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Investment & SIP Tracking Platform',
      description: 'Smart investment portfolio management and SIP tracking for individuals and advisors.',
      color: 'bg-gradient-to-br from-purple-600 to-purple-800',
      features: [
        'Portfolio tracking across multiple assets',
        'SIP automation and monitoring',
        'Investment performance analytics',
        'Goal-based investment planning',
        'Tax optimization recommendations',
        'Market insights and alerts'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-soft-gray">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-navy to-blue-900 text-white section-padding">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            What We Build
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            AI-powered solutions designed specifically for Indian businesses. 
            From security to healthcare, from finance to investments – we've got you covered.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-bright-orange to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8">
            Join hundreds of Indian businesses already using our AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-bright-orange px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-lg">
              Schedule a Demo
            </button>
            <button className="bg-deep-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-300 text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
