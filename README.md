# HTML

# Types of elements in HTML?
--The html element are defined by start tag,some contents and end tag

## block level element
-- A block level elements starts at new line and takes up the full width availavle.
-- Ex: <div>,<h1>-<h6>,<p>,<form>,<table> etc..
  
 ## inline element
 -- An element doesn't start on new line and takes up necessary width
 
 - Ex: <span>,<a>,<img>,<strong>,<b>,<li>,<input> etc..



# what are simantic elements?
-- A semantic element clearly describes its meaning to both the browser and the developer. 
- Ex of non-semantic elements: <div> and <span> - Tells nothing about its content. 
 - Ex: <form> , <table> , and <article> - Clearly defines its content.

# why <!Doctype html>? what happens if you didn't include?
- Doctype stands for Document Type Declaration. It informs the web browser about the type and version of HTML used in building the web document
- If we didn't specify we will enter 'Quirks mode' depends upon the web browser version, If is older version then this will not support HTML5 tags (Example: header tag, footer tag, section tag,...)

# difference between local storage and cookies?
- Cookies are primarily for reading server-side.Capacity is 4kb.
- local storage can only be read by the client-side.Capacity is 10mb.

# How to specify headers in an HTML page?
- headers are <h1> to <h6>
  - EX <h1>Hello</h1>

# Geolocation API?
- To get the geographical position of a user(longitude,latitude)

#How web page is loaded?
##DNS(Domain Name System) is a database that maintains the name of the website (URL) and the particular IP address it links to. Every single URL on the internet has a unique IP address assigned to it
-when we search something on url
  -firstly it will search in browser cache.If not found
  -then it will search in os cache.if fails
  -seaches in router cache
  -and also searches in ISP cache
  
  -if the data not found
  
  -the DNS will initiate DNS query to check in multiple DNS server if ip found the browser initate TCP(transmission control protocal).
  -to transfer data it should establish a connection using 3way handshaking property
  
  -initially the browser loads HTML skeleton then will will check tags and send GET request(js,css etc) once it is fetched the static files are cached by browser so    it's not necessary to load again


# CSS

## positioning properties?
- Static : the elements are positioned static by default.
- Relative : the elements will be positioned relative to its previous element using (top,left,bottom,right) properties
- Absolute : 


  

  
