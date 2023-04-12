from django.shortcuts import HttpResponse


def home(request):
    print("found home")
    file = open('static/index.html').read()
    resp = HttpResponse(file)
    return resp
