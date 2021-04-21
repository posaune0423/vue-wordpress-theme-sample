<?php

// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown
function remove_redirects()
{
	add_rewrite_rule('^/(.+)/?', 'index.php', 'top');
}
add_action('init', 'remove_redirects');

// Load scripts
function load_vue_scripts()
{
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-js',
		get_stylesheet_directory_uri() . '/dist/js/index.js',
		array('jquery'),
		filemtime(get_stylesheet_directory() . '/dist/js/index.js'),
		true
	);

	wp_enqueue_style(
		'vuejs-wordpress-theme-starter-css',
		get_stylesheet_directory_uri() . '/dist/style.css',
		null,
		filemtime(get_stylesheet_directory() . '/dist/style.css')
	);
}
add_action('wp_enqueue_scripts', 'load_vue_scripts', 100);
