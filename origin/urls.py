"""origin URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url,include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from graph import views

urlpatterns = [
    url(r'^$',views.default),
    url(r'^del_user$',views.del_user),
    url(r'^admin/', admin.site.urls),
    url(r'^graph/',include('graph.urls')),
    url(r'^ann/',include('ann.urls')),
    url(r'^fplot/',include('fplot.urls')),
    url(r'^pplot/', include('pplot.urls')),
    url(r'^reg/', include('reg.urls')),
    url(r'^plot3d/', include('plot3d.urls')),
    url(r'^analysis/', include('analysis.urls')),
    url(r'^mnist/', include('mnist.urls')),

              ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
