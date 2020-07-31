class Cabecera extends HTMLElement{

    connectedCallback(){
        this.innerHTML=`
        <!-- ======= Header ======= -->
        <header id="header">
          
            <div class="container-logo">
              
              <div class="logo-A">
                <img src="./assets/img/logo-A.png" alt="">
              </div>
              
              <img class="logo-B" src="./assets/img/logo-B.png" alt="">
             
             
                <img class="terminacion-logo" src="./assets/img/terminacion-logo.png" alt="">
             
            </div>   
      
            <nav class="nav-menu float-right d-none d-lg-block">
              <ul>
                <li class="active"><a href="./index.html">Home</a></li>
                <li><a href="#servicios">Trámites</a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Gobierno
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Intendencia</a>
                    <a class="dropdown-item" href="#">Concejo Deliberante</a>
                    <a class="dropdown-item" href="#">Tribunal de Cuentas
                    </a>
                  </div>
                </li>
                <li><a href="./index.html?vecinos=true#areas">Areas</a></li>   
                <li><a href="./turismo.html">Novedades </a></li>
                <li><a href="./turismo.html">Contactos  </a></li>
              </ul>
            </nav><!-- .nav-menu -->
      
          
        </header><!-- End Header -->
      
        `
    }
}

window.customElements.define('cabecera-component',Cabecera)

class Cabecera2 extends HTMLElement{

    connectedCallback(){
        this.innerHTML=`
        <header id="header">
        <div class="container">
    
          <div class="logo float-left">
            <!--h1 class="text-light"><a href="index.html"><span>Mamba</span></a></h1>
            < Uncomment below if you prefer to use an image logo -->
             <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>
          </div>
    
          <nav class="nav-menu float-right d-none d-lg-block">
            <ul>
             
                <li class="active"><a href="./index.html">Home</a></li>
                <li><a href="#servicios">Boletín Oficial</a></li>
                <li><a href="#areas">Concejo Deliberante</a></li>
                <li><a href="#girsu">Autoridades</a></li>
          
            </ul>
          </nav><!-- .nav-menu -->
    
        </div>
      </header><!-- End Header -->
      
        `
    }
}

window.customElements.define('cabecera-component2',Cabecera2)

