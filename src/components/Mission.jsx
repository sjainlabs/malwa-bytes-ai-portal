const Mission = () => {
  return (
    <section id="mission" className="section-padding bg-gradient-to-br from-deep-navy to-blue-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300">
            Empowering Indian SMBs through AI and Local Talent
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-bright-orange">Solving Local SMB IT Automation</h3>
            <p className="text-lg text-gray-200">
              We understand the unique challenges faced by small and medium businesses in India. Our AI-powered 
              solutions are specifically designed to address these challenges, making enterprise-level automation 
              accessible and affordable for every business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-bright-orange">Training Local Employees</h3>
              <p className="text-lg text-gray-200">
                We invest in training local talent in AI and automation technologies, building a skilled workforce 
                that can support and innovate within the SMB sector. Our training programs ensure sustainable 
                growth and knowledge transfer.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-bright-orange">Generating Employment</h3>
              <p className="text-lg text-gray-200">
                By expanding our operations and training programs, we create meaningful employment opportunities 
                in India's technology sector, contributing to economic growth and community development.
              </p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-bright-orange">Bringing Global Work to Local Markets</h3>
            <p className="text-lg text-gray-200">
              We bridge the gap between global technology standards and local business needs. Our solutions 
              bring world-class AI capabilities to the Indian market, enabling local businesses to compete 
              globally while operating locally.
            </p>
          </div>
          
          <div className="text-center p-8">
            <p className="text-2xl font-semibold text-bright-orange">
              Together, we're building a future where every SMB in India has access to powerful AI tools 
              that drive growth, efficiency, and success.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
