<?php

get_header();
?>

<main id="primary" class="site-main">
    <section class="banner hidden">
        <video class="banner_video" autoplay muted loop>
            <source src="<?php echo get_stylesheet_directory_uri() . '/assets/video/animation_homepage.mp4'; ?>" type="video/mp4" />
        </video>
        <img class="banner_logo" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
    </section>
    <section class="story hidden">
        <h2>
            <div class="animationTitle animatedElement">
                L'histoire
            </div>
        </h2>
        <article id="" class="story__article hidden">
            <p><?php echo get_theme_mod('story'); ?></p>
        </article>
        <?php
        get_template_part('template_parts/characters');
        ?>
        <article id="place" class="hidden">
            <div>
                <h3>
                    <div class="animationTitle animatedElement">
                        Le Lieu
                    </div>
                </h3>
                <p><?php echo get_theme_mod('place'); ?></p>
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/little_cloud.png'; ?> " alt="Little Cloud" class="little_cloud">
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/big_cloud.png'; ?>" alt="Big Cloud" class="big_cloud">
            </div>

        </article>
    </section>


    <section id="studio" class="hidden">
        <h2>
            <div class="animationTitle animatedElement">
                Studio Koukaki
            </div>
        </h2>
        <div>
            <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
            <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
        </div>
    </section>
</main><!-- #main -->

<?php
get_footer();
