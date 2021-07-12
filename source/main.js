const editor = document.getElementById('editor');
const tools = document.querySelectorAll('.option');

function load(){
    window.document.designMode = 'on';
}

tools.forEach(btn => {
    let cmd = btn.dataset.command;
    btn.addEventListener('click', ()=>{
        applyCommand(cmd);
    })
});

function applyCommand(command){
    document.execCommand(command, false, null);
}