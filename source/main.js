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
    if(command === 'insertImage' || command === 'createLink'){
        let value = prompt('insert here:', 'http://');
        document.execCommand(command, false, value);
    }else{
        document.execCommand(command, false, null);
    }
    
}