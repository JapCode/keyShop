import NavFilter from '../components/NavFilter';
import Browser from '../components/Browser';
import { Icon } from '@iconify/react';

const Header = () => {
return(
  <header>
    <section>
        <button><Icon icon="carbon:user-avatar-filled-alt" /></button>
        <button><Icon icon="mdi:cart-outline" /></button>
    </section>
   <section> 
     <Browser/>
     <NavFilter/> 
   </section>
 </header>
  );
}
export default Header;
