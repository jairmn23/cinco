// JavaScript Document

$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		
		$('#izquierda').on ("swipeleft",function(){
			navigator.notification.alert("Deslizó a la izquierda",function(){"Apliacion5","Aceptar"});
		});//barrer izquierda
		
		$('#derecha').on ("swiperight",function(){
			navigator.notification.confirm("¿Que quieres hacer?",function(apt){
		switch(opt)
		{
		
		case 1:
		navigator.notification.beep(1);
		break;
		
		case 2:
		navigator.notification.vibrate(1000);
		break;
		}//switch opt
			},"Aplicacion5","beep,Vibrar,Cancelar");//confirm
		
		});//barrer derecha
	},false);//ready device
	})//document
		