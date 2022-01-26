<?php

/**
 * Plugin Name: Simple text
 * Description: A block to insert a Simple text
 * Version:     0.1.0
 * Author:      Maxim Gysev
 * Author URI:  https://mak4ic.ru
 */

add_action('init', function () {

    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

    wp_register_script(
        'simpletext-block-script',
        plugins_url('build/index.js', __FILE__),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    register_block_type('maxim/simpletext-block', array(
        'editor_script' => 'simpletext-block-script',
    ));
});

/*
add_action('wp_head', 'css');

function css()
{
?>
    <style>

    </style>
<?php
}
*/