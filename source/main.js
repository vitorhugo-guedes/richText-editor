//criar um wrapper para os selects e usar o foreach para reduzir as linhas de código e eventos necessários. adicionar window.getSelection().empty();
//Verificar se o comando heading é suportado, se não executar o comando formatBlock.

function load(){
    editor.document.designMode = 'On';
}

const editor = document.getElementById('editor');
const tools = document.querySelectorAll('.option');

const selectFontSize = document.getElementById('fontSize');
const selectFontTitles = document.getElementById('fontTitles');
const selectFontFamilies = document.getElementById('fontFamilies');


selectFontSize.addEventListener('change', ()=>{
    let fontSizeOption = selectFontSize.options[selectFontSize.selectedIndex];
    applyCommand('fontSize', fontSizeOption.value);
})

selectFontTitles.addEventListener('change', ()=>{
    let fontTitleOption = selectFontTitles.options[selectFontTitles.selectedIndex];
    applyCommand('formatBlock', fontTitleOption.value);
    
})

selectFontFamilies.addEventListener('change', () =>{
    let fontFamilyOption = selectFontFamilies.options[selectFontFamilies.selectedIndex];
    applyCommand('fontname', fontFamilyOption.value);
    
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
