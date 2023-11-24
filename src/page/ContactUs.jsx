// const ContactUs = () => {
//   return (
//     <div className="text-color ms-5 me-5 mr-5 mt-3">
//       <b>This is Contact Us component</b>
//     </div>
//   );
// };
// export default ContactUs;



// import React from 'react';
// import styled from 'styled-components';

// const ContactUsContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin: 20px;
// `;

// const ContactInfoContainer = styled.div`
//   flex: 1;
//   padding: 20px;
//   background-color: #f8f9fa; /* Light gray background for visualization */
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const ContactFormContainer = styled.div`
//   flex: 1;
//   padding: 20px;
//   background-color: white;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const MapContainer = styled.div`
//   flex: 1;
//   padding: 20px;
//   margin-top: 20px;
//   background-color: white;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
// `;

// const ContactUs = () => {
//   return (
//     <ContactUsContainer className="text-color">
//       {/* Contact Information */}
//       <ContactInfoContainer>
//         <h3>Contact Information</h3>
//         <p>Name: Your Name</p>
//         <p>Email: your.email@example.com</p>
//         <p>Phone: +1 234 567 890</p>
//         <p>Address: 123 Street, City, Country</p>
//         <MapContainer>
//         {/* Replace the following with an actual map API */}
//         <iframe
//           title="Map"
//           width="100%"
//           height="300"
//           frameBorder="0"
//           scrolling="no"
//           marginHeight="0"
//           marginWidth="0"
//           src="https://maps.google.com/maps?q=your%20location&amp;output=embed"
//         ></iframe>
//       </MapContainer>
//       </ContactInfoContainer>

//       {/* Map */}


//       {/* Contact Form */}
//       <ContactFormContainer>
//         <h3>Contact Us</h3>
//         <form>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">
//               Name
//             </label>
//             <input type="text" className="form-control" id="name" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email
//             </label>
//             <input type="email" className="form-control" id="email" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="message" className="form-label">
//               Message
//             </label>
//             <textarea className="form-control" id="message" rows="4"></textarea>
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </ContactFormContainer>
//     </ContactUsContainer>
//   );
// };

// export default ContactUs;
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContactUsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif; /* Add your preferred font-family */
`;

const ContactCard = styled.div`
  background-color: #780000;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  font-size: 24px; /* Adjust the font size */
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  background-color: #FDF0D5
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #780000 /* Red color for the label */
  font-size: 16px; /* Adjust the font size */
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px; /* Adjust the font size */
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px; /* Adjust the font size */
`;

const SubmitButton = styled.button`
  background-color:#780000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; /* Adjust the font size */
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    mailFrom: '',
    mailTo: '',
    mailSubject: '',
    mailContent: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/email/send', formData);
      alert('Email sent successfully!');
    } catch (error) {
      alert('Failed to send email. Error: ' + error.message);
    }
  };

  return (
    <ContactUsContainer>
      <FormContainer>
      <ContactCard>
        <h2>Contact Us</h2>
      </ContactCard>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="mailFrom">From:</Label>
            <Input
              type="email"
              id="mailFrom"
              name="mailFrom"
              value={formData.mailFrom}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="mailTo">To:</Label>
            <Input
              type="email"
              id="mailTo"
              name="mailTo"
              value={formData.mailTo}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="mailSubject">Subject:</Label>
            <Input
              type="text"
              id="mailSubject"
              name="mailSubject"
              value={formData.mailSubject}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="mailContent">Content:</Label>
            <TextArea
              id="mailContent"
              name="mailContent"
              value={formData.mailContent}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <SubmitButton type="submit">Send Email</SubmitButton>
          </FormField>
        </form>
      </FormContainer>
    </ContactUsContainer>
  );
};

export default ContactUs;
