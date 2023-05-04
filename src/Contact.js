import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Contact = () => {
  const {isAuthenticated ,user} = useAuth0();
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18376.578419419653!2d-73.99534663807395!3d40.75621732534676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sin!4v1669616955779!5m2!1sen!2sin" 
      width="100%" height="400" 
      style={{border:0 }} 
      allowFullScreen=""
       loading="lazy" 
       referrerPolicy="no-referrer-when-downgrade">
       </iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mnqryokk"
           method="POST" 
           className="contact-inputs">
            <input type = "text"
             placeholder="username" 
             value = {isAuthenticated ? user.name : ""}
            
             required 
             autoComplete="off"
              />

            <input type = "email"
             placeholder="Email" 
             name ="Email" 
             required 
             value = {isAuthenticated ? user.email : ""}  
             autoComplete="off" 
              />

            <textarea name = "Message" 
              cols = "30"
              rows="6"
              placeholder= "Enter Your Message"
              autoComplete="off" 
             />

            <input type = "submit"
             value="send"  />

             </form>
        </div>

      </div>
    </Wrapper>
 
  )
};

export default Contact;
