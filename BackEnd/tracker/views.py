from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from tracker.models import Expenses
from tracker.serializer import ExpensesSerializer


# Create your views here.
@api_view(['GET', 'POST'])
def GetExpenses(request):
    """
    List all tasks, or create a new task.
    """
    if request.method == 'GET':
        tasks = Expenses.objects.all()
        serializer = ExpensesSerializer(tasks, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ExpensesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def GetExpense(request, pk):
    """
    Get, udpate, or delete a specific task
    """
    try:
        task = Expenses.objects.get(pk=pk)
    except Expenses.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ExpensesSerializer(task)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ExpensesSerializer(task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serilizer.errors,
                            status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
