#! /usr/bin/

import re
from data import data


def search(term):
    for dicts in data:
        if re.search(term,dicts['title']):
            print(dicts)
        else:
            continue

    print("this is all we found")



search(input("input a term to search:"))
