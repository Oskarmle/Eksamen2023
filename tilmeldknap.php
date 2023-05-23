function hide_element_for_logged_in_users() {
    if (is_user_logged_in()) {
        echo '<style>.login-knap-forsvind { display: none; }</style>';
    }
}
add_action('wp_head', 'hide_element_for_logged_in_users');