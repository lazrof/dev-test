from django.shortcuts import render



# Create your views here.
def one_page_view(request):
	template_name = 'index.html'
	context = {}

	return render(request,template_name, context)


