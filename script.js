function loadChain(requested_id, random=false) {
    $('#micetrap').html('');
    $.getJSON('https://raw.githubusercontent.com/saintmaxi/anonymice/main/ids_to_chains.json', function(data) {
        try {
            if (random == true) {
                let keys = Object.keys(data);
                let max = keys.length -1
                requested_id = keys[Math.floor(Math.random() * max)];
            }
            let ids = data[requested_id];
            $('#header').text(`🔥🔥 BLOODLINE FOR #${requested_id} 🔥🔥`);
            for (const id of ids) {
                $('#micetrap').append( `<div style="max-width:25%;display:inline-block;"><img style="position:relative" id=${id} src="https://raw.githubusercontent.com/jozanza/anonymice-images/main/${id}.png"><p id=p${id}>${id}</p></div>`);
            }
            $(`#${requested_id}`).css({'animation-name': 'cf3FadeInOut','animation-timing-function': 'ease-in-out','animation-iteration-count': 'infinite','animation-duration': '.5s','animation-direction': 'alternate'});
            $(`#p${requested_id}`).css('background-color', 'red');
        }
        catch {
            $('#header').text(`🔥🔥 ANONYMICE BLOODLINES 🔥🔥`);
            $('#micetrap').append(`<div style="margin:auto;width:100%;text-align:center"><h1>⚠️: The ID you entered (${requested_id}) was not part of a burn chain!</h1></div>`)
        }
    });
}