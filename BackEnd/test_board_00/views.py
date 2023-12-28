from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import board_test_table, User, Category, Post, Comment
from .serializers import BoardTestTableSerializer, UserSerializer, CategorySerializer, PostSerializer, CommentSerializer

class BoardTestTableViewSet(viewsets.ModelViewSet):
    queryset = board_test_table.objects.all()
    serializer_class = BoardTestTableSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

