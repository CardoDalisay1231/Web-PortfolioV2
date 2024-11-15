export default function FooterSection(){
    const currentYear = new Date().getFullYear(); 
  
    return(
      <div className="container">
        <footer className="py-3 my-4 fw-bold foot">
          <p className="text-center text-body-secondary border-bottom border-2">© {currentYear} JmBagares Portfolio</p>
        </footer>
      </div>
    )
  }