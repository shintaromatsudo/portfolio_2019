const ChangeContentButton = () => {
    switch (content) {
      case 'greeting':
        const contentgr = document.getElementById(ContentGreeting)
        contentgr.classList.remove(v-hidden)
        const contents = document.getElementById(ContentSkills)
        contents.classList.add(v-hidden)
        const contentw = document.getElementById(ContentWorks)
        contentw.classList.add(v-hidden)
        const contentga = document.getElementById(ContentGallery)
        contentga.classList.add(v-hidden)
        break;
      case 'skills':
        const contentgr = document.getElementById(ContentGreeting)
        contentgr.classList.add(v-hidden)
        const contents = document.getElementById(ContentSkills)
        contents.classList.remove(v-hidden)
        const contentw = document.getElementById(ContentWorks)
        contentw.classList.add(v-hidden)
        const contentga = document.getElementById(ContentGallery)
        contentga.classList.add(v-hidden)
        break;
      case 'works':
        const contentgr = document.getElementById(ContentGreeting)
        contentgr.classList.add(v-hidden)
        const contents = document.getElementById(ContentSkills)
        contents.classList.add(v-hidden)
        const contentw = document.getElementById(ContentWorks)
        contentw.classList.remove(v-hidden)
        const contentga = document.getElementById(ContentGallery)
        contentga.classList.add(v-hidden)
        break;
      case 'gallery':
        const contentgr = document.getElementById(ContentGreeting)
        contentgr.classList.add(v-hidden)
        const contents = document.getElementById(ContentSkills)
        contents.classList.add(v-hidden)
        const contentw = document.getElementById(ContentWorks)
        contentw.classList.add(v-hidden)
        const contentga = document.getElementById(ContentGallery)
        contentga.classList.remove(v-hidden)
        break;
    }
  }
  
  return (
    <React.Fragment>
      <p className="" onClick={changeContent("greetng")}>
        GREETING
      </p>
      <p className="" onClick={changeContent("skills")}>
        SKILLS
      </p>
      <p className="" onClick={changeContent("works")}>
        WORKS
      </p>
      <p className="" onClick={changeContent("gallery")}>
        GALLERY
      </p>
    </React.Fragment>
  )
}

export default ChangeContentButton
