import './SectionContact.css';

export default function SectionContact() {

  
  return (
    <section className="section-contato" id="contato" >
      <h1>Entre em Contato</h1>
      <form className="form"  id="contact-form">
        <input autoComplete="false" id="name" name="name" type="text" placeholder="Nome" required />
        <input autoComplete="false" id="email" name="email" type="email" placeholder="Email" required />
        <input autoComplete="false" id="subject" name="subject" type="text" placeholder="Assunto" required />
        <textarea placeholder="Mensagem" name="message" cols="30" rows="10"></textarea>
        <button type="submit" value="submit" className="btn">
          ENVIAR <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </section>
  )
}