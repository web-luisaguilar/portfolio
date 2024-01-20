import ContactForm from '@/components/contact/ContactForm'
import SocialMedias from '@/components/contact/SocialMedias'

export const metadata = {
  title: 'Luis Aguilar | Contacto',
}
const ContactPage = () => {
  return (
    <main>
      <h1 className="mx-auto text-center">Formulario de contacto</h1>
      <ContactForm />
      <br />
      <h2>OTROS METODOS DE CONTACTO</h2>
      <SocialMedias />
    </main>
  )
}

export default ContactPage
