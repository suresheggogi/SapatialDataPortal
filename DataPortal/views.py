from django.shortcuts import render
from django.contrib import admin
from django.urls import path


def LoginPage(request):
    return render(request, 'LoginPage.html')

def HomePage(request):
    return render(request, 'HomePage.html')

def SpatialData(request):
    return render(request, 'SpatialData.html')


def AdministrativeBoundaries(request):
    return render(request, 'AdministrativeBoundaries.html')
