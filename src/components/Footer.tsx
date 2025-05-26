
const Footer = () => {
  return (
    <footer className="py-12 md:py-16 px-4 md:px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Logo and Copyright */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-xl md:text-2xl font-bold text-white italic mb-4">Car Wash</div>
            <p className="text-gray-400 text-sm">©2021 Car Wash. All Rights Reserved</p>
          </div>
          
          {/* Page Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm md:text-base">PAGE</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-green-400 text-xs md:text-sm">Privacy and Cookie Policy</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 text-xs md:text-sm">Search Terms</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 text-xs md:text-sm">Orders and Returns</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 text-xs md:text-sm">Advanced Search</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 text-xs md:text-sm">Contact Us</a>
            </div>
          </div>
          
          {/* Car Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm md:text-base">CAR</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-green-400 text-xs md:text-sm">Privacy and Cookie Policy</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 text-xs md:text-sm">Search Terms</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 text-xs md:text-sm">Orders and Returns</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 text-xs md:text-sm">Advanced Search</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 text-xs md:text-sm">Contact Us</a>
            </div>
          </div>
          
          {/* Services and Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm md:text-base">SERVICES</h4>
            <div className="space-y-2 mb-4">
              <a href="#" className="block text-gray-400 hover:text-green-400 text-xs md:text-sm">Privacy and Cookie Policy</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 text-xs md:text-sm">Search Terms</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 text-xs md:text-sm">Orders and Returns</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 text-xs md:text-sm">Advanced Search</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 text-xs md:text-sm">Contact Us</a>
            </div>
            <div className="text-xs md:text-sm text-gray-400 space-y-1">
              <p>(303) 985-0105, (303) 555-0105</p>
              <p>info@info.com</p>
              <p className="mt-2">2972 Westheimer Rd. Santa Ana,<br />Illinois 85486</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
