from django.conf.urls import url,include
from django.contrib import admin
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^$', views.index,name='graph-index'),
    url(r'^([?][a-z]{3}[=][0-9]{1})/$', views.index,name='graph-index'),
    url(r'^curvefit$',views.curveFit,name='Curve-FIt'),
    url(r'^contour$', views.contour, name='Contour'),
    url(r'^linefit$', views.lineFit, name='Line-FIt'),
    url(r'^bar$', views.barplot, name='Bar-Plot'),
    url(r'^pie$', views.pieplot, name='Pie-Plot'),
    url(r'^interpolation$', views.interpolation, name='Interpolation'),
    url(r'^clustering$', views.clustering, name='Clustering'),
    url(r'^histogram$', views.histogram, name='Histogram'),
    url(r'^save_data$', views.save_data, name='save_data'),

    url(r'^del_user$', views.del_user, name='del_user')

]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
