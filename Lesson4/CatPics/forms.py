from django import forms
from CatPics.models import Pic


class PicForm(forms.ModelForm):
    image = forms.ImageField(allow_empty_file=False)

    class Meta:
        model = Pic
        fields = {'image'}
