<?php

get_header();
?>

<main id="primary" class="site-main">
    <section class="banner hidden appear fade-in-down">
        <video class="banner_video" autoplay muted loop>
            <source src="<?php echo get_stylesheet_directory_uri() . '/assets/video/animation_homepage.mp4'; ?>" type="video/mp4" />
        </video>
        <img class="banner_logo" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
    </section>
    <section class="story hidden" id="histoire">
        <h2>
            <div class="animatedElement effet_move-up">
                L'histoire
            </div>
        </h2>
        <article id="" class="story__article appear fade-in-up">
            <p><?php echo get_theme_mod('story'); ?></p>
        </article>
    </section>
    <section class="story hidden" id="personnages">
        <?php
        get_template_part('template_parts/characters');
        ?>
    </section>
    <section class="story hidden" id="lieu">
        <article id="place" class="hidden appear fade-in-up">
            <div>
                <h3>
                    <div class="animatedElement effet_move-up">
                        Le Lieu
                    </div>
                </h3>
                <p><?php echo get_theme_mod('place'); ?></p>
                <div class="cloud appear">
                    <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/little_cloud.png'; ?> " alt="Little Cloud" class="little_cloud">
                    <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/big_cloud.png'; ?>" alt="Big Cloud" class="big_cloud">
                </div>
            </div>
        </article>
    </section>
    <span id="studio"></span>
    <section class="hidden appear fade-in-down">
        <h2 class="studio">
            <div class="animatedElement effet_move-up">
                Studio Koukaki
            </div>
        </h2>
        <div>
            <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
            <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
        </div>
    </section>
    <?php
    get_template_part('template_parts/nomination_oscars');
    ?>
</main><!-- #main -->

<?php
get_footer();
