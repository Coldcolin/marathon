import "./Registration.css"

const Registration = () => {
  return (
    <div className="Registration-Container">
        <h2>Registration Form</h2>
        <form className="Registration-Form">
            <h3 className="Registration-Header">Participant Details</h3>
            <div className="Registration-One">
                <p>Full Name</p>
                <div>
                    <input placeholder="First Name"/>
                    <input placeholder="Last Name"/>
                </div>
            </div>
            <div className="Registration-Two">
            <p>Date of Birth</p>
                <div>
                    <input placeholder="dd-mm-yy"/>
                    <label>Sex</label>
                    <input placeholder="Male/Female"/>
                    <label>Marital Status</label>
                    <input placeholder="Married/Single/Divorced"/>
                </div>
            </div>
            <div className="Registration-Three">
            <p>Phone Number</p>
                <div>
                    <input placeholder="enter a valid phone number"/>
                    <input placeholder="example@xample.com"/>
                </div>
            </div>
            <div className="Registration-Four">
            <p>Address</p>
                <div>
                    <input placeholder="Street address Line 1"/>
                    <input placeholder="Street address Line 2"/>
                    <div>
                        <input placeholder="LGA"/>
                        <input placeholder="Ward"/>
                    </div>
                    
                </div>
            </div>
            <div className="Registration-Five">
            <p>State of Origin</p>
                <div>
                    <input placeholder="State"/>
                    <input placeholder="LGA"/>
                </div>
            </div>
            <div className="Registration-Six">
            <p>Emergency Contact</p>
                <div>
                    <div>
                    <input placeholder="First Name"/>
                    <input placeholder="Last Name"/>
                    </div>
                    <div>
                    <input placeholder="Relationship"/>
                    <input placeholder="Phone Number"/>
                    </div>
                </div>
            </div>
            <div className="Registration-Seven">
            <p>T-shirt Size</p>
                <div>
                    <div>
                        <input type="checkbox"/>
                        <label>XS</label>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <label>S</label>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <label>M</label>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <label>L</label>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <label>XL</label>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <label>XXL</label>
                    </div>
                </div>
            </div>
            {/* <div className="Registration-Payment">
                <h3>Registration Payments</h3>
                <div className="Registration-Eight">
                <p>Payment Method</p>
                <div>
                    <div>
                        <input type="checkbox"/>
                        <label>Cash</label>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <label>Credit Card</label>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <label>Cheque</label>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <label>PayPal</label>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <label>Bank Transfer</label>
                    </div>
                </div>
                </div>

            </div> */}
            <div className="Registration-Waiver">
                <h3>Waiver & Release</h3>
                <p>
                I confirm that I am in good shape, health, and condition. I don't have any medical condition or medical history that will affect my participation in this event. I will follow the rule and regulations of the marathon event. I acknowledge that this marathon race requires physical activity and there are possible risks and danger. I release the marathon event organizers for any responsibility in case of an accident, illness, or injury. I allow my photo to be taken during the event and used for event advertising and marketing. I confirm that all information in this registration form is accurate and true.
                </p>
                <div>
                    <input type="checkbox"/>
                    <p>Agree to terms and conditions</p>
                </div>
            </div>
            <button>Pay</button>
        </form>
    </div>
  )
}

export default Registration