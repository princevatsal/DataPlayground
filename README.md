# Online SQL clone ( Play with data )

This is a single page web application that mimics the behaviour of SQL terminal . It supports SELECT and DELETE query with filters . It also supports autofilling of queries by GUI. It also supports remembering last command for ease.

## URLS

Hosted: https://62913a6256dec4009bdf0efd--radiant-manatee-3fc4c5.netlify.app
Video: https://youtu.be/jTH-u07RQ14

## Framework and library

This project is created with React Framework
No extra library used , only react libraries

## Load Time of app

170ms (measure by https://tools.pingdom.com)

## Steps taken to reduce load time

1:> Removal of UI library bootstrap which contains a lot of files and a lot of unused code that consumes space , instead used custom table made with html and css

2:> Assets are compressed to reduce the bandwidth

## Steps to run

1:> git clone
2:> cd into repo
3:> npm install
4:> npm start
5:> open http://localhost:3000 in browser
