
import { Profileboxstyle } from "../../../Styles/Profileboxstyle";

const Profilebox = () => {
    return (
        <div style={Profileboxstyle.box1}>
           <h3 style={Profileboxstyle.heading}>Profile Settings</h3>
        <h4 style={Profileboxstyle.text}>Profile Information</h4>
        
<div style={Profileboxstyle.box2}>
  <div >
    <label style={Profileboxstyle.lbl} htmlFor="NAME">Full Name</label>
    <br />
    <input style={Profileboxstyle.inpbx}
      type="text"
      placeholder="Demo User"
      id="NAME"
    />
  </div>

  <div>
    <label style={Profileboxstyle.lbl} htmlFor="DOB">Date of Birth</label>
    <br />
    <input style={Profileboxstyle.inpbx} type="date" id="DOB" />
  </div>
</div>

        </div>
    );
};
export default Profilebox;