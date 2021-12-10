$(document).ready(function() {
    function GetURLParameter(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) 
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    }

    var videoLocation = 'original/' + GetURLParameter('option');
    console.log(videoLocation);

    $('.topic').html(GetURLParameter('option').slice(2,-4));

    // get video tag and src
    var videoSource = $('#original-videoSource');
    var video = $('#original-video');
    console.log(video);
    console.log(videoSource);

    // set video source and play
    videoSource.attr('src', videoLocation);
    console.log(videoSource.attr('src'));
    $("#original-video")[0].load();
    $("#original-video")[0].play();

    /**********************************************************************************************/

    var videoLocation = 'animation/' + GetURLParameter('option');
    console.log(videoLocation);

    // get video tag and src
    var videoSource = $('#videoSource');
    var video = $('#video');
    console.log(video);
    console.log(videoSource);

    // set video source and play
    videoSource.attr('src', videoLocation);
    console.log(videoSource.attr('src'));
    $("#video")[0].load();
    $("#video")[0].play();
});