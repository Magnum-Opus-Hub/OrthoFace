import { Button } from '@/components/Button'

const navigation = {
  social: [
    { name: 'Instagram', href: 'https://www.instagram.com/orthoinstitute.ro/' },
    { name: 'Facebook', href: 'https://www.facebook.com/orthoinstitute.ro/' },
  ],
  company: [
    { name: 'About Us', href: '/#about' },
    { name: 'Events', href: '/#events' },
    { name: 'Education', href: '/#education' },
    { name: 'Policy', href: '/#policy' },
    { name: 'Specialists', href: '/#specialists' },
    { name: 'Contact Us', href: '/#contact' },
  ],
  legal: [
    { name: 'Claim', href: '/claim' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'FAQ', href: '/faq' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 sm:pt-28 lg:px-8 lg:pt-36 space-y-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-12">
          <div className="xl:col-span-1 space-y-8">
            <img
              className="h-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Company name"
            />
            <p className="text-lg leading-7 text-gray-600">
              Learn to live, live to give!
            </p>

            {/* 'Join us ' button */}
            <Button href="/contact" color="blue">
              <span>
                Join <span className="hidden lg:inline">Us</span>
              </span>
            </Button>
          </div>
          <div className="xl:col-span-3 grid grid-cols-3 gap-12 mt-16 xl:mt-0">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold leading-7 text-gray-900">Social</h3>
              <ul role="list" className="mt-6 space-y-6">
                {navigation.social.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base leading-6 text-gray-600 hover:text-gray-900">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-semibold leading-7 text-gray-900">Company</h3>
              <ul role="list" className="mt-6 space-y-6">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base leading-6 text-gray-600 hover:text-gray-900">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-semibold leading-7 text-gray-900">Legal</h3>
              <ul role="list" className="mt-6 space-y-6">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base leading-6 text-gray-600 hover:text-gray-900">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20 border-t border-gray-900/10 pt-8 sm:mt-24 lg:mt-28">
          <p className="text-xs leading-5 text-gray-500">&copy; 2023 OrthoFace, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

