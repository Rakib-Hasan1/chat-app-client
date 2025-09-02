import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 pt-12">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-blue-600">Chatify</h2>
                    <p className="mt-3 text-sm">
                        Stay connected with your friends, family, and colleagues anytime,
                        anywhere.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col space-y-2">
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
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
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition"
                        >
                            <FaGithub size={22} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition"
                        >
                            <FaTwitter size={22} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition"
                        >
                            <FaLinkedin size={22} />
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
