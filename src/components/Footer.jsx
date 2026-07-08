import Image from "next/image";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-yellow-50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image
              src={"/navlogo.png"}
              alt="logo"
              loading="eager"
              width={60}
              height={60}
              className="object-cover h-auto w-auto"
            />

            <p className="mt-3 text-gray-600">
              Your one-stop destination for summer essentials and seasonal
              fashion.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>

            <div className="flex flex-col gap-2">
              <Link href="/">Home</Link>

              <Link href="/products">Products</Link>

              <Link href="/my-profile">My Profile</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Contact</h3>

            <p>abubakkar872884@gamil.com</p>

            <p>+880 1403873664</p>

            <div className="flex gap-4 mt-4">
             <p className="text-2xl"><FaFacebook /></p>
             <p className="text-2xl"><FaInstagram /></p>
             <p className="text-2xl"><FaTwitter /></p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-4 text-center text-sm text-gray-500">
          <Link href="/privacy-policy" className="mr-4">
            Privacy Policy
          </Link>

          <Link href="/terms">Terms & Conditions</Link>

          <p className="mt-2">© 2026 SunCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
