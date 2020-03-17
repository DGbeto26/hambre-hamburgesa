//funcion Modal

let propBtn = {
    login : (<HTMLElement>document.getElementById('login')),
    modalUser : (<HTMLElement>document.getElementById('loginModal')),
    modalUserClose : (<HTMLElement>document.getElementById('close')),
    btnLogin : (<HTMLElement>document.getElementById('loginButton')),
}

let metBtn = {
    inicio : function(){
        propBtn.login.addEventListener('click', metBtn.modal);
        propBtn.modalUserClose.addEventListener('click', function(){
            propBtn.modalUser.style.display = "none"
        });
        propBtn.btnLogin.addEventListener('click', function(){
            propBtn.modalUser.style.display = "none"
        });
    },

    modal : function(){
        propBtn.modalUser.style.display = "block"
    }
}

metBtn.inicio();

//funcion Tooltips

let propTooltip = {
    verMenu : (<HTMLElement>document.getElementById('btn-ver-menu')),
    toolTip: (<HTMLElement>document.getElementsByClassName('tooltips')[0]),
}

let metTooltip = {
    inicio2 : function(){
        propTooltip.verMenu.addEventListener('click', metTooltip.aparecerTooltip)
    },

    aparecerTooltip : function(){
        propTooltip.toolTip.classList.toggle('tooltips-show')
    }
}

metTooltip.inicio2();


