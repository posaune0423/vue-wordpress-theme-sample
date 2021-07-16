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

    // wp_enqueue_style(
    //     'vuejs-wordpress-theme-starter-css',
    //     get_stylesheet_directory_uri() . '/dist/style.css',
    //     null,
    //     filemtime(get_stylesheet_directory() . '/dist/style.css')
    // );
}
add_action('wp_enqueue_scripts', 'load_vue_scripts', 100);


// Enable Featured Image
add_theme_support('post-thumbnails');


function add_thumbnail_to_JSON()
{
    //Add featured image
    register_rest_field(
        'post',
        'featured_image', //NAME OF THE NEW FIELD TO BE ADDED - you can call this anything
        array(
            'get_callback' => 'get_image',
            'update_callback' => null,
            'schema' => null,
        )
    );
}
function get_image($object, $field_name, $request)
{
    $feat_img_array = wp_get_attachment_image_src($object['featured_media'], 'large', true);
    return [
        'src' => $feat_img_array[0],
        'width' => $feat_img_array[1],
        'height' => $feat_img_array[2],
    ];
}
add_action('rest_api_init', 'add_thumbnail_to_JSON');


// Add List of Category name
// category_name: [
//     "Defi",
//     "Uncategorized",
//     "Category 1",
//     "Category 2"
//     ],
if (!function_exists('register_rest_category_name')) {
    function register_rest_category_name()
    {
        register_rest_field(
            'post',
            'category_name',
            array(
                'get_callback' => 'get_category_name'
            )
        );
    }
    function get_category_name($object)
    {
        if (!empty($object['categories'])) {
            return array_column(get_the_category($object['id']), 'name');
        } else {
            return null;
        }
    }
}
add_action('rest_api_init', 'register_rest_category_name');


// Format Date
// Default : date: "2021-07-16T17:48:46",
// Changed to : date: "July 16, 2021",
if (!function_exists('register_rest_format_date')) {
    function register_rest_format_date()
    {
        register_rest_field(
            'post',
            'date',
            array(
                'get_callback' => 'get_format_date'
            )
        );
    }
    function get_format_date($object)
    {
        $date = get_the_date('F j, Y', $object['id']);
        return $date;
    }
}
add_action('rest_api_init', 'register_rest_format_date');
