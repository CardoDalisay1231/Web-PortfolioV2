export default function FooterSection(){
    const currentYear = new Date().getFullYear(); 
  
    return(
      <div class="container">
        <footer class="py-3 my-4 fw-bold">
          <ul class="nav justify-content-center border-bottom border-2 pb-3 mb-3 ">
            <li class="nav-item"><a href="#home" class="nav-link px-2 text-body-secondary">Home</a></li>
            <li class="nav-item"><a href="#about" class="nav-link px-2 text-body-secondary">About</a></li>
            <li class="nav-item"><a href="#projects" class="nav-link px-2 text-body-secondary">Projects</a></li>
            <li class="nav-item"><a href="#contact" class="nav-link px-2 text-body-secondary">Contact</a></li>
          </ul>
          <p class="text-center text-body-secondary">© {currentYear} Company, Inc</p>
        </footer>
      </div>
    )
  }