import Header from './Header';

function Layout(prop) {
  const { children } = prop;
  return (
    <>
      <Header />
      {children}
    </>
  );
}
export default Layout;
