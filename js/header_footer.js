const header = `
    <div class="header-container">
            <!-- Checkbox oculto para control del menú móvil -->
            <input type="checkbox" id="nav-toggle" class="nav-toggle">
            
            <!-- Botón de menú móvil -->
            <label for="nav-toggle" class="mobile-menu-btn">☰</label>
            
            <!-- Logo -->
            <div class="logo">
                <a href="index.html">
                    <img src="img/logo.png" alt="Tienda de Té">
                </a>
            </div>
            
            <!-- Navegación -->
            <nav class="nav-menu">
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="nuestro-te.html">Nuestro Té</a></li>
                    <li><a href="tutoriales.html">Tutoriales</a></li>
                    <li><a href="nuestro-menu.html">Nuestro Menú</a></li>
                    <li><a href="trabaja-con-nosotros.html">Trabaja con Nosotros</a></li>
                    <li><a href="franquicias.html">Franquicias</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
            </nav>
            
            <div class="nav-line"></div>
        </div>
`;

const footer = `
    <div class="container-footer">
        <div class="footer-content">
            <div class="footer-logo">
                <a href="index.html">
                    <img src="img/logo.png" alt="Tienda de Café">
                </a>
            </div>
            
            <div class="footer-links">
                <div class="footer-column">
                    <h3>CONTENIDOS</h3>
                    <ul>
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="nuestro-te.html">Nuestro Café</a></li>
                        <li><a href="nuestro-menu.html">Nuestro menú</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h3>NECESITÁS AYUDA</h3>
                    <ul>
                        <li><a href="tutoriales.html">Tutoriales</a></li>
                        <li><a href="trabaja-con-nosotros.html">Trabajá en TDC</a></li>
                        <li><a href="franquicias.html">Franquicias</a></li>
                        <li><a href="contacto.html">Contacto</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h3>SUSCRIBITE A NUESTRO NEWSLETTER</h3>
                    <div class="newsletter">
                        <input type="email" placeholder="Tu email">
                        <button type="submit">SUSCRIBIRME</button>
                    </div>
                    <div class="social-connect">
                        <h4>CONECTATE CON NOSOTROS</h4>
                        <div class="social-icons-footer">
                            <a href="#" class="footer-social-icon" target="_blank">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="footer-social-icon" target="_blank">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© Copyright 2021 Tienda de Té - Todos los derechos reservados.</p>
            <p>Todos los logos, productos, marcas y nombres aquí utilizados son propiedad registrada.</p>
        </div>
    </div>
`;

const contHeader = document.getElementById('header');
const contFooter = document.getElementById('footer');

contHeader.innerHTML = header;
contFooter.innerHTML = footer;