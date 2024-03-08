from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import viewsets, status
from .models import board_test_table, User, Category, Post, Comment, BoardList
from .serializers import BoardTestTableSerializer, UserSerializer, CategorySerializer, PostSerializer, CommentSerializer, BoardListSerializer

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

class BoardListViewSet(viewsets.ModelViewSet):
    queryset = BoardList.objects.all()
    serializer_class = BoardListSerializer

#     @action(detail=True, methods = ['get'])
#     def mark_as_read(self, request, pk=None):
#         board = self.get_object()
#         board.mark_as_read()
#         return Response({'status': 'Book marked as read'})

    def list(self, request):
        data = self.get_serializer(self.get_queryset(), many=True).data
        return Response(data=data, status=status.HTTP_200_OK)

    def retrieve(self, request, pk=None):
        try:
            # pk로 주어진 ID를 가진 BoardList 객체를 찾습니다.
            board = BoardList.objects.get(pk=pk)
        except BoardList.DoesNotExist:
            # 객체를 찾을 수 없는 경우, 404 Not Found 응답을 반환합니다.
            return Response(status=status.HTTP_404_NOT_FOUND)

        # 객체를 찾은 경우, 해당 객체의 데이터를 직렬화하여 반환합니다.
        serializer = self.get_serializer(board)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

