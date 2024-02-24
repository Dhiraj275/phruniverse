import React from 'react'

const Contact = () => {
    return (
        <div className="wrap">
            <div className="left">
                <h5 className="section-heading">Get in Touch</h5>
                <div className="social-media">
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-facebook-f" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-youtube" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <form action="">
                    <div className="flex">
                        <div className="input-wrapper">
                            <label htmlFor="fname">First Name</label>
                            <input required="" type="text" name="fname" id="fname" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="lname">Last Name</label>
                            <input required="" type="text" name="lname" id="lname" />
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input required="" type="text" name="email" id="email" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" required="" defaultValue={""} />
                    </div>
                    <div className="flex-center">
                        <button>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact