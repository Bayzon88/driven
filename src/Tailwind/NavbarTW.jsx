import "../../src/assets/css/styles.css";

export default function NavBarTW() {
  return (
    <>
      <div className='navBarContainer'>
        <div className='customNavBar flex px-7  desk:mx-auto  desk:p-0 desk:pr-10 '>
          <a className='customNavBar__logo h-9 w-40  desk:h-14 desk:w-60'> </a>
          <ul className='customNavBar__links w-full justify-end hidden desk:flex'>
            <li className='desk:mr-12'>
              <a className='custonNavBar__links--item' href='#'>
                Servicios
              </a>
            </li>
            <li className=' desk:mr-12'>
              <a className='custonNavBar__links--item' href='#'>
                Proyectos
              </a>
            </li>
            <li className='desk:mr-12'>
              <a className='custonNavBar__links--item' href='#'>
                Nosotros
              </a>
            </li>
            <li className='desk:mr-12'>
              <a className='custonNavBar__links--item' href='#'>
                Clientes
              </a>
            </li>
            <li className='desk:mr-12'>
              <a className='custonNavBar__links--item' href='#'>
                Blog
              </a>
            </li>
            <li>
              <a className='custonNavBar__links--item' href='#'>
                Contacto
              </a>
            </li>
          </ul>
          <div className='desk:hidden flex justify-end w-full '>
            <a href='#'>
              <div className='hamburguerMenu'>
                <div className='hamburguerLine'></div>
                <div className='hamburguerLine'></div>
                <div className='hamburguerLine'></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
