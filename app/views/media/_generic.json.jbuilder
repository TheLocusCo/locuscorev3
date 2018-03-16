if medium.generic.url == "/images/original/missing.png"
  json.generic {}
  json.generic_name ''
else
  json.generic medium.generic_url
  json.generic_name medium.generic_file_name
end
