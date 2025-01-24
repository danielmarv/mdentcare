import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter } from "lucide-react"
import logo from "../../public/images/logg.jpg"

export default function Footer() {
  return (
    <footer className="bg-[#2B3B75] text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start gap-4">
            <Image
              src={logo}
              alt="mdental Logo"
              width={150}
              height={60}
              className="bg-white p-2 rounded-full"
            />
            <p className="text-sm">Excellence in M-Dental care since 1994</p>
          </div>

          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase">About Us</h3>
            <div className="space-y-2 text-sm">
              <p>Since 1994, we have provided patients with the finest dental health treatments in Uganda.</p>
              <div className="space-y-1">
                <p>Address: Plot 13 Wampewo Avenue.</p>
                <p>P. O. Box 23015 Kampala, Uganda</p>
              </div>
              <div>
                <p>Phone: +256 414 344 647 /</p>
                <p>0707909090 / 0392713613 /</p>
                <p>0326100230</p>
              </div>
              <p>Email: admin@jubileedentalclinic.com</p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/courses">CPD Courses</Link>
              </li>
              <li>
                <Link href="/appointments">Make Appointments</Link>
              </li>
              <li>
                <Link href="/lab">Jubilee Dental Lab</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/orthodontics">Orthodontics</Link>
              </li>
              <li>
                <Link href="/services/oral-surgery">Oral Surgery</Link>
              </li>
              <li>
                <Link href="/services/cosmetic-dentistry">Cosmetic Dentistry</Link>
              </li>
              <li>
                <Link href="/services/teeth-whitening">Teeth Whitening</Link>
              </li>
              <li>
                <Link href="/services/periodontal">Periodontal Treatment</Link>
              </li>
              <li>
                <Link href="/services/crown">Dental Crown</Link>
              </li>
              <li>
                <Link href="/services/cbct">3D CBCT Scan</Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase">Opening Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Monday</span>
                <span>8:30am – 5:00pm</span>
              </div>
              <div className="flex justify-between">
                <span>Tuesday</span>
                <span>7:30am – 5:00pm</span>
              </div>
              <div className="flex justify-between">
                <span>Wednesday</span>
                <span>7:30am – 5:00pm</span>
              </div>
              <div className="flex justify-between">
                <span>Thursday</span>
                <span>9:00am – 5:00pm</span>
              </div>
              <div className="flex justify-between">
                <span>Friday</span>
                <span>7:30am – 5:00pm</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>7:30am – 5:00pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              Copyright © {new Date().getFullYear()} M-Dental Clinic, All Rights Reserved. Developed By Brand
              Bu Media Company
            </p>
            <div className="flex gap-4">
              <Link href="https://facebook.com" className="hover:text-blue-400">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="hover:text-blue-400">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

