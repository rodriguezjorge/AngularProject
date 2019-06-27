from rest_framework import serializers

from tracker.models import Expenses


class ExpensesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expenses
        fields = ('description', 'amount', 'types', 'date')
