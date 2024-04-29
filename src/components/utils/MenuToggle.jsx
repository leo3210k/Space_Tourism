import './MenuToggle.css'

const Path = (props) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ isSideMenuOpen, toggle }) => (
  <svg className="md:hidden relative flex justify-center items-center mr-6 mt-6 z-50" onClick={toggle} width="30" height="30" viewBox="0 0 23 18">
    <Path
      d="M 2 2.5 L 20 2.5"
      className={`top ${isSideMenuOpen ? 'active' : ''}`}
      variants={{
        closed: { d: "M 2 2.5 L 20 2.5" },
        open: { d: "M 3 16.5 L 17 2.5" }
      }}
    />
    <Path d="M 2 9.423 L 20 9.423" opacity="1" className={`middle ${isSideMenuOpen ? 'active' : ''}`} />
    <Path
      d="M 2 16.346 L 20 16.346"
      className={`bottom ${isSideMenuOpen ? 'active' : ''}`}
      variants={{
        closed: { d: "M 2 16.346 L 20 16.346" },
        open: { d: "M 3 2.5 L 17 16.346" }
      }}
    />
  </svg>
);