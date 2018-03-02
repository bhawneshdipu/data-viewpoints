from django.shortcuts import render

# Create your views here.
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
import quandl, math
import numpy as np
import pandas as pd
from sklearn import preprocessing,  svm
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt
from matplotlib import style
import datetime


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

    pathi='reg/static/img/'+username+'*.*'
    pathf = 'reg/static/xlsx/' + username + str(logintime) + '*.*'

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



def handle_non_numerical_data(df):
    columns = df.columns.values

    for column in columns:
        text_digit_vals = {}
        def convert_to_int(val):
            return text_digit_vals[val]

        if df[column].dtype != np.int64 and df[column].dtype != np.float64:
            column_contents = df[column].values.tolist()
            unique_elements = set(column_contents)
            x = 0
            for unique in unique_elements:
                if unique not in text_digit_vals:
                    text_digit_vals[unique] = x
                    x+=1

            df[column] = list(map(convert_to_int, df[column]))

    return df

@csrf_exempt
def index(request):
    username=request.COOKIES['user_name']
    logintime=request.COOKIES['login_time']
    

    if request.method=='POST':

        style.use('ggplot')
        fig = plt.figure(figsize=(7,4))
        ax = fig.add_subplot(111)

        fig.subplots_adjust(top=0.85)
        plt.grid(True)
        TOOLS = 'box_select,resize,reset,pan,tap,wheel_zoom,save,hover'
        bplot = figure(plot_width=640, plot_height=480, tools=TOOLS, toolbar_location='above')
        stock=request.POST.get('stock')
        df = quandl.get("WIKI/AAPL",rows=5000)
        #print(len(df))
        #df=pd.read_excel('reg/static/dataset/GOOGL.xlsx')

        #df = handle_non_numerical_data(df)

        df = df[['Adj. Open', 'Adj. High', 'Adj. Low', 'Adj. Close', 'Adj. Volume']]
        df['HL_PCT'] = (df['Adj. High'] - df['Adj. Low']) / df['Adj. Close'] * 100.0
        df['PCT_change'] = (df['Adj. Close'] - df['Adj. Open']) / df['Adj. Open'] * 100.0

        df = df[['Adj. Close', 'HL_PCT', 'PCT_change', 'Adj. Volume']]
        forecast_col = 'Adj. Close'
        df.fillna(value=-99999, inplace=True)
        forecast_out = int(math.ceil(0.2 * len(df)))
        df['label'] = df[forecast_col].shift(-forecast_out)

        X = np.array(df.drop(['label'], 1))
        X = preprocessing.scale(X)
        X_lately = X[-forecast_out:]
        X = X[:-forecast_out]

        df.dropna(inplace=True)

        y = np.array(df['label'])

        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
        clf = LinearRegression(n_jobs=-1)
        clf.fit(X_train, y_train)
        confidence = clf.score(X_test, y_test)

        forecast_set = clf.predict(X_lately)
        df['Forecast'] = np.nan

        last_date = df.iloc[-1].name
        last_unix = last_date.timestamp()
        one_day = 86400
        next_unix = last_unix + one_day

        for i in forecast_set:
            next_date = datetime.datetime.fromtimestamp(next_unix)
            next_unix += 86400
            df.loc[next_date] = [np.nan for _ in range(len(df.columns) - 1)] + [i]

        df['Adj. Close'].plot()
        df['Forecast'].plot()
        plt.legend(loc=4)
        plt.xlabel('Date')
        plt.ylabel('Price')
        plt.legend(loc=0)
        fig1 = plt.gcf()

        if (FileSystemStorage('reg/static/img/').exists(username + logintime + '.png')):
            os.remove('reg/static/img/' + username + logintime + 'reg.png')

        fig1.savefig('reg/static/img/' + username + logintime + 'reg.png', dpi=200)
        dis = 'static/img/' + username + logintime + 'reg.png'
        # shutil.copyfile('graph/static/img/'+username+logintime+'.png', dis)
        saved = True
        imagelink = 'img/' + username + logintime + 'reg.png'
        filelink = 'xlsx/' + username + logintime + 'reg.xlsx'
        bplot.legend.location = "top_left"
        bplot.legend.background_fill_color = "white"
        bplot.legend.background_fill_alpha = 0.5

        div_script, div_tag = autoload_static(bplot, CDN, "js")

        image = 'img/' + username + logintime + 'reg'
        plotgraph = 1
        tabled = 1

        return render(request, 'reg_index.html', locals())
    else:
        return render(request,'reg_index.html',locals())



