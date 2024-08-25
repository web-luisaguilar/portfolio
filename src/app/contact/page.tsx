import ContactForm from '@/components/contact/ContactForm'
import SocialMedias from '@/components/contact/SocialMedias'

export const metadata = {
  title: 'Contacto | LuisAguilar'
}
const ContactPage = () => {
  return (
    <main>
      <h1 className="text-center">Formulario de contacto</h1>
      <ContactForm />
      <br />
      <h2 className="text-center">OTROS METODOS DE CONTACTO</h2>
      <SocialMedias />
      <h2 className="text-center pb-4"> ✉️ Enviame un correo </h2>
      <h3 className="text-center text-white ">
        <span className="bg-customTheme-950/50 px-8 py-4 rounded-md hover:border-customTheme-900/80 hover:border">
          web.luisaguilar@gmail.com
        </span>
      </h3>
    </main>
  )
}

export default ContactPage
