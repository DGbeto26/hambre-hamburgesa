import {getUsers} from './user';

export default function(){

    if(localStorage.username){
        document.getElementById('login')!.innerHTML = `<span style="font-size:15px">Hola, ${getUsers()[0].username}</span>`;

        document.getElementById('perfil')!.style.display = 'block';
        document.getElementById('menu')!.style.display = 'block';

        //Cerrar sesion
        $('#cerrarSesion').on('click', function(e){
            e.preventDefault();
            localStorage.clear();
            window.location.reload();
        })
    }

}