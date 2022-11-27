


const About = () => {

  const contact = {
    first: "Andrés",
    last: "González Anzures",
    avatar: "https://placekitten.com/g/200/200",

    notes: "Philosophy major and software engineering student ",
    favorite: true,
    intro: ["27 years. Degree in philosophy. Some certifications in programming but must of it a have learn CS by my own. Interested in programming, have been working on javascript focusing my attention into web development and music based game design. ",
    "For any topic or conversation related to my programs message me at andresfilos94@gmail.com"],
    about: ["Licenciado en filosofía. Actualmente curso la carrera de ingeniería en tecnologías y sistemas de la información. Estoy interesado en implementar soluciones de software que beneficien al usuario.", "Poseo habilidades de desarrollo web full-stack: Javascript, React, Angular, Node, Express y Typescript. Tengo experiencia en proyectos creativos, redacción de publicidad, SEO, además de un gran rigor en la investigación."]
  };

  return(

   
  <>
  
  <div id="contact">
  <div>
    <img
      key={contact.avatar}
      src={contact.avatar || null}
    />
  </div>

  <div>
    <h1>
      {contact.first || contact.last ? (
        <>
          {contact.first} {contact.last}
        </>
      ) : (
        <i>No Name</i>
      )}{" "}
    </h1>

    {contact.twitter && (
      <p>
        <a
          target="_blank"
          href={`https://twitter.com/${contact.twitter}`}
        >
          {contact.twitter}
        </a>
      </p>
    )}

    {contact.notes && <p>{contact.notes}</p>}

    {contact.intro && (
      <>
      <p>{contact.intro[0]}</p>  
    <p>{contact.intro[1]}</p>
    </>)}
    {contact.about && (
      <>
      <p>{contact.about[0]}</p>  
    <p>{contact.about[1]}</p>
    </>)}

    </div>
    </div>
    </>
    
    )
}

export default About