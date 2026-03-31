from django.shortcuts import render
from django.http import HttpResponse

def home(response):
    return HttpResponse("HOME PAGE")

def rooms(response):
    return HttpResponse("ROOMS PAGE")