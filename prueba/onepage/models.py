from django.db import models

# Create your models here.


class Question(models.Model):

	question_1         = models.BooleanField(default=True)
	question_2         = models.BooleanField(default=True)
	question_3         = models.BooleanField(default=True)
	question_4         = models.BooleanField(default=True)
	question_5         = models.BooleanField(default=True)
	question_6         = models.BooleanField(default=True)
	answer             = models.BooleanField(default=True, help_text='Answer is ')


	def __str__(self):
		return self.answer