import ContactForm from '@/components/contact/ContactForm'
import SocialMedias from '@/components/contact/SocialMedias'

export const metadata = {
  title: 'Contacto | LuisAguilar',
}
const ContactPage = () => {
  return (
    <main>
      <h1 className="text-center">Formulario de contacto</h1>
      <ContactForm />
      <br />
      <h2 className="text-center">OTROS METODOS DE CONTACTO</h2>
      <SocialMedias />
    </main>
  )
}

export default ContactPage
