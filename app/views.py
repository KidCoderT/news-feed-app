from django.shortcuts import render
from django.http import JsonResponse

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://timesofindia.indiatimes.com/"
IMG_URL = "https://static.toiimg.com/thumb/msid-{},width-500,resizemode-4/{}.jpg"


def home(request):
    data = []

    r = requests.get(BASE_URL)
    soup = BeautifulSoup(r.content, "html5lib")
    feeds = soup.find_all("div", class_="col_l_6")  # type: ignore

    for feed in feeds:
        try:
            a = feed.find("a")
            tag = a["href"].split("/")[3]
            title = a.find("figcaption").get_text()
            img_id = a["href"].split("/")[-1][:-4]
            img_url = IMG_URL.format(img_id, img_id)
            data.append({"title": title, "tag": tag, "img_url": img_url})
        except Exception as e:
            print(e)

    return JsonResponse(data, safe=False)
