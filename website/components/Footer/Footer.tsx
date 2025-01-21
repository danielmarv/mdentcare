import Link from "next/link"
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mandate" className="hover:text-primary">
                  Our Mandate
                </Link>
              </li>
              <li>
                <Link href="/governance" className="hover:text-primary">
                  Governance
                </Link>
              </li>
              <li>
                <Link href="/management" className="hover:text-primary">
                  Management
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-primary">
                  Location & contacts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our Network</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hospitals" className="hover:text-primary">
                  Hospitals
                </Link>
              </li>
              <li>
                <Link href="/offices" className="hover:text-primary">
                  Diocesan Health Offices
                </Link>
              </li>
              <li>
                <Link href="/centre-2" className="hover:text-primary">
                  Health Centre II
                </Link>
              </li>
              <li>
                <Link href="/centre-3" className="hover:text-primary">
                  Health Centre III
                </Link>
              </li>
              <li>
                <Link href="/centre-4" className="hover:text-primary">
                  Health Centre IV
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-primary">
                  Training Schools
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/covid" className="hover:text-primary">
                  COVID-19 Resources
                </Link>
              </li>
              <li>
                <Link href="/webmail" className="hover:text-primary">
                  UCMB Webmail
                </Link>
              </li>
              <li>
                <Link href="/hris" className="hover:text-primary">
                  HRIS
                </Link>
              </li>
              <li>
                <Link href="/hmis" className="hover:text-primary">
                  HMIS
                </Link>
              </li>
              <li>
                <Link href="/elearning" className="hover:text-primary">
                  E-learning/CPD system
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-primary">
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
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                672 Hanlon road, P. O. Box 2886, Kampala-Uganda
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +256 312 266 590 / +256 414 269 705
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                admin@ucmb.co.ug
              </p>
              <div className="flex gap-4 mt-4">
                <Link href="#" className="hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-primary">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container mx-auto py-4 text-sm text-gray-400">
          ©2025 Uganda Catholic Medical Bureau - All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

