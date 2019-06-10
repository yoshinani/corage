<template>
  <section class="hero is-primary">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img
                src="https://bulma.io/images/bulma-type-white.png"
                alt="Logo"
              />
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHero2">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHero2" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item is-active">
                Home
              </a>
              <a class="navbar-item">
                Examples
              </a>
              <a class="navbar-item">
                Documentation
              </a>
              <div class="navbar-item has-dropdown is-hoverable">
                <div class="navbar-link">
                  More
                </div>
                <div id="moreDropdown" class="navbar-dropdown ">
                  <a class="navbar-item " href="#">
                    <div class="level is-mobile">
                      <div class="level-left">
                        <div class="level-item">
                          <p>
                            <strong>Extensions</strong>
                            <br />
                            <small>Side projects to enhance Bulma</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <span class="navbar-item">
                <a class="button is-primary is-inverted">
                  <span class="icon">
                    <i class="fa fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>
