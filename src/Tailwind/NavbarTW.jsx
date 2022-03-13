import "../../src/assets/css/styles.css";

export default function NavBarTW() {
  return (
    <>
      <div className='navBarContainer'>
        <div className='customNavBar flex px-7  desk:mx-auto  desk:p-0 desk:pr-10 '>
          <a className='customNavBar__logo h-9 w-40  desk:h-14 desk:w-60'> </a>
          <ul className='customNavBar__links w-full justify-end hidden desk:flex'>
            <li className='desk:mr-12'>
              <a
                id='navItem'
                type='active'
                className='custonNavBar__links--item'
                href='#'
                onClick={(target) => {
                  activateItem(target);
                }}
              >
                Servicios
              </a>
            </li>
            <li className=' desk:mr-12'>
              <a
                id='navItem'
                type='disabled'
                className='custonNavBar__links--item'
                href='#'
                onClick={(target) => {
                  activateItem(target);
                }}
              >
                Proyectos
              </a>
            </li>
            <li className='desk:mr-12'>
              <a
                id='navItem'
                type='disabled' 
                className='custonNavBar__links--item'
                href='#'
                onClick={(target) => {
                  activateItem(target);
                }}
              >
                Nosotros
              </a>
            </li>
            <li className='desk:mr-12'>
              <a
                id='navItem'
                type='disabled'
                className='custonNavBar__links--item'
                href='#'
                onClick={(target) => {
                  activateItem(target);
                }}
              >
                Clientes
              </a>
            </li>
            <li className='desk:mr-12'>
              <a
                id='navItem'
                type='disabled'
                className='custonNavBar__links--item'
                href='#'
                onClick={(target) => {
                  activateItem(target);
                }}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                id='navItem'
                type='disabled'
                className='custonNavBar__links--item'
                href='#'
                onClick={(target) => {
                  activateItem(target);
                }}
              >
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

function activateItem(target) {
  document.querySelectorAll("#navItem").forEach((items) => {
    items.setAttribute("type", "disabled");
  });
  target.target.setAttribute("type", "active");
}
