// import './Footer.css';
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

// const element = <FontAwesomeIcon icon={byPrefixAndName.fas['house']} />
// ReactDOM.render(element, document.body)
const Footer = () => {
  return (
    <div className=" bg-black "  id='footer'>
      <div className="flex justify-between mx-12 mt-15 text-white pt-10 font-Fascinate-Inline  ">
        <div >
          <h3 className="hover:text-red-700 ">Company</h3>
          <ul >
            <li className="hover:text-red-700" >About us</li>
            <li className="hover:text-red-700">Team</li>
            <li className="hover:text-red-700">Careers</li>
            <li className="hover:text-red-700">Blog</li>
          </ul>
        </div>
        <div>
          <h3 className="hover:text-red-700">Legal</h3>
          <ul >
            <li className="hover:text-red-700">Terms & Conditions</li>
            <li className="hover:text-red-700">Refund & Cancellation</li>
            <li className="hover:text-red-700">Privacy Policy</li>
            <li className="hover:text-red-700">Cookie Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="hover:text-red-700">Follow us</h3>
          <div className="flex text-white gap-x-4 py-2 text-2xl">
           {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
           <a href="#"><i className="fa-brands fa-github hover:text-red-700 "></i></a> 
            <a href="#"><i className="fa-brands fa-linkedin hover:text-red-700"></i></a>
            <a href="jangidhitesh906@gmail.com"> <i className="fa-regular fa-envelope hover:text-red-700"></i></a>
          </div>
          {/* <p>Receive exclusive offers in your mailbox</p> */}
        </div>
      </div>
      <div className="text-white text-center pb-5 text-xl">
        <hr className="my-7" />
        <p>This Site make © Hitesh</p>
      </div>
    </div>
  );
}

export default Footer;
