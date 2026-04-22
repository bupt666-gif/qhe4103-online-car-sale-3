'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/10 text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wider">AutoSphere</h3>
          <p className="text-sm">
            QHE4103 Fundamentals of Web Technology Coursework Project.<br/>
            Online Car Sale Website.
          </p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Buyers</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/search" className="hover:text-white transition-colors">Search Cars</Link></li>
            <li><Link href="/models" className="hover:text-white transition-colors">Explore Models</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Sellers</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/register" className="hover:text-white transition-colors">Register as Seller</Link></li>
            <li><Link href="/login" className="hover:text-white transition-colors">Seller Login</Link></li>
            <li><Link href="/add-car" className="hover:text-white transition-colors">Add Car</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Team Members</h4>
          <ul className="space-y-2 text-sm">
            <li>Member 1: wangchaoyu</li>
            <li>Member 2: luojingyu</li>
            <li>Member 3: juzi</li>
            <li>Member 4: taogefei</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-xs flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} AutoSphere Group. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
