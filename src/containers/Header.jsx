// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';
import NavFilter from '../components/NavFilter';
import Browser from '../components/Browser';

function Header() {
  return (
    <header>
      <section>
        <button type="button">
          <Icon icon="carbon:user-avatar-filled-alt" />
        </button>
        <button type="button">
          <Icon icon="mdi:cart-outline" />
        </button>
      </section>
      <section>
        <Browser />
        <NavFilter />
      </section>
    </header>
  );
}
export default Header;
