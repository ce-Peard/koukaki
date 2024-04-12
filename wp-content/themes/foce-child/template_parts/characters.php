<?php
            <div class="other-characters">
            <?php
            while ($characters_query->have_posts()) {
                $characters_query->the_post();
                echo '<figure>';
                echo get_the_post_thumbnail(get_the_ID(), 'full');
                echo '<figcaption>';
                the_title();
                echo '</figcaption>';
                echo '</figure>';
            }
            ?>
        </div>

//écrire une <div></div>

// <body>
//   <!-- Swiper -->
//   <div class="swiper mySwiper">
//     <div class="swiper-wrapper">
//       <div class="swiper-slide">Slide 1</div>
//       <div class="swiper-slide">Slide 2</div>
//       <div class="swiper-slide">Slide 3</div>
//       <div class="swiper-slide">Slide 4</div>
//       <div class="swiper-slide">Slide 5</div>
//       <div class="swiper-slide">Slide 6</div>
//       <div class="swiper-slide">Slide 7</div>
//       <div class="swiper-slide">Slide 8</div>
//       <div class="swiper-slide">Slide 9</div>
//     </div>
//     <div class="swiper-button-next"></div>
//     <div class="swiper-button-prev"></div>
//     <div class="swiper-pagination"></div>
//   </div>