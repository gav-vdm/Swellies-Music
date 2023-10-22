// Replace {playlist_id} with the ID of the public playlist you want to retrieve
const playlistId = '37i9dQZF1DWYN9NBqvY7Tx';

$(document).ready(function() {
    $('#getPlaylistButton').click(function() {
        $.ajax({
            url: `https://api.spotify.com/v1/playlists/${playlistId}`,
            success: function(data) {
                // Display the playlist data in the #playlistData div
                $('#playlistData').html(JSON.stringify(data));
            },
            error: function(error) {
                console.error(error);
            }
        });
    });
});