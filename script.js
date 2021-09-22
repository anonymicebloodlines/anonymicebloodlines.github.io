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
            wrap = '🔥🔥';
            if (requested_id == 7767) {
                wrap = '🙏🙏'
            }
            $('#header').text(`${wrap} BLOODLINE FOR #${requested_id} ${wrap}`);
            for (const id of ids) {
                $('#micetrap').append( `<div style="max-width:25%;display:inline-block;"><img style="position:relative" id=${id} src="https://raw.githubusercontent.com/jozanza/anonymice-images/main/${id}.png"><p id=p${id}>${id}</p></div>`);
            }
            $(`#${requested_id}`).css({'animation-name': 'cf3FadeInOut','animation-timing-function': 'ease-in-out','animation-iteration-count': 'infinite','animation-duration': '.5s','animation-direction': 'alternate'});
            $(`#p${requested_id}`).css('background-color', 'red');
        }
        catch {
            $('#header').text(`🐭🐭ANONYMICE BLOODLINES🐭🐭`);
            $('#micetrap').append(`<div style="margin:auto;width:100%;text-align:center"><h1>⚠️: The ID you entered (${requested_id}) was not part of a burn chain!</h1></div>`)
        }
    });
} 

function loadHome() {
    $('#header').text(`🐭🐭ANONYMICE BLOODLINES🐭🐭`);
    $('#micetrap').html('');
    let quicklinks = `<div id="quicklinks">
                        <div class="item">
                            <img src="https://raw.githubusercontent.com/jozanza/anonymice-images/main/6048.png" onclick="loadChain('6048')"/>
                            <!-- <br><span class="caption">Longest</span><br> --><br>
                            <span class="emoji">🥇</span>
                        </div>
                        <div class="item">
                            <img src="https://raw.githubusercontent.com/jozanza/anonymice-images/main/3282.png" onclick="loadChain('3282')"/>
                            <!-- <br></vr><span class="caption">2nd Longest</span><br> --><br>
                            <span class="emoji">🥈</span>
                        </div>
                        <div class="item">
                            <img src="https://raw.githubusercontent.com/jozanza/anonymice-images/main/6848.png" onclick="loadChain('6848')"/>
                            <!-- <br><span class="caption">3rd Longest</span><br> --><br>
                            <span class="emoji">🥉</span>
                        </div>
                        <div class="item">
                            <img src="https://raw.githubusercontent.com/jozanza/anonymice-images/main/7767.png" onclick="loadChain('7767')"/>
                            <!-- <br><span class="caption">7767</span><br> --><br>
                            <span class="emoji">🙏</span>
                        </div>
                    </div>`
    $('#micetrap').html(quicklinks);
}
