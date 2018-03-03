from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, render_to_response, redirect
from graph.forms import DocumentForm
from django.template import RequestContext
from django.core.files.storage import FileSystemStorage
import os
import openpyxl
from openpyxl import Workbook
from origin import settings
from graph.forms import DocumentForm
from graph.models import Document, Image
from django.core.files import File
from matplotlib import pyplot as plt
import numpy as np
from scipy import linspace, polyval, polyfit, sqrt, stats
from scipy.optimize import curve_fit
import matplotlib.mlab as mlab
from scipy.interpolate import interp1d
# Create your views here.
from django.http import HttpResponse, HttpResponseRedirect, HttpRequest
import pandas as pd
from django.views.decorators.csrf import csrf_exempt
import shutil
from bokeh.plotting import figure, output_file, show
from bokeh.resources import CDN
from bokeh.embed import components
from bokeh.embed import autoload_static
import datetime, time
import glob
from scipy import arange
from matplotlib import animation
from math import sqrt, sin, cos, asin, acos, atan, tan, tanh, asinh, acosh, pow, sinh, cosh, tanh, log, log10, exp
import quandl, math
import numpy as np
import pandas as pd
from sklearn import preprocessing, svm
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt
from matplotlib import style
import datetime
from PIL import Image
import base64

from PIL import Image, ImageOps
import numpy as np
import pickle


@csrf_exempt
def del_user(request):
    request.session.set_test_cookie()
    ddata = 0
    tabled = 0
    plotgraph = 0
    username = 'not a valid user'
    logintime = 0
    if 'user_name' in request.COOKIES:
        username = request.COOKIES.get('user_name')
    if 'login_time' in request.COOKIES:
        logintime = request.COOKIES.get('login_time')

    pathi = 'mnist/static/img/' + username + '*.*'
    pathf = 'mnist/static/xlsx/' + username + str(logintime) + '*.*'

    for hgx in glob.glob(pathi):
        os.remove(hgx)
    for hgx in glob.glob(pathf):
        os.remove(hgx)

    if request.session.test_cookie_worked():
        request.session.delete_test_cookie()
        response = HttpResponse("Bye")
        response.delete_cookie('user_name')
        response.delete_cookie('login_time')
        return response
    else:
        return HttpResponse("Sorry")

import re

@csrf_exempt
def save_image(request):
    username=''
    logintime=''
    if 'user_name' in request.COOKIES:
        username = request.COOKIES.get('user_name')
    if 'login_time' in request.COOKIES:
        logintime = request.COOKIES.get('login_time')
    pathi = 'mnist/static/img/' + username + logintime
    img_data=str(request.POST.get('data')).replace(' ','+')
    fh = open("mnist/static/img/image.png", "wb")


    if len(img_data) % 4:
        img_data += '=' * (4 - len(img_data) % 4)
    #data=[img_data[i:i+4] for i in range(0,len(img_data),4)]
    #print(data)
    fh.write(base64.standard_b64decode(img_data))
    fh.close()
    return HttpResponse(1)



@csrf_exempt
def index(request):
    username = request.COOKIES['user_name']
    logintime = request.COOKIES['login_time']

    if request.method == 'POST':
        oimg = Image.open('mnist/static/img/image.png')
        oimg.load()
        data = np.asarray(oimg, dtype="int32")
        print(data.shape)
        x, y, z = data.shape
        print(x, y, z)
        print(data[:][:][3])
        newdata = np.arange(400 * 400).reshape(400, 400)
        print(newdata.shape)
        print(newdata)
        for i in range(x):
            for j in range(y):
                if data[i][j][3] > 150:
                    newdata[i][j] = 255
                else:
                    newdata[i][j] = 0

        iimg = Image.fromarray(np.asarray(newdata, dtype="uint8"),"L")
        iimg.save('mnist/static/img/newimage.png')
        iimg = Image.open('mnist/static/img/newimage.png')
        iimg.load()
        iimg.thumbnail((28, 28), Image.ANTIALIAS)
        # im2 = img.resize((width, height), Image.NEAREST)
        iimg.save("mnist/static/img/reimage" + ".png")
        reimg=Image.open('mnist/static/img/reimage.png')
        arr = np.asarray(reimg, dtype="uint8")
        ar=arr
        ar.setflags(write=1)
        for i in range(28):
            for j in range(28):
                if ar[i][j]>150:
                    ar[i][j]=255
                else:
                    ar[i][j]=0


        with open('a.txt','w')as f:
            f.write(str(ar))
        f.close()
        ar = np.reshape(ar, (784,))
        print(ar.shape)
        ar = (ar - (255 / 2.0)) / 255  # normalize -0.5 to  0.5
        ar = ar.reshape(1, -1)
        print(ar)
        classifier = pickle.load(open('mnist/my_digit.py', 'rb'))
        predicted_result=classifier.predict(ar)
        result=predicted_result[0]
        print(str(' '+str(predicted_result)+' '))
        saved=1
        img_path=str('/static/img/newimage.png')

        return  render(request,'image_analysis.html',locals())
    else:
        return render(request, 'image_analysis.html', locals())


