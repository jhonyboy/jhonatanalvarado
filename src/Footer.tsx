import phone from '../src/assets/phone.png';
import gmail from '../src/assets/gmail.png';
import linkedin from '../src/assets/linkedin.png';
import github from '../src/assets/github.png';

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content py-10">

  <div className="max-w-4xl mx-auto px-4 text-center">
    
    <h2 className="text-2xl font-semibold mb-8">
      Contáctame
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">

      {/* Teléfono */}
      <a 
        href="tel:6631083003"
        className="flex flex-col items-center gap-2 hover:scale-105 transition"
      >
        <div className="p-4 rounded-full bg-base-100 shadow-md">
          <img src={phone} alt="Phone" className="w-6" />
        </div>
        <span className="text-xs sm:text-sm opacity-80 text-center">
          663 108 30 03
        </span>
      </a>

      {/* Gmail */}
      <a 
        href="mailto:alvaradogodinez@gmail.com"
        className="flex flex-col items-center gap-2 hover:scale-105 transition"
      >
        <div className="p-4 rounded-full bg-base-100 shadow-md">
          <img src={gmail} alt="Gmail" className="w-6" />
        </div>
        <span className="text-xs sm:text-sm opacity-80 text-center break-all">
          alvaradogodinez@gmail.com
        </span>
      </a>

      {/* LinkedIn */}
      <a 
        href="#"
        className="flex flex-col items-center gap-2 hover:scale-105 transition"
      >
        <div className="p-4 rounded-full bg-base-100 shadow-md">
          <img src={linkedin} alt="LinkedIn" className="w-6" />
        </div>
        <span className="text-xs sm:text-sm opacity-80">
          LinkedIn
        </span>
      </a>

      {/* GitHub */}
      <a 
        href="https://github.com/jhonyboy"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2 hover:scale-105 transition"
      >
        <div className="p-4 rounded-full bg-base-100 shadow-md">
          <img src={github} alt="GitHub" className="w-6" />
        </div>
        <span className="text-xs sm:text-sm opacity-80">
          GitHub
        </span>
      </a>

    </div>

  </div>

</footer>

  );
};

export default Footer;