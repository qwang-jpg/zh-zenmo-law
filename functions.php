<?php
/**
 * Zenmo Law 阡陌律师事务所 - WordPress Theme Functions
 */

// ── 1. Enqueue Vite build assets ──────────────────────────────────────────────
add_action('wp_enqueue_scripts', function () {
    $theme_uri  = get_template_directory_uri();
    $theme_dir  = get_template_directory();
    $assets_dir = $theme_dir . '/dist/assets';

    if (!is_dir($assets_dir)) {
        return;
    }

    // Find CSS files
    $css_files = glob($assets_dir . '/*.css');
    if ($css_files) {
        foreach ($css_files as $i => $file) {
            $filename = basename($file);
            wp_enqueue_style(
                'zenmo-css-' . $i,
                $theme_uri . '/dist/assets/' . $filename,
                [],
                filemtime($file)
            );
        }
    }

    // Find JS files — load vendor/motion chunks first, then main entry last
    $js_files = glob($assets_dir . '/*.js');
    if (!$js_files) return;

    $chunks = [];
    $main   = null;

    foreach ($js_files as $file) {
        $filename = basename($file);
        if (strpos($filename, 'vendor') !== false || strpos($filename, 'motion') !== false) {
            $chunks[] = $file;
        } else {
            // The largest non-vendor file is likely the main entry
            if ($main === null || filesize($file) > filesize($main)) {
                if ($main !== null) $chunks[] = $main;
                $main = $file;
            } else {
                $chunks[] = $file;
            }
        }
    }

    foreach ($chunks as $i => $file) {
        $filename = basename($file);
        wp_enqueue_script(
            'zenmo-chunk-' . $i,
            $theme_uri . '/dist/assets/' . $filename,
            [],
            filemtime($file),
            true
        );
    }

    if ($main) {
        $filename = basename($main);
        wp_enqueue_script(
            'zenmo-main',
            $theme_uri . '/dist/assets/' . $filename,
            array_map(fn($i) => 'zenmo-chunk-' . $i, array_keys($chunks)),
            filemtime($main),
            true
        );
    }
});

// ── 2. Add type="module" to zenmo script tags ─────────────────────────────────
add_filter('script_loader_tag', function ($tag, $handle, $src) {
    if (strpos($handle, 'zenmo-') === 0) {
        return '<script type="module" src="' . esc_url($src) . '"></script>' . "\n";
    }
    return $tag;
}, 10, 3);

// ── 3. SPA routing — serve index.php for all frontend routes ──────────────────
add_action('template_redirect', function () {
    if (is_admin()) return;
    include get_template_directory() . '/index.php';
    exit;
});

// ── 4. Theme support ──────────────────────────────────────────────────────────
add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('html5', ['script', 'style']);
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
});
