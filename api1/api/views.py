from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

from django.http.response import JsonResponse
from django.shortcuts import render
from django.views import View
from .models import Usuario
import json

# Create your views here.
class VistaUsuario(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request,idUsuario=0):
        if(idUsuario>0):
            usuarios=list(Usuario.objects.filter(idUsuario=idUsuario).values())
            if len(usuarios)>0:
                usuario = usuarios[0]
                datos={'message':"Success",'usuario':usuario}
            else:
                datos={'message':"Usuario no encontrado"}
            return JsonResponse(datos)
        else:
            usuarios = list(Usuario.objects.values())
            if len(usuarios) > 0:
                datos={'message':"Success",'usuarios':usuarios}
            else:
                datos={'message':"Usuarios no encontrados"}
            return JsonResponse(datos)

    def post(self, request):
        #transformar json a diccionario python
        jd=json.loads(request.body)
        
        #filtra por correo, si el correo no existe, es una lista vacía
        usuarioBD = list(Usuario.objects.filter(correo=jd['correo']).values())

        if(jd['tipo'] == "login"):
            #si el correo no existe, esto previene crash por usar un indice en una lista sin contenidos
            if(len(usuarioBD)>0):
                if(usuarioBD[0]['correo'] == jd['correo'] and usuarioBD[0]['contrasena'] == jd['contrasena'] ):
                    datos={'message':"login_verificado"}
                    return JsonResponse(datos)
            datos={'message': 'usuario o contraseña incorrectos'}
            return JsonResponse(datos)

        if(jd['tipo'] == "crear"):
            Usuario.objects.create(correo=jd['correo'],contrasena=jd['contrasena'])
            datos={'message': 'usuario creado'}
            return JsonResponse(datos)

        datos={'message': 'no entró a un if'}
        return JsonResponse(datos)
        

    def put(self, request, idUsuario):
        jd = json.loads(request.body)
        usuarios=list(Usuario.objects.filter(idUsuario=idUsuario).values())
        if len(usuarios)>0:
            usuario=Usuario.objects.get(idUsuario = idUsuario)
            usuario.correo = jd['correo']
            usuario.contrasena = jd['contrasena']
            usuario.save()
            datos={'message':"Success"}
        else:
            datos={'message':"Usuario no encontrado"}
        return JsonResponse(datos)

    def delete(self, request, idUsuario):
        usuarios=list(Usuario.objects.filter(idUsuario=idUsuario).values())
        if len(usuarios) > 0:
            Usuario.objects.filter(idUsuario=idUsuario).delete()
            datos={'message':"Success"}
        else:
            datos={'message':"Usuario no encontrado"}
        return JsonResponse(datos)