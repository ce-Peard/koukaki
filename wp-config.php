<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'koukaki' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '%^cy*DR`QPtr?Y-!IF&nl^Z9Ag))E<wm,/QJz=N6/M-S ?/y+Ek${Lv9xi~9JmX|' );
define( 'SECURE_AUTH_KEY',  'S.L}[Y&`D;TN7kWk(XgORnOwyXuD^A{ -O$&95uiqpKE[adJ4^8;LCVo{0*8Z<!W' );
define( 'LOGGED_IN_KEY',    '4UDW~JI7B-8(VrBa/wOMW0Grq%f=_>unc2A:B}oN_ys:=*e&l/;+(an10XQ<o+ow' );
define( 'NONCE_KEY',        '!4hqLeC+K8O!+/6.Xu5=45fALeU!H#Aru^}I&k>;5pxpxb@WAjw0Cu??h[O/tRhY' );
define( 'AUTH_SALT',        '_96o hLG9Ave,|hqj6{cRhpf0_wy6?5?ZZAQg1}2FtNo?M3,;;%=P]~GKyYz`l`#' );
define( 'SECURE_AUTH_SALT', ']bm<:h; 46[++zc>;FxJyM_77%mTb<$l51;b}Js~s6_.(SdEOt2Kf!H{WSFsD2>K' );
define( 'LOGGED_IN_SALT',   '>M#zYsQ]s,$RG5RH_|1 Fnr9S1R@|I}o7B*67J]BNP[`ucH$+men`H`dzN[>`TyI' );
define( 'NONCE_SALT',       '|MPdI;Q_=p d]}NV!,>Nm4-rUR$m[IAh_6.p2Ae%sx~|QQu?9*o?.iNGjf+Ky[$!' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
