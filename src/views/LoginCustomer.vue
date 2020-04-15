<template>
    <div class="container-fluid page-body-wrapper">
        <section class="features_area">
        <div class="login-container">
            <div class="login-box">
                <div class="header">
                    <h3>PENJUAL</h3>
                </div>
                <div class="content">
                    <form action="#" method="#" name="login_form">
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </div>
                                <input name="username" id="username" class="form-control" placeholder="Username or Email" type="text" required="">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fas fa-lock"></i>
                                    </span>
                                </div>
                                <input class="form-control" name="password" id="password" placeholder="Password" type="password" required="">
                            </div>
                        </div>
                        <!-- <div class="input-box"><input name="username" id="username" class="form-control" placeholder="Username or Email" type="text" required=""></div>
                    <div class="input-box"><input class="form-control" name="password" id="password" placeholder="Password" type="password" required=""></div> -->

                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block" id="button1">Masuk</button>
                        </div>
                        <div class="text-center">
                            <p>Belum memiliki akun ?
                                <a href="register_customer.html" class="nav-link text nav-items">Klik Disini !</a>
                            </p>
                        </div>

                        <!-- <div class="input-box"><button>MASUK</button>
                        <div><a href="register_customer.html">Belum memiliki akun?</a></div>
                    </div> -->

                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>