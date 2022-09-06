
import img1 from "../../assets/img/C4.jpg";
import Button from ".././Buttons/Button";
import Button2 from ".././Buttons/Button 2";
import "./Photography.css";

export default function Photography(params) {
    return <div className="photography">
        {/* <img src={img1} alt="its litt"></img> */}
        <div className="circle small">
            <h1>PHOTOGRAPHY</h1>
            <Button2 text="Learn More" style={{margin:"auto"}}/>
        </div>
    </div>
}
