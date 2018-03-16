if medium.image.url == "/images/original/missing.png"
  json.image {}
else
  json.image medium.image_urls
end
