<?php
/**
 * Plugin Name:       Team Members
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       team-members
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function team_member_team_member_block_init() {
	register_block_type( __DIR__ . '/build/team-members' );
}
add_action( 'init', 'team_member_team_member_block_init' );

function enqueue_google_fonts() {
	wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap', array(), null);
}
add_action('wp_enqueue_scripts', 'enqueue_google_fonts');