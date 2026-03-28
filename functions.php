<?php
/**
 * Zenmo Law 阡陌律师事务所 - WordPress Theme Functions
 */

// ── 1. Enqueue Vite build assets via manifest.json ────────────────────────────
add_action('wp_enqueue_scripts', function () {
    $theme_uri     = get_template_directory_uri();
    $theme_dir     = get_template_directory();
    $manifest_file = $theme_dir . '/dist/.vite/manifest.json';

    if (!file_exists($manifest_file)) {
        return;
    }

    $manifest = json_decode(file_get_contents($manifest_file), true);
    if (!$manifest) {
        return;
    }

    // Find all entry chunks
    foreach ($manifest as $key => $chunk) {
        if (empty($chunk['isEntry'])) {
            continue;
        }

        // Enqueue CSS referenced by this entry
        if (!empty($chunk['css'])) {
            foreach ($chunk['css'] as $i => $css_path) {
                $abs = $theme_dir . '/dist/' . $css_path;
                wp_enqueue_style(
                    'zenmo-css-' . $i,
                    $theme_uri . '/dist/' . $css_path,
                    [],
                    file_exists($abs) ? filemtime($abs) : null
                );
            }
        }

        // Enqueue imported chunks first (vendor, motion, etc.)
        $chunk_deps = [];
        if (!empty($chunk['imports'])) {
            foreach ($chunk['imports'] as $i => $import_key) {
                if (empty($manifest[$import_key]['file'])) {
                    continue;
                }
                $handle  = 'zenmo-chunk-' . $i;
                $abs     = $theme_dir . '/dist/' . $manifest[$import_key]['file'];
                wp_enqueue_script(
                    $handle,
                    $theme_uri . '/dist/' . $manifest[$import_key]['file'],
                    [],
                    file_exists($abs) ? filemtime($abs) : null,
                    true
                );
                $chunk_deps[] = $handle;
            }
        }

        // Enqueue the main entry script
        $abs = $theme_dir . '/dist/' . $chunk['file'];
        wp_enqueue_script(
            'zenmo-main',
            $theme_uri . '/dist/' . $chunk['file'],
            $chunk_deps,
            file_exists($abs) ? filemtime($abs) : null,
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
