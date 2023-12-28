from django.views.generic import TemplateView
from django.http import HttpResponse
from django.conf import settings
import os
import logging
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def serve_react(request):
    try:
        with open(os.path.join(str(settings.BASE_DIR), 'static', 'build', 'index.html')) as f:
            return HttpResponse(f.read())
    except FileNotFoundError:
        logging.exception("Production build of app not found")
        return HttpResponse("Production build of app not found", status=500)
