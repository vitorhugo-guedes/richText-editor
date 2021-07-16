const editor = document.getElementById('editor');
const tools = document.querySelectorAll('.option');
const selectFontSize = document.getElementById('fontSize');

function load(){
    editor.document.designMode = 'On';
}

selectFontSize.addEventListener('change', ()=>{
    let option = selectFontSize.options[selectFontSize.selectedIndex];
    applyCommand('fontSize', option.value);
})

tools.forEach(btn => {
    let cmd = btn.dataset.command;
    btn.addEventListener('click', ()=>{
        applyCommand(cmd, null);
    })
});

function applyCommand(command, value){
    if(command === 'insertImage' || command === 'createLink'){
        let link = prompt('insert here:', 'http://');
        document.execCommand(command, false, link);
    }else{
        document.execCommand(command, false, value);
    }
    
}
