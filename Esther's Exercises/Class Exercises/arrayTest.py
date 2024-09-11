from unittest import TestCase
from arrayTask import *

class MyTestCase(TestCase):
    def test_that_list_can_reverse_numbers(self):
        self.assertEqual(reverse_list([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1])

