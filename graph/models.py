from django.db import models

class Document(models.Model):
    name=models.CharField(default='',max_length=150),

    def __str__(self):
        return self.name+" "


class Image(models.Model):
    name=models.CharField(max_length=255,default=''),

    def __str__(self):
        return self.name+" "
