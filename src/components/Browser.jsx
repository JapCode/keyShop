// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';

function Browser() {
  return (
    <section className="browse--container">
      <Icon icon="fa6-solid:magnifying-glass" />
      <input
        type="search"
        id="browser"
        autoComplete="false"
        placeholder="Search product"
      />
    </section>
  );
}
export default Browser;
