from django.db import models

# Create your models here.

class Usuario(models.Model):
    idUsuario=models.AutoField(primary_key=True, verbose_name='Id')
    correo = models.CharField(max_length=50, verbose_name="Correo")
    contrasena = models.CharField(max_length=50, verbose_name="Contraseña")