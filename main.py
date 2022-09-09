#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Sep  9 16:49:22 2022

@author: yabsera
"""


from kivy.app import App
from kivy.uix.label import Label
from kivy.uix.button import Button
from kivy.uix.gridlayout import GridLayout
from kivy.uix.image import Image

import random
from requests import get
from bs4 import BeautifulSoup

def string(str):
    nstr=str.split()
    newstr=""
    for i in nstr:
        newstr+=i
        if(i[len(i)-1]=="."):
            newstr+="\n"
        elif(i.find(".Published")!=-1):
            newstr+="\n"
        else:
            newstr+=" "
    return newstr



class News(App):
    def build(self):
        self.window=GridLayout()
        self.window.cols=1
        self.window.size_hint=(0.6, 0.4)
        self.window.pos_hint={"center_x":0.5, "center_y":0.5}
        
        
        self.window.add_widget(Image(source="news.png"))
        self.fromnews=Label(text="News of Africa")
        self.window.add_widget(self.fromnews)
        
        self.button = Button(text="News")
        self.button.bind(on_press=self.Newfromtheworld)
        self.window.add_widget(self.button)
        return self.window
    
    def Newfromtheworld(self,instance):
        cnnurl="https://edition.cnn.com/africa"
        cnn=get(cnnurl).content
        newscnn=BeautifulSoup(cnn,'html.parser')
        newscnn="from CNN: "+newscnn.find("span", class_="cd__headline-text vid-left-enabled").text
        foxurl="https://www.foxnews.com/category/world/world-regions/africa"
        foxurl=get(foxurl).content
        newsfox=BeautifulSoup(foxurl,"html.parser")
        newsfox="from FoxNews: "+newsfox.find("h4",class_="title").text
        alajurl="https://www.aljazeera.com/africa/"
        alaj=get(alajurl).content
        alajnews=BeautifulSoup(alaj,'html.parser')
        alajnews="from aljazeera: "+alajnews.find("a",class_="u-clickable-card__link").text
        alaurl="https://english.alarabiya.net/tools/search?query=africa+news"
        ala=get(alaurl).text
        alanews=BeautifulSoup(ala,'html.parser')
        alanews="from alarabiya: "+alanews.find("h4",class_="latest_news").text
        alanews=string(alanews)
        newslist=[alajnews,alanews,newsfox,newscnn]
        newlist=newslist[random.randint(0,3)]
        self.fromnews.text=newlist


if __name__=="__main__":
    News().run()