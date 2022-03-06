import { Icon } from '@iconify/react';

const Browser = () => {
return(
  <section className="browse--container">
    <Icon icon="fa6-solid:magnifying-glass" />
    <input type="search" id="browser" autoComplete="false" placeholder="Search product" />
    </section>
  );
}
export default Browser;
