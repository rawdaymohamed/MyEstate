import React from 'react'

const Page = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">About Us</h1>
        
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-lg text-gray-600">
            Welcome to MyEstate, your trusted partner in finding the perfect property. We are a team of experienced real estate professionals, passionate about providing exceptional service to our clients.
            <br />
            Our mission is to make the process of buying, selling, and renting properties seamless and transparent. With our extensive market knowledge and dedication to customer satisfaction, we strive to exceed your expectations.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600">
              Our vision is to revolutionize the real estate industry by leveraging technology to simplify the property search and transaction processes, making them accessible and efficient for everyone.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
            <ul className="space-y-4">
              <li className="text-lg text-gray-600">
                <strong>Integrity:</strong> We believe in honesty, transparency, and doing the right thing every time.
              </li>
              <li className="text-lg text-gray-600">
                <strong>Excellence:</strong> We are committed to providing the highest level of service and quality in everything we do.
              </li>
              <li className="text-lg text-gray-600">
                <strong>Innovation:</strong> We embrace the latest technologies to create better solutions for our clients.
              </li>
            </ul>
          </div>
        </section>

        
      </div>
    </div>
  )
}

export default Page
