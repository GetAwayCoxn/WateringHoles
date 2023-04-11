from django.shortcuts import HttpResponse


def home(request):
    print("found home")
    return HttpResponse('HOME')
