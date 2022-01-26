<?php

/**
 * Plugin Name: QRCode Time
 * Description: A block to insert a Qrcode time
 * Version:     0.1.0
 * Author:      Maxim Gysev
 * Author URI:  https://mak4ic.ru
 */

add_action('init', function () {

	$asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

	wp_register_script(
		'maxim-qrtime-block-script',
		plugins_url('build/index.js', __FILE__),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_register_script(
		'maxim-qrtime-qrcodejs',
		plugins_url('qrcode.min.js', __FILE__),
	);


	register_block_type('maxim/qrtime-block', array(
		'editor_script' => 'maxim-qrtime-block-script',
	));
});

add_action('wp_enqueue_scripts', function () {
	wp_enqueue_script('maxim-qrtime-qrcodejs');

	wp_enqueue_script(
		'maxim-qrtime-trigger',
		plugins_url('trigger.js', __FILE__),
		array('maxim-qrtime-qrcodejs'),
		filemtime(plugin_dir_path(__FILE__) . 'trigger.js'),
		true // in footer
	);
});

add_action('admin_enqueue_scripts', function () {
	wp_enqueue_script('maxim-qrtime-qrcodejs');
});

add_action('wp_head', 'css');

function css()
{
?>
	<style>
		#qrСode {
			position: relative;
			margin: 20px auto 0;
		}

		#qrOne,
		#qrTwo {
			position: absolute;
			top: 0;
		}

		#qrOne {
			opacity: 1;
		}

		#qrTwo {
			opacity: 0;
		}

		#qrTime {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 1.8em;
			position: absolute;
			top: 0;
		}
	</style>
<?php
}
