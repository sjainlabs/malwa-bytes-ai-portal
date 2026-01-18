const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-deep-navy text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-3xl font-bold text-bright-orange">Malwa Bytes</span>
          </div>
          <p className="text-gray-300 mb-4">
            AI-Driven Software for Smarter Business
          </p>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-gray-400">
              © {currentYear} Malwa Bytes. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
