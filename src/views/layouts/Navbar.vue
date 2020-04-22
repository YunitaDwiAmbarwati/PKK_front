<template>
     <header class="header_area">
        <div class="main_menu">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <a class="navbar-brand logo_h" href="/"><img src="img/logo.png" alt="" height="67px"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul class="nav navbar-nav menu_nav justify-content-end">
                            <li class="nav-item active"><a class="nav-link" href="/">Profil</a></li>
                            <li class="nav-item"><a class="nav-link" href="/about">Tentang Kami </a></li>
                            <li class="nav-item submenu dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Layanan</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a class="nav-link" href="/cuci">Cuci</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/servis">Servis kendaraan</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/penggantian_aki">Penggantian accu</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/bantuan_darurat">Emergency</a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="/contact">Kontak  </a></li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>

export default {
  name: 'header',

}
</script>