import contactMeLogo from "../assets/images/contact-logo.png";
import "../styles/Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Popup from "./Popup";
import ShakeOnView from "./ShakeOnView";

const Contact = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [sending, setSending] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const sendEmail = (event: React.FormEvent) => {
    event.preventDefault();
    setSending(true);

    const params = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    emailjs.init({
      publicKey: "6E_HHmBg0jJafBGNH",
    });

    const serviceID = "service_i1o2uyg";
    const templateID = "template_6qdsscf";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        [nameRef, emailRef, messageRef].forEach((ref) => {
          if (ref.current) ref.current.value = "";
        });
        setSending(false);
        setShow(true);
        console.log(res);
      })
      .catch((err) => {
        console.log("Error" + err);
      });
  };

  return (
    <section id="contact" className="d-flex align-items-center bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-0 col-md-6">
            <h2 className="text-center">Contact Me</h2>
            <p className="text-left mb-4">
              Feel free to reach out to me for collaborations or just a friendly
              chat!
            </p>
            <div className="text-center d-none d-md-block">
              <ShakeOnView>
                <img
                  className="text-center contact-logo"
                  src={contactMeLogo}
                  alt="Contact Image"
                />
              </ShakeOnView>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <form onSubmit={sendEmail} method="POST">
              <div className="mb-1">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="name"
                  name="name"
                  ref={nameRef}
                  required
                />
              </div>
              <div className="mb-1">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="email"
                  name="email"
                  ref={emailRef}
                  required
                />
              </div>
              <div className="mb-1">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control form-control-sm"
                  id="message"
                  name="message"
                  rows={5}
                  ref={messageRef}
                  required
                ></textarea>
              </div>
              <div className="text-center pt-2">
                <button
                  type="submit"
                  name="submitbtn"
                  className="btn btn-sm btn-dark"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Popup
        show={show}
        handleClose={handleClose}
        message="Message has been sent !"
      />
    </section>
  );
};

export default Contact;
