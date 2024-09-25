interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h3>Portfolio contact form submission</h3>
    <p>
      From <strong>{name}</strong> at {email}
    </p>
    <h4>Message:</h4>
    <p>{message}</p>
  </div>
);

export default ContactFormEmail;
