from django.urls import path
from CatPics import views

CatPicsUrlPatterns = [
    path('', views.index, name='index'),
    path('pic-feed', views.pic_feed, name='pic-feed'),
    path('pic-upload', views.pic_upload, name='pic-upload')
]
