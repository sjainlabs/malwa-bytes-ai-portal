import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react'

const BlogCard = ({ title, excerpt, date, author, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="bg-bright-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
            {category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-deep-navy mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500 text-sm">
            <User className="w-4 h-4 mr-1" />
            {author}
          </div>
          <button className="text-bright-orange font-semibold flex items-center hover:text-orange-700 transition-colors">
            Read More
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  )
}

const Blog = () => {
  const blogPosts = [
    {
      title: 'How AI is Transforming Indian SMBs',
      excerpt: 'Discover how artificial intelligence is revolutionizing small and medium businesses across India, from inventory management to customer service.',
      date: 'Jan 15, 2026',
      author: 'Malwa Bytes Team',
      category: 'AI & Innovation'
    },
    {
      title: 'GST Compliance Made Easy with Automation',
      excerpt: 'Learn how automated systems can simplify GST compliance for your business, reducing errors and saving time.',
      date: 'Jan 10, 2026',
      author: 'Finance Team',
      category: 'Finance'
    },
    {
      title: 'Building Technology in Tier-2 Cities',
      excerpt: 'Our journey of building world-class AI solutions from Ratlam and what it means for India\'s tech ecosystem.',
      date: 'Jan 5, 2026',
      author: 'Founder',
      category: 'Company News'
    },
    {
      title: 'Security Best Practices for Warehouses',
      excerpt: 'Essential security measures every warehouse should implement, combining traditional methods with AI-powered solutions.',
      date: 'Dec 28, 2025',
      author: 'Security Team',
      category: 'Security'
    },
    {
      title: 'Healthcare Management in the Digital Age',
      excerpt: 'How digital solutions are improving patient care and operational efficiency in hospitals and clinics.',
      date: 'Dec 20, 2025',
      author: 'Healthcare Team',
      category: 'Healthcare'
    },
    {
      title: 'Investment Tracking for the Modern Indian',
      excerpt: 'A comprehensive guide to tracking your investments and SIPs effectively in today\'s digital landscape.',
      date: 'Dec 15, 2025',
      author: 'Investment Team',
      category: 'Investment'
    }
  ]

  return (
    <div className="min-h-screen bg-soft-gray">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-navy to-blue-900 text-white section-padding">
        <div className="max-w-6xl mx-auto text-center">
          <BookOpen className="w-20 h-20 mx-auto mb-6 text-bright-orange" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Insights, stories, and updates from the team at Malwa Bytes
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest insights on AI, business automation, 
            and success stories from Indian SMBs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg border-2 border-gray-300 focus:border-bright-orange focus:outline-none text-lg"
            />
            <button className="bg-bright-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300 text-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="section-padding bg-gradient-to-r from-deep-navy to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            More Content Coming Soon!
          </h3>
          <p className="text-xl text-gray-300">
            We're constantly creating new content to help you make the most of AI and automation 
            for your business. Check back regularly for new articles and insights.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Blog
