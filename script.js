$(document).ready(function() {
    // Load home page by default
    loadPage('home');

    // Handle navigation clicks
    $('nav a').on('click', function(e) {
        e.preventDefault();
        var page = $(this).data('page');
        loadPage(page);
    });

    function loadPage(page) {
        $.ajax({
            url: page + '.html',
            method: 'GET',
            success: function(data) {
                $('#content').html(data);
                history.pushState(null, '', '/quiz1/' + (page === 'home' ? '' : page));
            },
            error: function() {
                $('#content').html('<p>Error loading page.</p>');
            }
        });
    }
});
