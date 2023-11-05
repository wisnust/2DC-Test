<?php

// Local fonts
function enqueue_fonts() {
  wp_enqueue_style('roboto-light', get_template_directory_uri() . '/assets/fonts/roboto-light.woff', array(), '1.0');
  wp_enqueue_style('roboto-regular', get_template_directory_uri() . '/assets/fonts/roboto-regular.woff', array(), '1.0');
  wp_enqueue_style('roboto-medium', get_template_directory_uri() . '/assets/fonts/roboto-medium.woff', array(), '1.0');
  wp_enqueue_style('roboto-semibold', get_template_directory_uri() . '/assets/fonts/roboto-semibold.woff', array(), '1.0');
  wp_enqueue_style('roboto-bold', get_template_directory_uri() . '/assets/fonts/roboto-bold.woff', array(), '1.0');
  wp_enqueue_style('roboto-extrabold', get_template_directory_uri() . '/assets/fonts/roboto-extrabold.woff', array(), '1.0');
}

add_action('wp_enqueue_scripts', 'enqueue_fonts');

// Google Fonts
function enqueue_google_fonts() {
	wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap', array(), null);
}
add_action('wp_enqueue_scripts', 'enqueue_google_fonts');