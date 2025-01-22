import Link from "next/link"
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mandate" className="hover:text-primary transition-colors">
                  Our Mandate
                </Link>
              </li>
              <li>
                <Link href="/governance" className="hover:text-primary transition-colors">
                  Governance
                </Link>
              </li>
              <li>
                <Link href="/management" className="hover:text-primary transition-colors">
                  Management
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-primary transition-colors">
                  Location & contacts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our Network</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hospitals" className="hover:text-primary transition-colors">
                  Hospitals
                </Link>
              </li>
              <li>
                <Link href="/offices" className="hover:text-primary transition-colors">
                  Diocesan Health Offices
                </Link>
              </li>
              <li>
                <Link href="/centre-2" className="hover:text-primary transition-colors">
                  Health Centre II
                </Link>
              </li>
              <li>
                <Link href="/centre-3" className="hover:text-primary transition-colors">
                  Health Centre III
                </Link>
              </li>
              <li>
                <Link href="/centre-4" className="hover:text-primary transition-colors">
                  Health Centre IV
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-primary transition-colors">
                  Training Schools
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/covid" className="hover:text-primary transition-colors">
                  COVID-19 Resources
                </Link>
              </li>
              <li>
                <Link href="/webmail" className="hover:text-primary transition-colors">
                  UCMB Webmail
                </Link>
              </li>
              <li>
                <Link href="/hris" className="hover:text-primary transition-colors">
                  HRIS
                </Link>
              </li>
              <li>
                <Link href="/hmis" className="hover:text-primary transition-colors">
                  HMIS
                </Link>
              </li>
              <li>
                <Link href="/elearning" className="hover:text-primary transition-colors">
                  E-learning/CPD system
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-primary transition-colors">
                  Job Opportunities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contacts</h3>
            <address className="not-italic space-y-4">
              <p>Uganda Episcopal Conference</p>
              <p>Uganda Catholic Medical Bureau</p>
              <p className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>672 Hanlon road, P. O. Box 2886, Kampala-Uganda</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+256 312 266 590 / +256 414 269 705</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>admin@ucmb.co.ug</span>
              </p>
              <div className="flex gap-4 mt-4">
                <Link href="#" className="hover:text-primary transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  <Youtube className="h-6 w-6" />
                </Link>
              </div>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container mx-auto py-4 px-4 text-sm text-gray-400 text-center">
          ©2025 Uganda Catholic Medical Bureau - All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

