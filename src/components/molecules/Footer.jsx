import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full px-4 md:px-12 lg:px-24 py-10 bg-white text-black">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left: Logo and Name */}
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center space-x-[-6px]">
            <div className="w-6 h-6 bg-black rounded-full"></div>
            <div className="w-3 h-6 bg-black rounded-r-full"></div>
          </div>
          <span className="text-lg sm:text-xl md:text-2xl font-medium">AMRR TechSols Pvt Ltd</span>
        </div>

        {/* Center: Navigation */}
        <div className="flex flex-col space-y-2 text-sm sm:text-base">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>

        {/* Right: Address */}
        <div className="text-sm sm:text-base space-y-3">
          <div>
            <span className="font-medium">Registered Address:</span><br />
            M.I.G-B-32, Brit Colony, Nayapalli, Bhubaneswar, Odisha - 751012
          </div>
          <div>
            <span className="font-medium">Corporate Address:</span><br />
            Bhive, JBR Tech Park, ITPL Main Road, Bangalore, Karnataka
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center text-xs sm:text-sm text-gray-600">
        © 2024 by AMRR TechSols Pvt Ltd.
      </div>
    </footer>
  )
}

export default Footer
