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
    <h1>Portfolio contact form submission</h1>
    <p>
      From <strong>{name}</strong> at {email}
    </p>
    <h3>Message:</h3>
    <p>{message}</p>
  </div>
);

export default ContactFormEmail;
