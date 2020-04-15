<template>
    <div class="container-fluid page-body-wrapper">
        <section class="features_area">
        <div class="login-container">
            <div class="login-box">
                <div class="header">
                    <h3>CUSTOMER</h3>
                </div>
                <div class="content"><form action="#" method="#" name="login_form">
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-user"></i></span>
                            </div>
                            <input name="nama" id="nama" class="form-control" placeholder="Nama Lengkap" type="text" required="">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fas fa-envelope"></i> </span>
                            </div>
                            <input name="username" id="username" class="form-control" placeholder="Username or Email" type="text" required="">
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"> <i class="fas fa-phone"></i> </span>
                            </div>
                            <input class="form-control" name="kontak" id="kontak" placeholder="Kontak" type="text">
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-lock"></i></span>
                            </div>
                        <input class="form-control" name="password" id="password" placeholder="Password" type="password" required="">
                        </div>
                    </div>

                    <!-- <div class="input-box"><input name="username" id="username" class="form-control" placeholder="Username or Email" type="text" required=""></div>
                    <div class="input-box"><input class="form-control" name="password" id="password" placeholder="Password" type="password" required=""></div> -->

                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block" id="button1">Daftar</button>
                    </div>
                    <div class="text-center">
                        <p>Sudah memiliki akun ? <a href="login_customer.html" class="nav-link text nav-items">Klik Disini !</a></p>
                    </div>

                    <!-- <div class="input-box"><button>DAFTAR</button>
                        <div><a href="login_customer.html">Sudah memiliki akun?</a></div>
                    </div> -->

                </form></div>
            </div>
        </div>
    </section>
    </div>
</template>