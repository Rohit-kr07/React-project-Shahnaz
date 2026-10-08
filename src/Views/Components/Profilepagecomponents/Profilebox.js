import { Profileboxstyle } from "../../../Styles/Profileboxstyle";


const Profilebox = () => {
  return (
    <div style={Profileboxstyle.mainbox}>
      <div style={Profileboxstyle.box1}>
        <h3 style={Profileboxstyle.heading}>Profile Settings</h3>
        <h4 style={Profileboxstyle.text}>Profile Information</h4>

        <div style={Profileboxstyle.box2}>
          <div>
            <label style={Profileboxstyle.lbl} htmlFor="NAME">
              Full Name
            </label>
            <br />
            <input
              style={Profileboxstyle.inpbx}
              type="text"
              placeholder="Demo User"
              id="NAME"
            />
          </div>

          <div>
            <label style={Profileboxstyle.lbl} htmlFor="DOB">
              Date of Birth
            </label>
            <br />
            <input
              style={Profileboxstyle.inpbx}
              type="date"
              id="DOB"
            />
          </div>
        </div>

        <div style={Profileboxstyle.box3}>
          <div id="email">
            <label
              htmlFor="e-mail"
              style={Profileboxstyle.lbl}
            >
              Email Address
            </label>
            <br />

            <input
              type="email"
              style={Profileboxstyle.inpbx}
              placeholder="demo@gmail.com"
              required
              id="e-mail"
            />
          </div>

          <div id="phone">
            <label
              htmlFor="phnum"
              style={Profileboxstyle.lbl}
            >
              Phone Number
            </label>
            <br />

            <input
              type="tel"
              style={Profileboxstyle.inpbx}
              placeholder="Enter your phone number"
              id="phnum"
            />
          </div>
        </div>

        <p style={Profileboxstyle.text}>Address Information</p>

        <label htmlFor="add" style={Profileboxstyle.street}>
          Street Address
        </label>
        <br />

        <input
          type="text"
          style={Profileboxstyle.inpbx1}
          placeholder="Enter your complete address"
          id="add"
        />

        <div style={Profileboxstyle.box3}>
          <div>
            <label style={Profileboxstyle.lbl} htmlFor="pin">
              Pin code
            </label>
            <br />
            <input
              style={Profileboxstyle.inpbx}
              type="text"
              placeholder="Enter your pin code"
              id="pin"
            />
          </div>

          <div>
            <label style={Profileboxstyle.lbl} htmlFor="city">
              City
            </label>
            <br />
            <input
              style={Profileboxstyle.inpbx}
              type="text"
              placeholder="Enter your city"
              id="city"
            />
          </div>
        </div>

        <div style={Profileboxstyle.box3}>
          <div id="cntry">
            <label
              htmlFor="country"
              style={Profileboxstyle.lbl}
            >
              Country
            </label>
            <br />

            <input
              type="text"
              style={Profileboxstyle.inpbx}
              placeholder="Enter your country"
              id="country"
            />
          </div>

          <div id="git">
            <label
              htmlFor="GitHub"
              style={Profileboxstyle.lbl}
            >
              GitHub Profile
            </label>
            <br />

            <input
              type="url"
              id="GitHub"
              placeholder="https://github.com/username"
              style={Profileboxstyle.inpbx}
            />
          </div>
        </div>

        <div style={Profileboxstyle.btn}>
          <button
            style={Profileboxstyle.btn2}
            Cancel Changes
          >
          </button>
          <button
            style={Profileboxstyle.btn3}
            Save Changes
          >
          </button>

        </div>
      </div>
    </div>
  );
};

export default Profilebox;
