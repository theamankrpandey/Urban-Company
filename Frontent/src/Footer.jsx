import footer1_img from "./assets/footer1_img.jpeg"
import footer2_img from "./assets/footer_img2.jpeg"
import "./css/Footer.css";
function Footer(){
    return(
        <>
        <div id="footer_Image">
            <img src= {footer1_img} alt="footer1_img" className="footer1_img" />
            <img src= {footer2_img} alt="footer1_img" className="footer2_img" />
        </div>
        
        </>
    )
}
export default Footer