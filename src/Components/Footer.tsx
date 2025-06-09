import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        
        <div>
          <h3 className='text-xl font-bold mb-4'>
            Real Estate Co.
          </h3>
          <p className='text-gray-400'>
            Your trusted partner in finding the perfect home.
          </p>
        </div>

        <div>
          <h4 className='font-bold mb-4'>
            Quick Links
          </h4>
          <ul className='space-y-2 text-gray-400 cursor-pointer'>
            <li>Home</li>
            <li>Properties</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className='font-bold mb-4'>
            Contact Info:
          </h4>
          <ul className='space-y-2 text-gray-400'>
            <li>off semiloluwa ifelodun Avenu Ado-Ekiti</li>
            <li>contact@kiatekaestate.com</li>
            <li>080 xx xx xx xx</li>
          </ul>
        </div>

        <div>
          <h4 className='font-bold mb-4'>
            Follow Us
          </h4>
          <div className='flex space-x-4'>
            <a href=''>
              <FaFacebook className='text-gray-400 hover:text-white transition-colors duration-200 text-2xl'/>
            </a>

            <a href=''>
              <FaTwitter className='text-gray-400 hover:text-white transition-colors duration-200 text-2xl'/>
            </a>

            <a href=''>
              <FaInstagram className='text-gray-400 hover:text-white transition-colors duration-200 text-2xl'/>
            </a>

            <a href=''>
              <FaYoutube className='text-gray-400 hover:text-white transition-colors duration-200 text-2xl'/>
            </a>

            <a href=''>
              <FaLinkedin className='text-gray-400 hover:text-white transition-colors duration-200 text-2xl'/>
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer