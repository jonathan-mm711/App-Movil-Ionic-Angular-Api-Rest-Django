from django.urls import path
from .views import VistaUsuario

urlpatterns =[
    path('usuarios/', VistaUsuario.as_view(), name='lista_usuarios'),
    path('usuarios/<int:idUsuario>', VistaUsuario.as_view(), name='proceso_usuarios')
]

