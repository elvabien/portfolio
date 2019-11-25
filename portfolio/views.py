# -*- coding: utf-8 -*-
from portfolio.forms import ContactForm
from django.shortcuts import render, redirect
from django.core.exceptions import ValidationError

def contact(request):
  if len(request.POST) > 0:
    form = ContactForm(request.POST)
    if form.is_valid():
      return redirect('/contact')
    else:
      return render(request, 'contact.html', {'form': form})
  else:
    form = ContactForm()
    return render(request, 'contact.html', {'form': form})

def welcome(request):
  return render(request, 'index.html')
