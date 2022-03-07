import Header from '../containers/Header';

function Layout(prop) {
  return (
    <>
   <Header/>
    {prop.children}
  </>);
}
export default Layout;
