from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def home(request):
	data = []
	return JsonResponse(data, safe=False)
