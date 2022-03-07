import useSeo from '../hooks/useSeo';
import ProductList from '../containers/ProductList';

function Home(prop) {
  const { filter } = prop;
  // La info del hook debe ser dinamica en base a los filtrados @Carlos
  useSeo({ title: `${filter}`, description: '' });
  return (
    <div>
      <h1>Home</h1>
      <ProductList prop={filter} />
    </div>
  );
}
export default Home;
