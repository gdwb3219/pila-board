from rest_framework import serializers
from .models import board_test_table, User, Category, Post, Comment

class BoardTestTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = board_test_table
        fields = '__all__'  # This will include all fields of the model in the API.

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
