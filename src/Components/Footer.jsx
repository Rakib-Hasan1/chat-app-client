import { FaFacebook, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 pt-12 dosis">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-blue-600 slab">Chatify</h2>
                    <p className="mt-3 ">
                        Stay connected with your friends, family, and colleagues anytime,
                        anywhere.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col space-y-2">
                    <h3 className="text-lg font-semibold mb-2 slab">Quick Links</h3>
                    <a href="#" className="hover:text-blue-600 transition">
                        Home
                    </a>
                    <a href="#" className="hover:text-blue-600 transition">
                        About
                    </a>
                    <a href="#" className="hover:text-blue-600 transition">
                        Contact
                    </a>
                    <a href="#" className="hover:text-blue-600 transition">
                        Privacy Policy
                    </a>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-lg font-semibold mb-2 slab">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <a
                            href="https://www.facebook.com/md.rakib.hasan.0001"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition"
                        >
                            <FaFacebook size={22} />
                        </a>

                        <a
                            href="https://github.com/Rakib-Hasan1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition"
                        >
                            <FaGithub size={22} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/dev-mdrakib"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition"
                        >
                            <FaLinkedin size={22} />
                        </a>

                        <a
                            href="https://modern-portfolio-lovat.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition"
                        >
                            <FaGlobe size={22} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-300 dark:border-gray-700 py-4 text-center text-sm">
                © {new Date().getFullYear()} Chatify. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
