const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content mt-20">
        <aside>
          <div className="flex gap-5 items-center">
            <img src="../../../public/Doc House Logo.svg" alt="" />
            <h2 className="text-3xl font-bold">
              <span className="text-[#F7A582]">Doc</span> House
            </h2>
          </div>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
