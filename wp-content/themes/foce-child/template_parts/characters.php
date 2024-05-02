<?php
$args = array(
    'post_type' => 'characters',
    'posts_per_page' => -1,
    'meta_key'  => '_main_char_field',
    'orderby'   => 'meta_value_num',
);
$characters_query = new WP_Query($args);
?>

<article id="characters" class="hidden appear fade-in-down">
    <h3>
        <div class="characters__title effet_move-up">Les personnages</div>
    </h3>
    <!-- Slider main container -->
    <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <?php
            while ($characters_query->have_posts()) {
                $characters_query->the_post(); ?>
                <div class="swiper-slide">
                    <figure>
                        <?php echo get_the_post_thumbnail(get_the_ID(), 'full'); ?>
                        <figcaption>
                            <?php echo the_title(); ?>
                        </figcaption>
                    </figure>
                </div>
            <?php };
            ?>
        </div>
    </div>
</article>