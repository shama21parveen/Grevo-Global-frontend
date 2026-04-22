import grevoIcon from '../assets/GREVOicon.png';
import grevoTextLogo from '../assets/GREVOtextLogo.png';

export function Logo() {
  return (
    <div className="inline-flex items-center gap-[10px]" aria-label="Grevo Global">
      <img
        className="block h-[46px] w-10 object-contain sm:h-[61px] sm:w-[53px]"
        src={grevoIcon}
        alt="Grevo icon"
      />
      <img
        className="block h-[43px] w-[124px] object-contain sm:h-[53px] sm:w-[154px]"
        src={grevoTextLogo}
        alt="Grevo Global logo"
      />
    </div>
  );
}
