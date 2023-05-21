
from bs4 import BeautifulSoup
import requests

file=open("data.py","w")

webpage=requests.get("https://mereja.com/amharic/v2")
soup=BeautifulSoup(webpage.text,"html.parser")


tag=soup.find_all("a",attrs={"rel":"bookmark"})
lists="data=["

for el in tag:
    lists=lists+"{'title': "+'"'+el.string+'"'+",'url': "+'"'+el['href']+'"'+"},"

final=lists[0:-1]+"]"
file.write(final)
