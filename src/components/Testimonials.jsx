const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      business: 'Kumar Electronics, Delhi',
      text: 'Malwa Bytes transformed our billing and inventory management. We saved 15 hours per week and reduced errors by 90%. The AI insights helped us optimize our stock levels perfectly.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      business: 'Sharma Fashion House, Mumbai',
      text: 'The CRM and loyalty features are game-changers! Our customer retention improved by 40%, and the automated billing system made GST compliance effortless. Highly recommended for any SMB.',
      rating: 5,
    },
  ]

  return (
    <section className="section-padding bg-soft-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from businesses transforming with AI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-bright-orange text-2xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-deep-navy text-lg">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
