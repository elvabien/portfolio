from django import forms

class ContactForm(forms.Form):
  email = forms.EmailField(
    label='Your email :',
    widget=forms.TextInput(attrs={'class': 'epw-Form-input'}))
  subject = forms.CharField(
    label='Is about :',
    widget=forms.TextInput(attrs={'class': 'epw-Form-input'}),
    max_length=100)
  message = forms.CharField(
    label='Your message :',
    widget=forms.Textarea(attrs={'class': 'epw-Form-input'}),
    max_length=220)

  def clean(self):
    cleaned_data = super(ContactForm, self).clean()

    return cleaned_data
