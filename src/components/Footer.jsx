
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted fixed-bottom '>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright
        <a className='text-reset fw-bold' href='#'>
          &nbsp;Matt Mitchell
        </a>
      </div>
    </MDBFooter>
  )  
}
  
  
  
  export default Footer;