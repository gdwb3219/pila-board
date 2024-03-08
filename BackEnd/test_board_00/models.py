from django.db import models

class User(models.Model):
    username = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)  # This will store the hashed password
    profile_picture = models.CharField(max_length=255, blank=True, null=True)
    date_joined = models.DateTimeField(auto_now_add=True)

class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    body = models.TextField()
    date_time_posted = models.DateTimeField(auto_now_add=True)
    upvotes = models.IntegerField(default=0)
    downvotes = models.IntegerField(default=0)

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    body = models.TextField()
    date_time_commented = models.DateTimeField(auto_now_add=True)
    upvotes = models.IntegerField(default=0)
    downvotes = models.IntegerField(default=0)

# Your test table
class board_test_table(models.Model):
    key = models.CharField(max_length=10, db_column='key')  # 'key' is a reserved keyword in Python
    title = models.CharField(max_length=255)
    contents = models.TextField()
    created_by = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)

# BoardList
class BoardList(models.Model):
    contents = models.TextField()
    createdBy = models.CharField(max_length=10)
    hashtag = models.TextField(null=True) # HashTag List 받아서 디코딩
    title = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now=True)
