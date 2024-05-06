class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container-fluid">
                <div class="container">
                    <div class="background-container">
                        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                                <div class="logo-container">
                                    <img class="logo" src="./Images/logo.png" alt="Logo" width="16%">
                                </div>
                            </a>
                            <div class="header-list">
                                <ul class="nav nav-pills">
                                    <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
                                    <li class="nav-item"><a href="About Me.html" class="nav-link">About Me</a></li>
                                    <li class="nav-item"><a href="Gallery.html" class="nav-link">Gallery</a></li>
                                    <li class="nav-item"><a href="Packages.html" class="nav-link">Packages</a></li>
                                    <li class="nav-item"><a href="Contact Us.html" class="nav-link">Contact</a></li>
                                </ul>                 
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        `;
    }
}
        
customElements.define('my-header', MyHeader);


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="footer">
                <div class="container">
                    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <div class="col-md-4 d-flex align-items-center">
                            <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                                <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
                            </a>
                            <span class="mb-3 mb-md-0 text-body-secondary">© Photography by Neera</span>
                        </div>
                    
                        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                            <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
                            <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
                            <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
                        </ul>
                    </footer>
                </div>
            </div>
        `;
    }
}

customElements.define('my-footer', MyFooter);
