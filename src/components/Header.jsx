import { Icon } from '@iconify/react';
import biomassIcon from '@iconify-icons/flat-color-icons/biomass';

const Header = () => {
  return (
    <header className="header">
      <h1><Icon icon={biomassIcon}></Icon> Restaurants BIO 76 | <span> API Professionels BIO Gouv </span> </h1>
    </header>
  )
}

export default Header
