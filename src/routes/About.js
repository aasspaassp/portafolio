


const About = () => {

  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
    intro: ["I'm a software developer with a passion for web development. I am currently based somewhere in the world. My main focus is building fast, accessible, and beautiful websites that users enjoy.",
    "You can have a look at some of my work here."],
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

    </div>
    </div>
    </>
    
    )
}

export default About