if medium.generic.url == "/generics/original/missing.png"
  json.generic {}
  json.generic_name ''
else
  json.generic medium.generic_url
  json.generic_name medium.generic_file_name
end
