from django.shortcuts import render

from django.shortcuts import render,render_to_response,redirect
from graph.forms import DocumentForm
from django.template import RequestContext
from django.core.files.storage import FileSystemStorage

import  os
import openpyxl
from origin import settings
from django.core.files import File
from matplotlib import pyplot as plt
import numpy as np
from scipy import linspace, polyval, polyfit, sqrt, stats
from scipy.optimize import curve_fit
import matplotlib.mlab as mlab
from scipy.interpolate import  interp1d
# Create your views here.
from django.http import HttpResponse,HttpResponseRedirect
import csv
import numpy as np
from sklearn.neural_network import MLPRegressor
from matplotlib import pyplot as plt
import  django
from django.core.cache import  cache
import random
import math

def index(request):
    if request.method!='POST':

        username = request.COOKIES['user_name']
        return render(request, 'ann_index.html', locals())
    else:

        fs = FileSystemStorage(location='ann/static/csv/')

        if(os.path.isfile("ann/static/csv/xfile.csv")):
            os.remove("ann/static/csv/xfile.csv")
        if (os.path.isfile("ann/static/csv/ofile.csv")):
            os.remove("ann/static/csv/ofile.csv")

        if (os.path.isfile("ann/static/csv/yfile.csv")):
                os.remove("ann/static/csv/yfile.csv")

        if (os.path.isfile("ann/static/csv/tfile.csv")):
                    os.remove("ann/static/csv/tfile.csv")

        '''fs._save("lxfile.csv", request.FILES.get("lxfile"))
        fs._save("lyfile.csv", request.FILES.get("lyfile"))
        '''
        fs._save("xfile.csv", request.FILES.get("xfile"))
        fs._save("yfile.csv", request.FILES.get("yfile"))
        fs._save("tfile.csv", request.FILES.get("tfile"))

        #fs._save("ofile.csv", request.FILES.get("ofile"))

        i = 0
        largeIn=[]
        largeout=[]
        large_xin=[]
        lvInput = []
        lvTarget = []
        lvTest = []
        x_in = []
        x_t = []
        o_in=[]
        o_op=[]


        with open('ann/static/csv/xfile.csv', 'r') as xfile:
            readx = csv.reader(xfile, delimiter=',')
            for row in readx:
                row=list(map(float,row))
                lvInput.append(row)
                x_in.append((float(row[0])))
        with open('ann/static/csv/yfile.csv', 'r') as yfile:
            ready = csv.reader(yfile, delimiter=',')
            for row in ready:
                lvTarget.append(float(row[0]))


        with open('ann/static/csv/tfile.csv','r') as tfile:
            readt = csv.reader(tfile, delimiter=',')
            for row in readt:
                row=list(map(float,row))
                lvTest.append(row)
                x_t.append(float(row[0]))




    # create neural network
    solver=request.POST.get('solver')
    act=request.POST.get('activation')

    reg = MLPRegressor(hidden_layer_sizes=(10), activation=act, solver=solver,random_state=1)
    #reg.fit(largeIn,largeout)

    reg.fit(lvInput, lvTarget)

    #test Prediction
    predict = reg.predict(lvTest)
    #print("_Input_\t_output_\t_Target_")
    #for i in range(len(lvTest)):
    #    print(" ", lvTest[i], "------>", predict[i], "----->", lvTarget[i],"---->",x_in[i])



    fig = plt.figure()
    fig.suptitle(request.POST.get('name'), fontsize=22, fontweight='bold', color='red')
    ax = fig.add_subplot(111)

    fig.subplots_adjust(top=0.85)
    ax.set_title(request.POST.get('axis'))
    ax.set_xlabel(request.POST.get('xlable'))
    ax.set_ylabel(request.POST.get('ylable'))
    ax.plot()
    plt.grid(True)




    plt.plot(x_in, lvTarget, marker=',', markersize=0.0001, alpha=1, color='#2bb3ff', label="Orignal")

    plt.plot(x_t, predict, marker='_', markersize=0.0001, alpha=1, color='r', label="Predicted")

    #plt.plot(o_in, o_op, marker='^', markersize=1, alpha=1, color='b', label="Real")
    plt.plot([0],[0],marker='.',markersize=0.0000001,color='w',label="R^2 Error="+str(reg.score(lvInput,lvTarget)))
    plt.legend(loc=0)
    fig1 = plt.gcf()
    if (FileSystemStorage('/static/img/').exists('ann.png')):
        os.remove('static/img/ann.png')

    fig1.savefig('ann/static/img/ann.png', dpi=200)
    #plt.show()

    if (FileSystemStorage('/static/img/').exists('ann.png')):
        os.remove('static/img/ann.png')

    saved = True
    username=request.COOKIES['user_name']
    return render(request, 'ann_index.html', locals())



