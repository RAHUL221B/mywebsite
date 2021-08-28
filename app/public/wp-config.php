<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'IBLRNETlW1ARCzmgI+cN5+oHdxxbNfBaSKOHB9d2Py4nQuTKhESztuIOK1X7cTgw1y4RMQvp3G1I/v92SbMehg==');
define('SECURE_AUTH_KEY',  'an4ZVduvaAy432Cziys0OfTewiXDwGumqJZe/gJClVz9wCAk79xQ5vaNrDdYn3CfNMtpie7nyApRoTGAcw8gSA==');
define('LOGGED_IN_KEY',    '6b61g5/Rqgcn3sOnajjmTWp6jvuG7zOtDkPQEzEL7JE0BJpqwowWI0zXdsDe39vtLWGKpyBZxz0c29KZtYgM6g==');
define('NONCE_KEY',        'k+WFTKINbndwp/gZTnzkMx7VcRqKjVueq4i+NbR779MCbYJnxqjllhNu4L8SjSBLpXO4SeJk+dITefLGvNMVnA==');
define('AUTH_SALT',        'oJh5dZ+eo9uj313XdTpkV4UmmQI/hubb2/+cealKVRqDqD8stbV6csW3ZK5VXaH5bXaMn598fIW4zONP0Xibcg==');
define('SECURE_AUTH_SALT', 'S7Xnbn0Sg8+RTL36YbZsBefTetFJNWyTjIRkC89pcg+hWBtoL4DaPXQeA2BPaQ2CmhlGvgJaHLUHo9dzFsk04w==');
define('LOGGED_IN_SALT',   '5IsYhv0RuljSm+1qjd0iw6mz/vX00VXUpqnt2pmjlmMDbrmo5lyhsr8H7dQCTvAq4bXDk1bz93wupwWhwHj9Wg==');
define('NONCE_SALT',       'fKZBC4G28aFm87GOFHnHpyBAnOG9JXYWzS/I0qoksezAiVyQ3MDNcaAo1DqrncnAQvX9MwCX944a+c8VWXklZg==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
