from django.conf.urls import url,include
from django.contrib import admin
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^$', views.index,name='mnist-index'),
    url(r'^([?][a-z]{3}[=][0-9]{1})/$', views.index,name='mnist-index'),

                  url(r'^save_image$', views.save_image, name='save_image'),

                  url(r'^del_user$', views.del_user, name='del_user'),

              ]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
