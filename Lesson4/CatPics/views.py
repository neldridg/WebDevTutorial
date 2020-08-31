from django.shortcuts import render, redirect
from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse

# Create your views here.
from CatPics.forms import PicForm
from CatPics.models import Pic


def index(request):
    return render(request, 'default_layout.html')


def pic_feed(request):
    cat_pics = Pic.objects.all()
    return render(request, 'pic_feed.html', {'pics': cat_pics})


def pic_upload(request):
    if request.method == 'POST':
        form = PicForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('pic-feed')
    else:
        form = PicForm()
    return render(request, 'pic_upload.html', {
        'form': form
    })
