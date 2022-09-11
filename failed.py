#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Sep 11 15:28:25 2022

@author: yabsera
"""
import random
from kivy.app import App
from kivy.uix.boxlayout import BoxLayout


class MyRoot(BoxLayout):
    def __init__(self):
        super(MyRoot,self).__init__
    def Numbermade(self):
       self.r1.text=str(random.randint(0,6))
        
class ok(App):
    
    def build(self):
        return MyRoot()
        
        
num=ok()
num.run()