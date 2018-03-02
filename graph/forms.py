from django import forms
from graph.models import Document
from  graph.models import Image





class DocumentForm(forms.ModelForm):
    class Meta:
        model = Document
        fields = '__all__'

class Imageform(forms.ModelForm):
    class Meta:
        model=Image
        fields='__all__'
