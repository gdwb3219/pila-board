from django.urls import path, include
from . import views
from .views import UserViewSet, CategoryViewSet, PostViewSet, CommentViewSet, BoardTestTableViewSet, BoardListViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'board_test_table', BoardTestTableViewSet)
router.register(r'users', UserViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'boardlist', BoardListViewSet)
# router.register(r'board_test', BoardTestTableViewSet)


urlpatterns = [
    # path('', views.app_view, name='app'),
    # path('board/', views.board_content_view, name='board_content'),
    # path('members/', views.members_view, name='members'),
    # path('board/<int:idx>/', views.board_detail_view, name='board_detail'),
    # path('write/', views.input_form_view, name='input_form'),
    path('', include(router.urls)),  # This includes all the routes generated by the router.
]
