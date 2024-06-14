const ContactForm = () => {
  return (
    <form
      target="_blank"
      action="https://formsubmit.co/web.luisaguilar@gmail.com"
      method="POST"
      className="max-w-[80ch] mx-auto "
    >
      <fieldset className="flex w-full gap-y-4 justify-center md:justify-between border border-customTheme-500/50 p-4 flex-wrap">
        <legend className=" text-center md:text-start md:pl-0 px-4 md:pr-4">
          <h2 className="!p-0 !m-0">Contacta conmigo</h2>
        </legend>
        <div className="flex flex-col w-full lg:w-[37ch]">
          <label htmlFor="email">Correo de contacto</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="off"
            placeholder="your_name@gmail.com"
          ></input>
        </div>
        <div className="flex flex-col w-full lg:w-[37ch]">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" required autoComplete="off" placeholder="Luis Eduardo"></input>
        </div>
        <div className="flex flex-col w-full lg:w-[37ch]">
          <label htmlFor="subject">Asunto</label>
          <input type="text" id="subject" name="subject" required autoComplete="off" placeholder="Invitacion"></input>
        </div>
        <div className="flex flex-col w-full ">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows={10}
            placeholder="Hola, mi nombre es <nombre>, te escribo porque..."
            required
          ></textarea>
        </div>
        <button type="submit" className="btn-solid w-full ">
          Enviar Mensaje
        </button>
      </fieldset>
    </form>
  )
}

export default ContactForm
