from django.conf.urls import url,include
from django.contrib import admin
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^[a-z]*[0-9]*$', views.index,name='fplot-index'),
    url(r'^del_user$', views.del_user, name='fplot-del_user'),

]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
