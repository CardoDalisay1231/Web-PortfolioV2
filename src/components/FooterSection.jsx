export default function FooterSection(){
    const currentYear = new Date().getFullYear(); 
  
    return(
      <div class="container">
        <footer class="py-3 my-4 fw-bold foot">
          <p class="text-center text-body-secondary border-bottom border-2">© {currentYear} Company, Inc</p>
        </footer>
      </div>
    )
  }