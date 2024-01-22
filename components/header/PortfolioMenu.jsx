import Link from "next/link";
import { useState } from "react";


const navItems = [
  { title: "Home", href: "#" },
  { title: "Courses", href: "#s1" },
  { title: "How it Works", href: "#s2" },
  { title: "Why Choose", href: "#s3" },
  { title: "Our Mission", href: "#s4" },
  { title: "Registration", href: "https://forms.office.com/pages/responsepage.aspx?id=eZQ9Mlwlp06vTPkd6SKQ7tVQfp5gMIRHih-MJu64lCpUMllDM0wyNlhPU0E5MlJSM05RVzNKQUtOMi4u"},
];

const PortfolioMenu = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#one-page-nav"
        aria-controls="one-page-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      <div className="collapse navbar-collapse" id="one-page-nav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <img src="/images/logo-black.png" alt="" width={140} />
              </Link>
            </div>
          </li>
          {navItems.map((navItem, i) => (
            <li key={i} className="nav-item">
              <a
                className={`nav-link ${activeLink === i ? "active" : ""}`}
                href={navItem.href}
                onClick={() => handleLinkClick(i)}
              >
                {navItem.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default PortfolioMenu;
