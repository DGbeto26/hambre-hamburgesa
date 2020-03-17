"use strict";
//funcion Modal
var propBtn = {
    login: document.getElementById('login'),
    modalUser: document.getElementById('loginModal'),
    modalUserClose: document.getElementById('close'),
    btnLogin: document.getElementById('loginButton'),
};
var metBtn = {
    inicio: function () {
        propBtn.login.addEventListener('click', metBtn.modal);
        propBtn.modalUserClose.addEventListener('click', function () {
            propBtn.modalUser.style.display = "none";
        });
        propBtn.btnLogin.addEventListener('click', function () {
            propBtn.modalUser.style.display = "none";
        });
    },
    modal: function () {
        propBtn.modalUser.style.display = "block";
    }
};
metBtn.inicio();
//funcion Tooltips
var propTooltip = {
    verMenu: document.getElementById('btn-ver-menu'),
    toolTip: document.getElementsByClassName('tooltips')[0],
};
var metTooltip = {
    inicio2: function () {
        propTooltip.verMenu.addEventListener('click', metTooltip.aparecerTooltip);
    },
    aparecerTooltip: function () {
        propTooltip.toolTip.classList.toggle('tooltips-show');
    }
};
metTooltip.inicio2();
