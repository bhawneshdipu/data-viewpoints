from django.shortcuts import render,render_to_response,redirect
from graph.forms import DocumentForm
from django.template import RequestContext
from django.core.files.storage import FileSystemStorage
import  os
import openpyxl
from openpyxl import  Workbook
from origin import settings
from graph.forms import DocumentForm
from graph.models import Document,Image
from django.core.files import File
from matplotlib import pyplot as plt
import numpy as np
from scipy import linspace, polyval, polyfit, sqrt, stats
from scipy.optimize import curve_fit
import matplotlib.mlab as mlab
from scipy.interpolate import  interp1d
# Create your views here.
from django.http import HttpResponse,HttpResponseRedirect,HttpRequest
import  pandas as pd
from django.views.decorators.csrf import csrf_exempt
import shutil
from bokeh.plotting import figure, output_file, show
from bokeh.resources import CDN
from bokeh.embed import components
from bokeh.embed import autoload_static
import datetime,time
import glob
from scipy import arange
from matplotlib import animation
from math import sqrt,sin,cos,asin,acos,atan,tan,tanh,asinh,acosh,pow,sinh,cosh,tanh,log,log10,exp


@csrf_exempt
def del_user(request):
    request.session.set_test_cookie()
    ddata = 0
    tabled = 0
    plotgraph = 0
    username='not a valid user'
    logintime=0
    if 'user_name' in request.COOKIES:
        username=request.COOKIES.get('user_name')
    if 'login_time' in request.COOKIES:
        logintime=request.COOKIES.get('login_time')

    pathi='pplot/static/img/'+username+'*.*'
    pathf = 'pplot/static/xlsx/' + username + str(logintime) + '*.*'

    for hgx in glob.glob(pathi):
        os.remove(hgx)
    for hgx in glob.glob(pathf):
        os.remove(hgx)

    if request.session.test_cookie_worked():
        request.session.delete_test_cookie()
        response = HttpResponse("Bye")
        response.delete_cookie('user_name')
        response.delete_cookie('login_time')
        return  response
    else:
        return HttpResponse("Sorry")




def cubrt(x):
    if 0 <= x:
        return x ** (1. / 3.)
    else:
        return -(-x) ** (1. / 3.)

@csrf_exempt
def index(request):
    # print(div_tag,div_script)
    username = 'InvalidUser'
    logintime = '0'

    if 'user_name' in request.COOKIES:
        username=request.COOKIES['user_name']
    else:
        return redirect('./../?usr=0',request)

    if 'user_name' in request.COOKIES:
        username = request.COOKIES['user_name']
    if 'login_time' in request.COOKIES:
        logintime = request.COOKIES['login_time']

    if request.method!='POST':
        print('not post')
        return render(request,'pindex.html',locals())





    if request.method=='POST':
        print('post')

        count=int(request.POST.get('count'))
        tl=int(request.POST.get('tl'))
        tr = int(request.POST.get('tr'))

        print(tl)
        print(tr)

        fig = plt.figure(figsize=(7,7))
        ax = fig.add_subplot(111)

        fig.subplots_adjust(top=0.85)
        plt.grid(True)
        TOOLS='box_select,resize,reset,pan,tap,wheel_zoom,save,hover'
        bplot = figure( plot_width=640, plot_height=480,tools=TOOLS,toolbar_location='above')

        print(count)

        x=[]
        y=[]

        name=[]
        color=[]
        contourplot=[]
        arr=[0]*count

        print(arr)

        for i in arange(1,count+1):
            tempxr='resultx'+str(i)
            tempxo='outputx'+str(i)

            tempyr = 'resulty' + str(i)
            tempyo = 'outputy' + str(i)

            tempc='color'+str(i)

            resultx=str(request.POST.get(tempxr))
            resulty = str(request.POST.get(tempyr))

            funx=request.POST.get(tempxo)
            funy= request.POST.get(tempyo)

            color.append(request.POST.get(tempc))

            print(funx)
            print(funy)

            print(request.POST.get(tempc))

            print(resultx)
            print(resulty)

            print(tempc)

            name.append('x:'+(funx)+';\ny:'+funy)


            funcx = lambda t: eval(resultx)
            funcy = lambda t: eval(resulty)
            t=np.arange(tl,tr,0.1)
            a=funcx(t)
            b=funcy(t)
            x.append(a)
            y.append(b)
        ddata = []
        k=0
        for i in range(0,len(x)):
                plt.plot(x[i], y[i], marker='.', markersize=2, alpha=1, color=color[i], label=name[i])
                bplot.line(x[i], y[i], color=color[i], legend=name[i])

        plt.legend(loc=0)
        fig1 = plt.gcf()

        if (FileSystemStorage('pplot/static/img/').exists(username + logintime + '.png')):
           os.remove('pplot/static/img/' + username + logintime + 'pplot.png')

        fig1.savefig('pplot/static/img/' + username + logintime + 'pplot.png', dpi=200)
        fig1.savefig('pplot/static/img/' + username + logintime + 'pplot.jpg', dpi=200)
        fig1.savefig('pplot/static/img/' + username + logintime + 'pplot.eps', dpi=200)
        fig1.savefig('pplot/static/img/' + username + logintime + 'pplot.pdf', dpi=200)
        fig1.savefig('pplot/static/img/' + username + logintime + 'pplot.svg', dpi=200)
        fig1.savefig('pplot/static/img/' + username + logintime + 'pplot.tiff', dpi=200)
        fig1.savefig('pplot/static/img/' + username + logintime + 'pplot.ps', dpi=200)
        fig1.savefig('pplot/static/img/' + username + logintime + 'pplot.svgz', dpi=200)
        # fig1.savefig('graph/static/img/test.pgf', dpi=200)#latex not installed sudo apt-get install texlive-xetex
        fig1.savefig('pplot/static/img/' + username + logintime + 'pplot.jpeg', dpi=200)
        # fig1.savefig('graph/static/img/test.raw', dpi=200)#if needed
        fig1.savefig('pplot/static/img/' + username + logintime + 'pplot.tif', dpi=200)

        saved = True

        dis = 'static/img/' + username + logintime + 'pplot.png'
        # shutil.copyfile('graph/static/img/'+username+logintime+'.png', dis)
        saved = True
        imagelink = 'img/' + username + logintime + 'pplot.png'
        filelink = 'xlsx/' + username + logintime + 'pplot.xlsx'
        bplot.legend.location = "top_left"
        bplot.legend.background_fill_color = "white"
        bplot.legend.background_fill_alpha = 0.5

        div_script, div_tag = autoload_static(bplot, CDN, "js")

        image = 'img/' + username + logintime+'pplot'
        plotgraph = 1
        tabled = 1
        return render(request,'pindex.html',locals())









